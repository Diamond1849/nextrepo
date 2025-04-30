import { motion } from "framer-motion";

const brandLogos = [
  {
    name: "Toyota",
    logo: "https://images.pexels.com/photos/4489641/pexels-photo-4489641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Honda",
    logo: "https://images.pexels.com/photos/4489730/pexels-photo-4489730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "BMW",
    logo: "https://images.pexels.com/photos/3457780/pexels-photo-3457780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Mercedes-Benz",
    logo: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Ford",
    logo: "https://images.pexels.com/photos/3349576/pexels-photo-3349576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Chevrolet",
    logo: "https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Audi",
    logo: "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Volkswagen",
    logo: "https://images.pexels.com/photos/1364838/pexels-photo-1364838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const BrandsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Marcas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos repuestos originales y alternativos para las principales marcas 
            de vehículos, garantizando calidad y compatibilidad.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {brandLogos.map((brand, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div 
                className="w-24 h-24 mb-4 bg-contain bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${brand.logo})` }}
              ></div>
              <h3 className="font-medium text-lg">{brand.name}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿No encuentra la marca que busca? Contáctenos y haremos todo lo posible para conseguir los repuestos que necesita.
          </p>
          <a 
            href="#contacto"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;