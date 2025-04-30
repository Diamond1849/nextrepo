"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const HeaderChambs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Inicio", id: "inicio" },
    { name: "Marcas", id: "marcas" },
    { name: "Servicios", id: "servicios" },
    { name: "Nosotros", id: "nosotros" },
    { name: "Contacto", id: "contacto" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-black/95 text-white shadow-lg border-red-700"
          : "bg-black/90 text-white border-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="w-48">
            <img 
              src="https://i.ibb.co/67yQrC9j/Imagen-de-Whats-App-2025-04-02-a-las-08-55-38-ccc392c3.png" 
              alt="Chambs Logo" 
              className="h-12 object-contain"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              data-scroll-to={link.id}
              className={cn(
                "px-4 py-2 rounded-md font-medium transition-all duration-200 cursor-pointer relative group",
                activeLink === link.id
                  ? "text-red-500"
                  : "text-white hover:text-red-400"
              )}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.name}
              <span 
                className={cn(
                  "absolute -bottom-1 left-0 w-full h-0.5 bg-red-500 transform transition-transform duration-300",
                  activeLink === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-75"
                )}
              />
            </a>
          ))}
        </nav>

        {/* Espacio adicional para equilibrar el layout */}
        <div className="hidden md:block w-48">
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white focus:outline-none p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-black z-40 transition-all duration-500 ease-in-out",
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
          <div className="mb-8">
            {/* Mobile logo */}
            <img 
              src="https://i.ibb.co/67yQrC9j/Imagen-de-Whats-App-2025-04-02-a-las-08-55-38-ccc392c3.png" 
              alt="Chambs Logo" 
              className="h-12 object-contain"
            />
          </div>
          
          {navLinks.map((link) => (
            <a
              key={link.id}
              data-scroll-to={link.id}
              className={cn(
                "text-2xl font-medium transition-colors duration-200 cursor-pointer relative px-4 py-2",
                activeLink === link.id ? "text-red-500" : "text-white"
              )}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.name}
              <span 
                className={cn(
                  "absolute -bottom-1 left-1/2 w-12 h-0.5 bg-red-500 transform -translate-x-1/2 transition-opacity duration-300",
                  activeLink === link.id ? "opacity-100" : "opacity-0"
                )}
              />
            </a>
          ))}
          
          {/* Se ha eliminado el botón de cotizar */}
        </div>
        
        {/* Close button at top-right */}
        <button
          className="absolute top-6 right-6 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
};

export default HeaderChambs;