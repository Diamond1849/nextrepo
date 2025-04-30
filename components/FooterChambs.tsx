import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const FooterChambs = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">Importadora Chambs</h3>
            <p className="mb-4">
              Su proveedor confiable de repuestos automotrices de alta calidad desde 2005. 
              Nuestra misión es ofrecer las mejores piezas para todas las marcas de vehículos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-red-500 transition-colors duration-200">Inicio</a>
              </li>
              <li>
                <a href="#marcas" className="text-gray-300 hover:text-red-500 transition-colors duration-200">Marcas</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-red-500 transition-colors duration-200">Servicios</a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-red-500 transition-colors duration-200">Nosotros</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-red-500 transition-colors duration-200">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contáctenos</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Av. Principal #123, Ciudad Principal
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="text-gray-300">+593 987 654 321</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-300">info@importadorachambs.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Importadora Chambs. Todos los derechos reservados.</p>
          <div className="mt-2 text-sm flex justify-center space-x-4">
           </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterChambs;