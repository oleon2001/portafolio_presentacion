# Portafolio Profesional - Oswaldo León

Este es un portafolio profesional desarrollado con React y Django, diseñado para mostrar proyectos y habilidades de desarrollo de software.

## Características

- Frontend moderno con React y Material-UI
- Backend robusto con Django REST Framework
- Diseño responsivo y animaciones suaves
- Formulario de contacto funcional
- Galería de proyectos
- Sección de habilidades y experiencia

## Requisitos Previos

- Node.js (v14 o superior)
- Python (v3.8 o superior)
- pip (gestor de paquetes de Python)

## Instalación

### Frontend

1. Navega al directorio del frontend:
   ```bash
   cd frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Backend

1. Crea un entorno virtual:
   ```bash
   python -m venv venv
   ```

2. Activa el entorno virtual:
   - Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - Linux/Mac:
     ```bash
     source venv/bin/activate
     ```

3. Instala las dependencias:
   ```bash
   pip install django djangorestframework django-cors-headers pillow
   ```

4. Navega al directorio del backend:
   ```bash
   cd backend
   ```

5. Ejecuta las migraciones:
   ```bash
   python manage.py migrate
   ```

6. Crea un superusuario:
   ```bash
   python manage.py createsuperuser
   ```

7. Inicia el servidor de desarrollo:
   ```bash
   python manage.py runserver
   ```

## Estructura del Proyecto

```
portafolio/
├── frontend/              # Aplicación React
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/        # Páginas de la aplicación
│   │   └── App.tsx       # Componente principal
│   └── package.json      # Dependencias del frontend
│
└── backend/              # Aplicación Django
    ├── portfolio/        # Aplicación principal
    │   ├── models.py     # Modelos de datos
    │   ├── views.py      # Vistas de la API
    │   ├── urls.py       # URLs de la API
    │   └── serializers.py # Serializadores
    └── manage.py         # Script de administración
```

## Uso

1. El frontend estará disponible en `http://localhost:5173`
2. El backend estará disponible en `http://localhost:8000`
3. La API estará disponible en `http://localhost:8000/api/`

## Personalización

- Para agregar proyectos, accede al panel de administración en `http://localhost:8000/admin`
- Para modificar el diseño, edita los componentes en `frontend/src/components`
- Para cambiar los colores, modifica el tema en `frontend/src/App.tsx`

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios propuestos.

## Licencia

Este proyecto está bajo la Licencia MIT. 