// frontend/src/pages/Projects.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de haberlo instalado: npm install axios
import { Project } from '../interfaces'; // Importa la interfaz actualizada

// Define la URL base de tu API de Django.
// Es una buena práctica almacenarla en una variable de entorno para producción.
const API_BASE_URL = 'http://localhost:8000/api';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        // Realiza la petición GET al endpoint de proyectos de tu API Django
        const response = await axios.get<Project[]>(`${API_BASE_URL}/projects/`);
        setProjects(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.error('Error fetching projects:', err.message);
          setError(`Error al cargar los proyectos: ${err.message}. Asegúrate de que el backend Django esté corriendo en http://localhost:8000 y que CORS esté configurado correctamente.`);
        } else {
          console.error('Unexpected error:', err);
          setError('Ocurrió un error inesperado al cargar los proyectos.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

  if (loading) {
    return <div className="container mx-auto p-4 text-center">Cargando proyectos...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-center text-red-500">{error}</div>;
  }

  if (projects.length === 0) {
    return <div className="container mx-auto p-4 text-center">No hay proyectos para mostrar. Puedes añadir algunos desde el panel de administración de Django.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Mis Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden p-6 transform hover:scale-105 transition-transform duration-300">
            {project.image_url && (
              <img 
                src={project.image_url} 
                alt={`Imagen de ${project.title}`} 
                className="w-full h-48 object-cover mb-4 rounded"
                onError={(e) => {
                  // Manejo de error si la imagen no carga
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // previene bucles infinitos si la imagen placeholder también falla
                  target.src = `https://placehold.co/600x400/EEE/31343C?text=Imagen+no+disponible`;
                  target.alt = `Placeholder para ${project.title}`;
                }}
              />
            )}
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-3 text-sm">{project.description}</p>
            {project.technologies && (
              <div className="mb-3">
                <h4 className="font-semibold text-xs text-gray-600">Tecnologías:</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.technologies.split(',').map(tech => tech.trim()).filter(tech => tech).map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.project_url && (
                <a
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-3 rounded transition-colors duration-200"
                >
                  Ver Proyecto
                </a>
              )}
              {project.repository_url && (
                <a
                  href={project.repository_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-3 rounded transition-colors duration-200"
                >
                  Ver Repositorio
                </a>
              )}
            </div>
             <p className="text-xs text-gray-500 mt-3">
                Actualizado: {new Date(project.updated_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
