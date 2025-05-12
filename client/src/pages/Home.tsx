import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedAd from "@/components/FeaturedAd";
import GamesSection from "@/components/GamesSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  // Set document title
  useEffect(() => {
    document.title = "GameVault - Download Free Games";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Download the latest free games for PC. High-quality games with no payment required. Action, RPG, horror, racing, and more genres available.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Download the latest free games for PC. High-quality games with no payment required. Action, RPG, horror, racing, and more genres available.";
      document.head.appendChild(meta);
    }
    
    // Add Open Graph meta tags for better social sharing
    const ogTags = [
      { property: "og:title", content: "GameVault - Download Free Games" },
      { property: "og:description", content: "Download the latest free games for PC. High-quality games with no payment required." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
    ];
    
    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute("content", tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute("property", tag.property);
        meta.setAttribute("content", tag.content);
        document.head.appendChild(meta);
      }
    });
  }, []);
  
  return (
    <>
      <HeroSection />
      <FeaturedAd />
      <GamesSection />
      <HowItWorks />
      <TestimonialsSection />
      <FeaturedAd />
      <FaqSection />
      <NewsletterSection />
    </>
  );
}
