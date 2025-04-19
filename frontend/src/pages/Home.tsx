import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import profileImage from '../assets/Oswaldo León.jpg';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 8,
          gap: 6
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 6 },
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: 4,
            p: { xs: 3, md: 6 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 auto' }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 3,
                color: '#1a1a1a'
              }}
            >
              Hola, soy{' '}
              <Box 
                component="span" 
                sx={{ 
                  color: '#2196f3',
                  background: 'linear-gradient(120deg, #2196f3 0%, #1976d2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Oswaldo León
              </Box>
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 500,
                mb: 3,
                color: '#4a4a4a',
                lineHeight: 1.4
              }}
            >
              Ingeniero Informático especializado en desarrollo backend y frontend
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#666666',
                lineHeight: 1.7,
                maxWidth: '600px'
              }}
            >
              Apasionado por crear soluciones tecnológicas innovadoras y eficientes.
              Experto en Java, Python, JavaScript y frameworks modernos como Spring Boot,
              Django y React.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flexShrink: 0 }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Oswaldo León"
              sx={{
                width: { xs: '200px', md: '240px' },
                height: { xs: '200px', md: '240px' },
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                transform: 'rotate(-2deg)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'rotate(0deg) scale(1.02)',
                  boxShadow: '0 24px 48px rgba(0,0,0,0.12)',
                }
              }}
            />
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 3, 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              mt: 2
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 180,
                backgroundColor: 'rgba(33, 150, 243, 0.04)',
                borderRadius: 2,
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <CodeIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 500 }}>Frontend</Typography>
              <Typography variant="body2" color="text.secondary">
                React, Angular
              </Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 180,
                backgroundColor: 'rgba(33, 150, 243, 0.04)',
                borderRadius: 2,
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <BuildIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 500 }}>Backend</Typography>
              <Typography variant="body2" color="text.secondary">
                Spring Boot, Django
              </Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 180,
                backgroundColor: 'rgba(33, 150, 243, 0.04)',
                borderRadius: 2,
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <StorageIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 500 }}>Bases de Datos</Typography>
              <Typography variant="body2" color="text.secondary">
                MySQL, PostgreSQL
              </Typography>
            </Paper>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home; 