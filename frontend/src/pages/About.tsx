// frontend/src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 main-container">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Sobre Mí</h1>
        
        <div className="space-y-8 text-lg text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-sky-600 mb-3">Mi Pasión</h2>
            <p>
              ¡Hola! Soy Oswaldo Leon, un desarrollador de software con una profunda pasión por la tecnología y la resolución creativa de problemas. 
              Me encanta transformar ideas complejas en aplicaciones web funcionales, intuitivas y estéticamente agradables.
              Mi objetivo es siempre aprender y aplicar nuevas tecnologías para construir productos de alta calidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-sky-600 mb-3">Experiencia y Habilidades</h2>
            <p>
              Tengo experiencia trabajando con una variedad de tecnologías frontend y backend, incluyendo:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
              <li><strong>Frontend:</strong> React, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux.</li>
              <li><strong>Backend:</strong> Python (Django, Flask), Node.js (Express).</li>
              <li><strong>Bases de Datos:</strong> PostgreSQL, MySQL, MongoDB, SQLite.</li>
              <li><strong>Herramientas:</strong> Git, Docker, Vite, Webpack, Jest.</li>
            </ul>
            <p className="mt-2">
              Me considero un aprendiz constante, siempre buscando expandir mi conjunto de habilidades y mantenerme actualizado con las últimas tendencias en el desarrollo web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-sky-600 mb-3">Mis Intereses</h2>
            <p>
              Además de la programación, disfruto de [Menciona aquí algunos de tus hobbies o intereses, por ejemplo: "la fotografía, explorar nuevas tecnologías emergentes, y contribuir a proyectos de código abierto."]. 
              Estos intereses me ayudan a mantener una perspectiva fresca y a encontrar inspiración en diferentes áreas.
            </p>
          </section>

          <div className="text-center mt-12">
            <a 
              href="/CVOswaldoAndresLeonCastillo (1).pdf" // Asegúrate que esta ruta sea correcta o usa una URL completa si está hosteado
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-sky-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-sky-600 transition-colors duration-300 text-lg"
            >
              Descargar mi CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
