import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Nuestro equipo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">DESDE 2005</span>
                <h3 className="text-2xl font-bold mt-2">Comprometidos con la excelencia</h3>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-red-600 text-white p-3 rounded-full">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Reconocidos por</p>
                  <p className="font-bold">Calidad y Servicio</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-gray-600 mb-6">
              En <span className="font-semibold">Importadora Chambs</span>, nos dedicamos a proporcionar 
              soluciones de repuestos automotrices de alta calidad desde 2005. 
              Nuestra pasión por los automóviles y el compromiso con la 
              satisfacción del cliente nos han convertido en líderes del sector.
            </p>
            <p className="text-gray-600 mb-8">
              Contamos con un equipo de profesionales experimentados que se aseguran 
              de que cada repuesto cumpla con los más altos estándares de calidad y 
              funcionalidad. Trabajamos directamente con fabricantes y distribuidores 
              internacionales para ofrecer la mejor selección al mejor precio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Equipo Experto</h3>
                  <p className="text-gray-600 text-sm">
                    Profesionales capacitados en el sector automotriz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Misión</h3>
                  <p className="text-gray-600 text-sm">
                    Proveer repuestos de calidad con servicio excepcional.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Calidad Garantizada</h3>
                  <p className="text-gray-600 text-sm">
                    Todos los productos pasan por rigurosos controles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Crecimiento</h3>
                  <p className="text-gray-600 text-sm">
                    Innovación constante para mejorar nuestros servicios.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;