// frontend/src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Para botones de navegación
// Asegúrate de que la imagen esté en frontend/public/images/Oswaldo Leon.jpg
// Si renombraste la imagen, actualiza la ruta aquí.
const profileImageUrl = '/images/Oswaldo León.jpg'; // <-- Ruta correcta para archivos en "public/images"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center p-6 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Columna de Texto */}
        <div className="lg:w-1/2 text-center lg:text-left animate-fadeInLeft">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hola, soy <span className="text-indigo-400">Oswaldo León</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Desarrollador Web Full-Stack apasionado por crear soluciones innovadoras y eficientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/projects"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Ver Mis Proyectos
            </Link>
            <Link
              to="/contact"
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Contáctame
            </Link>
          </div>
        </div>

        {/* Columna de Imagen */}
        <div className="lg:w-1/3 mt-10 lg:mt-0 animate-fadeInRight">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src={profileImageUrl}
              alt="Oswaldo León"
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover mx-auto shadow-2xl border-4 border-gray-700 group-hover:border-indigo-500 transition-all duration-300"
              onError={(e) => {
                // Manejo de error si la imagen no carga
                const target = e.target as HTMLImageElement;
                target.onerror = null; // previene bucles infinitos
                target.src = `https://placehold.co/400x400/374151/E0E0E0?text=Oswaldo+León`;
                target.alt = `Placeholder para Oswaldo León`;
              }}
            />
          </div>
        </div>
      </div>

      {/* Pequeña sección "Sobre mí" o "Habilidades" (opcional) */}
      <div className="mt-20 text-center max-w-3xl animate-fadeInUp">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-300">Un Poco Sobre Mí</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Con experiencia en el desarrollo de aplicaciones web robustas y escalables,
          disfruto transformando ideas complejas en interfaces de usuario intuitivas y experiencias digitales atractivas.
          Siempre estoy aprendiendo y explorando nuevas tecnologías para mejorar mis habilidades.
        </p>
      </div>

      {/* Estilos para animaciones (puedes moverlos a tu index.css o App.css) */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 0.4s forwards; /* Delay for fadeInUp */
        }
        
        /* Animación de inclinación para el borde brillante */
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Home;
