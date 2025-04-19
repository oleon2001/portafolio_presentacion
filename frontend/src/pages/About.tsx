import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';

const About = () => {
  const skills = [
    { icon: <CodeIcon />, text: 'Lenguajes: Java, Python, JavaScript' },
    { icon: <BuildIcon />, text: 'Frameworks: Spring Boot, Django, React, Angular' },
    { icon: <StorageIcon />, text: 'Bases de Datos: MySQL, PostgreSQL, MongoDB' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" gutterBottom>
              Sobre Mí
            </Typography>
            <Typography variant="body1" paragraph>
              Soy un Ingeniero Informático egresado de la Universidad Tecnológica del Centro (UNITEC),
              con un sólido dominio de español, inglés y francés. Me especializo en el desarrollo
              backend y poseo habilidades complementarias en el frontend, lo que me permite abordar
              proyectos de manera integral y eficiente.
            </Typography>
            <Typography variant="body1" paragraph>
              Mi objetivo es aportar valor significativo tanto a nivel personal como profesional,
              colaborando en equipos multidisciplinarios para desarrollar soluciones innovadoras
              y eficientes. Estoy comprometido con el aprendizaje continuo y la aplicación de
              mis conocimientos en proyectos desafiantes.
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Educación
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Ingeniero Informático"
                    secondary="UNITEC (Universidad Tecnológica del Centro), Valencia, Venezuela"
                  />
                </ListItem>
              </List>

              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Experiencia
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <WorkIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Desarrollador de Aplicaciones"
                    secondary="Leon Cuello, Valencia Venezuela (2022 - Presente)"
                  />
                </ListItem>
              </List>

              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Idiomas
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LanguageIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Español"
                    secondary="Nativo"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LanguageIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Inglés"
                    secondary="Alto"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LanguageIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Francés"
                    secondary="Alto"
                  />
                </ListItem>
              </List>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Habilidades Técnicas
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  {skill.icon}
                  <Typography variant="body1">{skill.text}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 