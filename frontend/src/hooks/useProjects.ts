import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { Project } from '../interfaces';
import axios from 'axios';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get<Project[]>('/projects/');
      setProjects(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(`Error al cargar los proyectos: ${err.message}`);
      } else {
        setError('Ocurrió un error inesperado al cargar los proyectos.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, loading, error, refetch: fetchProjects };
};
