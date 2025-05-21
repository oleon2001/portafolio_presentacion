// frontend/src/pages/Projects.tsx
import React, { useEffect, useState } from 'react';
import { Project } from '../interfaces'; // Importa la interfaz

// URL base de tu backend Django. Asegúrate de que coincida con donde se ejecuta tu backend.
// Si tu backend sirve imágenes desde /media/, y la API devuelve rutas relativas como 'portfolio/images/nombre.jpg',
// necesitarás construir la URL completa.
const BACKEND_URL = 'http://localhost:8000'; // O la URL donde esté desplegado tu backend

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        // La URL de tu API de proyectos. Verifica que sea la correcta.
        const response = await fetch(`${BACKEND_URL}/api/portfolio/projects/`);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (err: any) {
        console.error("Error al obtener proyectos:", err);
        setError(err.message || 'Ocurrió un error al cargar los proyectos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500"></div>
        <p className="ml-4 text-lg text-gray-600">Cargando proyectos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-lg text-gray-700">{error}</p>
        <p className="mt-4 text-gray-500">
          Asegúrate de que el servidor backend esté corriendo en <a href={BACKEND_URL} className="text-sky-500 hover:underline">{BACKEND_URL}</a> y que la ruta de la API sea correcta.
        </p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Proyectos</h1>
        <p className="text-lg text-gray-500">Aún no hay proyectos para mostrar.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Mis Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col">
            <img 
              // Asumiendo que project.image es una ruta relativa como "portfolio/images/imagen.jpg"
              // y tu backend sirve estos archivos desde /media/
              // Si la API ya devuelve la URL completa, puedes usar project.image directamente.
              src={project.image.startsWith('http') ? project.image : `${BACKEND_URL}${project.image}`} 
              alt={project.title} 
              className="w-full h-56 object-cover"
              onError={(e) => {
                // Fallback si la imagen no carga
                (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=Imagen+no+disponible';
                (e.target as HTMLImageElement).alt = 'Imagen no disponible';
              }}
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto bg-sky-500 text-white text-center font-medium py-2 px-4 rounded-md hover:bg-sky-600 transition-colors duration-200 self-start"
                >
                  Ver Proyecto
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
