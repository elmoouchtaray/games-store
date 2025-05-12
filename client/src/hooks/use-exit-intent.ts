import { useState, useEffect } from 'react';

interface UseExitIntentOptions {
  threshold?: number;
  maxDisplays?: number;
  eventThrottle?: number;
  cookieName?: string;
  cookieExpiration?: number;
  onExitIntent?: () => void;
}

export function useExitIntent(options: UseExitIntentOptions = {}) {
  const {
    threshold = 20,
    maxDisplays = 1,
    eventThrottle = 200,
    cookieName = 'exitIntentShown',
    cookieExpiration = 7,
    onExitIntent = () => {},
  } = options;

  const [showExitPopup, setShowExitPopup] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    let throttleTimer: number | null = null;
    let lastMouseY = 0;
    
    // Get cookie to check if popup has been shown before
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };
    
    // Set cookie for popup display
    const setCookie = (name: string, value: string, days: number) => {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value};${expires};path=/`;
    };
    
    // Check if popup should be shown
    const shouldShowExitIntent = () => {
      // Don't show if max displays reached
      if (displayCount >= maxDisplays) return false;
      
      // Don't show if cookie exists
      const exitIntentShown = getCookie(cookieName);
      if (exitIntentShown) return false;
      
      // Don't show if less than 10 seconds on page
      const timeSpent = (Date.now() - startTime) / 1000;
      if (timeSpent < 10) return false;
      
      return true;
    };
    
    // Handle mouse leave
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY > threshold) return;
      
      if (shouldShowExitIntent()) {
        setShowExitPopup(true);
        setDisplayCount(prev => prev + 1);
        setCookie(cookieName, 'true', cookieExpiration);
        onExitIntent();
      }
    };
    
    // Handle mouse move (for rapid upward movement detection)
    const handleMouseMove = (e: MouseEvent) => {
      const { clientY } = e;
      
      // If we're already close to the top, don't bother tracking
      if (clientY < threshold) return;
      
      // Throttle the event checking
      if (throttleTimer !== null) return;
      
      throttleTimer = window.setTimeout(() => {
        // Check for rapid upward movement
        const mouseYDelta = lastMouseY - clientY;
        lastMouseY = clientY;
        
        // If there's a rapid upward movement and the cursor is nearing the top
        if (mouseYDelta > 60 && clientY < 100) {
          if (shouldShowExitIntent()) {
            setShowExitPopup(true);
            setDisplayCount(prev => prev + 1);
            setCookie(cookieName, 'true', cookieExpiration);
            onExitIntent();
          }
        }
        
        throttleTimer = null;
      }, eventThrottle);
    };
    
    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, [
    threshold, 
    maxDisplays, 
    eventThrottle, 
    cookieName, 
    cookieExpiration, 
    onExitIntent, 
    displayCount, 
    startTime
  ]);

  return { showExitPopup, setShowExitPopup };
}
