import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: 'Task Manager Pro',
    description: 'Sistema avanzado de gestión de tareas con backend en Django y frontend en React. Implementa autenticación segura, gestión de tareas en tiempo real y un dashboard interactivo.',
    technologies: ['Django', 'React', 'PostgreSQL', 'Django REST Framework', 'JWT'],
    image: '/task-manager.jpg',
    features: [
      'Autenticación segura con JWT',
      'Creación y gestión de tareas en tiempo real',
      'Categorización y etiquetado de tareas',
      'Dashboard con estadísticas y gráficos',
      'Notificaciones push y por email',
      'API RESTful documentada con Swagger'
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
      <Grid container spacing={4}>
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
                <CardContent>
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
                      {project.features.map((feature: string, idx: number) => (
                        <li key={idx}>
                          <Typography variant="body2" color="text.secondary">
                            {feature}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech: string) => (
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