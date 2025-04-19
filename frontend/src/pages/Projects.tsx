import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Sistema de Gestión de Inventario',
    description: 'Sistema completo de gestión de inventario con backend en Spring Boot y frontend en React. Incluye control de stock, generación de reportes y dashboard interactivo.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker'],
    image: '/project1.jpg',
    features: [
      'API RESTful con autenticación JWT',
      'Dashboard con gráficos en tiempo real',
      'Sistema de notificaciones',
      'Generación de reportes PDF'
    ]
  },
  {
    title: 'Plataforma de E-commerce',
    description: 'Plataforma de comercio electrónico desarrollada con Django y React. Implementa carrito de compras, pasarela de pagos y sistema de recomendaciones.',
    technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Redis'],
    image: '/project2.jpg',
    features: [
      'Sistema de búsqueda avanzada',
      'Integración con pasarela de pagos',
      'Sistema de recomendaciones basado en ML',
      'Panel de administración'
    ]
  },
  {
    title: 'API de Gestión de Contenido',
    description: 'API robusta para gestión de contenido multimedia con Spring Boot. Implementa almacenamiento en la nube, procesamiento de imágenes y CDN.',
    technologies: ['Java', 'Spring Boot', 'AWS S3', 'Docker', 'Kubernetes'],
    image: '/project3.jpg',
    features: [
      'Almacenamiento en la nube',
      'Procesamiento de imágenes',
      'Sistema de caché distribuido',
      'Monitoreo y logging'
    ]
  },
  {
    title: 'Sistema de Análisis de Datos',
    description: 'Aplicación web para análisis y visualización de datos con Python y React. Implementa procesamiento de grandes volúmenes de datos y visualizaciones interactivas.',
    technologies: ['Python', 'React', 'D3.js', 'MongoDB', 'Node.js'],
    image: '/project4.jpg',
    features: [
      'Procesamiento de datos en tiempo real',
      'Visualizaciones interactivas',
      'Exportación de datos en múltiples formatos',
      'Dashboard personalizable'
    ]
  }
];

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom align="center">
        Proyectos Destacados
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph align="center">
        Proyectos que demuestran mis habilidades en desarrollo full-stack
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography paragraph color="text.secondary">
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Características principales:
                    </Typography>
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>
                          <Typography variant="body2" color="text.secondary">
                            {feature}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'primary.light',
                          color: 'primary.contrastText',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 