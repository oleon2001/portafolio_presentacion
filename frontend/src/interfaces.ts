// frontend/src/interfaces.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  image_url?: string | null; // Hacer opcional si puede no estar
  project_url?: string | null;
  repository_url?: string | null;
  technologies?: string; // Podrías querer parsear esto como un array en el frontend
  created_at: string; // Las fechas suelen venir como strings ISO
  updated_at: string;
}