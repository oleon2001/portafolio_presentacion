// frontend/src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center bg-gradient-to-br from-sky-500 to-indigo-600 text-white p-8 main-container">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-10 rounded-xl shadow-2xl max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Bienvenido a Mi Portafolio
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Soy Oswaldo Leon, un desarrollador apasionado por crear soluciones web innovadoras y eficientes.
        </p>
        <div className="space-x-4">
          <Link
            to="/projects"
            className="bg-white text-sky-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-sky-100 transition-colors duration-300 text-lg"
          >
            Ver Proyectos
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-sky-600 transition-colors duration-300 text-lg"
          >
            Contáctame
          </Link>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-xs text-white opacity-50">
          <p>Hecho con React, TypeScript, Vite, Django & Tailwind CSS</p>
      </div>
    </div>
  );
};

export default Home;
