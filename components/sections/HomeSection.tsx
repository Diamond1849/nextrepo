"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HomeSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-black bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", 
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Importadora <span className="text-red-600">Chambs</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Su proveedor confiable de repuestos automotrices de la más alta calidad para todas las marcas de vehículos.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#marcas" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            Ver marcas <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="#contacto" 
            className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300"
          >
            Contáctenos
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2 
        }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSection;