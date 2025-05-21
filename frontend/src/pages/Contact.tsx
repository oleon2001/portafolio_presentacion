// frontend/src/pages/Contact.tsx
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitted(false);
    
    // Aquí normalmente enviarías los datos a un backend o servicio de email.
    // Por ahora, simularemos un envío.
    console.log('Formulario enviado:', formData);

    // Simulación de llamada a API
    try {
      // const response = await fetch('/api/contact', { // Endpoint de ejemplo
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Error al enviar el mensaje.');
      
      // Simulación exitosa
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simula delay de red

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
    } catch (err: any) {
      setError(err.message || 'No se pudo enviar el mensaje. Intenta de nuevo.');
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 main-container">
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Ponte en Contacto</h1>
        
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
            ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm transition-colors"
              placeholder="Tu Nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm transition-colors"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-600">También puedes encontrarme en:</p>
          <div className="flex justify-center space-x-6 mt-4">
            {/* Reemplaza '#' con tus enlaces reales */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 transition-colors">
               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
               <span className="sr-only">Twitter</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.148 6.838 9.49-.5-.922-.638-2.004-.338-2.982.288-.922.992-2.408.992-2.408s-.288-.575-.288-1.437c0-1.35.788-2.362 1.762-2.362.825 0 1.213.612 1.213 1.35 0 .825-.525 2.062-.788 3.212-.225.963.488 1.763 1.438 1.763 1.725 0 3.05-2.2 3.05-5.362 0-2.263-1.588-3.863-4.238-3.863-2.925 0-4.65 2.188-4.65 4.463 0 .825.325 1.725.713 2.212.075.1.088.188.063.288-.075.287-.25 1.012-.288 1.162-.05.188-.2.238-.387.138-1.05-.562-1.7-2.112-1.7-3.412 0-2.662 1.963-5.062 5.625-5.062 3.012 0 5.137 2.137 5.137 4.8 0 2.987-1.712 5.112-4.012 5.112-1.313 0-2.563-.988-2.988-2.138s-.012-.012 0 0zm-1.087 6.75c.188-.812.262-1.75.262-2.675C11.175 8.05 12.925 5 12.925 5S11.175 19 11.175 19c-.75-3.225-.675-5.325-.262-6.25z" clipRule="evenodd" /></svg>
              <span className="sr-only">Pinterest</span>
            </a>
            {/* Agrega más redes si es necesario */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
