import React from 'react';
import { Link } from 'react-router-dom';

const profileImageUrl = '/images/Oswaldo León.jpg';

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center p-6 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Columna de Texto */}
        <div className="lg:w-1/2 text-center lg:text-left animate-fadeInLeft">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hola, soy <span className="text-indigo-400">Oswaldo León</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Desarrollador Web Full-Stack apasionado por crear soluciones innovadoras y eficientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/projects" className="btn-primary text-center">
              Ver Mis Proyectos
            </Link>
            <Link to="/contact" className="btn-secondary text-center">
              Contáctame
            </Link>
          </div>
        </div>

        {/* Columna de Imagen */}
        <div className="lg:w-1/3 mt-10 lg:mt-0 animate-fadeInRight">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
            <img
              src={profileImageUrl}
              alt="Oswaldo León"
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover mx-auto shadow-2xl border-4 border-gray-700 group-hover:border-indigo-500 transition-all duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/400x400/374151/E0E0E0?text=Oswaldo+León`;
              }}
            />
          </div>
        </div>
      </div>

      {/* Sección Sobre mí */}
      <div className="mt-24 text-center max-w-3xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-3xl font-semibold mb-6 text-indigo-300">Un Poco Sobre Mí</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Con experiencia en el desarrollo de aplicaciones web robustas y escalables,
          disfruto transformando ideas complejas en interfaces de usuario intuitivas y experiencias digitales atractivas.
        </p>
      </div>
    </div>
  );
};

export default Home;
