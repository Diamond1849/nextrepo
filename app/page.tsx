"use client";

import { useEffect } from "react";
import HeaderChambs from "@/components/HeaderChambs";
import CarouselChambs from "@/components/CarouselChambs";
import FooterChambs from "@/components/FooterChambs";
import HomeSection from "@/components/sections/HomeSection";
import BrandsSection from "@/components/sections/BrandsSection";
import ServiceSection from "@/components/sections/ServiceSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  // Smooth scroll functionality
  useEffect(() => {
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.hasAttribute("data-scroll-to")) {
        e.preventDefault();
        const sectionId = target.getAttribute("data-scroll-to");
        const section = document.getElementById(sectionId || "");
        
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 80, // Offset for header height
            behavior: "smooth"
          });
        }
      }
    };

    document.addEventListener("click", handleNavLinkClick);
    
    return () => {
      document.removeEventListener("click", handleNavLinkClick);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <HeaderChambs />
      <div className="mt-20">
        <section id="inicio" className="scroll-mt-20">
          <HomeSection />
        </section>
        
        <section id="marcas" className="scroll-mt-20">
          <CarouselChambs />
          <BrandsSection />
        </section>
        
        <section id="servicios" className="scroll-mt-20">
          <ServiceSection />
        </section>
        
        <section id="nosotros" className="scroll-mt-20">
          <AboutSection />
        </section>
        
        <section id="contacto" className="scroll-mt-20">
          <ContactSection />
        </section>
      </div>
      <FooterChambs />
    </main>
  );
}