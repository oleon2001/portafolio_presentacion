import React from 'react';
import { useProjects } from '../hooks/useProjects';

const Projects: React.FC = () => {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center text-red-500 bg-red-50 rounded-lg mt-10">
        <p className="font-semibold">{error}</p>
        <p className="text-sm mt-2">Asegúrate de que el backend esté corriendo.</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-600">No hay proyectos para mostrar.</h2>
        <p className="text-gray-500 mt-2">Puedes añadir algunos desde el panel de administración.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Mis Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            {project.image_url ? (
              <img 
                src={project.image_url} 
                alt={project.title} 
                className="w-full h-52 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Proyecto';
                }}
              />
            ) : (
              <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-gray-400">
                Sin imagen
              </div>
            )}
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {project.technologies && (
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(',').map((tech, index) => (
                      <span key={index} className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-indigo-100">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex gap-3 mt-auto">
                {project.project_url && (
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-4 rounded-lg transition-colors"
                  >
                    Demo
                  </a>
                )}
                {project.repository_url && (
                  <a
                    href={project.repository_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm bg-gray-800 hover:bg-gray-900 text-white font-bold py-2.5 px-4 rounded-lg transition-colors"
                  >
                    Código
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;

