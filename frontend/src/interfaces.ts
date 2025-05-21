// frontend/src/interfaces.ts

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string; // URL de la imagen
    link?: string; // Enlace opcional al proyecto
    created_at: string; // Fecha en formato string (ISO 8601)
  }
  