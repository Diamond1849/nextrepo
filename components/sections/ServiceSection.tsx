import { motion } from "framer-motion";
import { ShieldCheck, Truck, Clock, Phone } from "lucide-react";

const services = [
  {
    title: "Repuestos Garantizados",
    description: "Todos nuestros productos cuentan con garantía de calidad y autenticidad.",
    icon: ShieldCheck,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    title: "Envío Rápido",
    description: "Entregas a domicilio en toda la ciudad y envíos nacionales.",
    icon: Truck,
    color: "text-black",
    bgColor: "bg-gray-100",
  },
  {
    title: "Atención Inmediata",
    description: "Respuesta rápida a todas sus consultas sobre repuestos.",
    icon: Clock,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    title: "Asesoría Técnica",
    description: "Orientación profesional para elegir los repuestos adecuados.",
    icon: Phone,
    color: "text-black",
    bgColor: "bg-gray-100",
  },
];

const ServiceSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En Importadora Chambs nos comprometemos a ofrecerle la mejor experiencia
            con servicios de calidad diseñados para satisfacer sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${service.bgColor} p-6 flex justify-center`}>
                <service.icon className={`h-12 w-12 ${service.color}`} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-red-600 text-white rounded-lg p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Servicio Personalizado</h3>
              <p className="mb-6">
                Entendemos que cada vehículo es único, por eso ofrecemos un servicio
                personalizado para encontrar exactamente lo que necesita.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Búsqueda especializada de repuestos difíciles de encontrar</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Cotizaciones personalizadas según su presupuesto</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Seguimiento de pedidos internacionales</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Asesoría técnica por personal capacitado</span>
                </li>
              </ul>
            </div>
            <div className="h-64 md:h-full relative rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Servicio al cliente" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;