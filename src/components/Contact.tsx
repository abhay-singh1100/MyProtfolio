import React from 'react';
import { Container, Typography, Box, Paper, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub, Phone, LocationOn } from '@mui/icons-material';

const Contact = () => {
  const contactInfo = {
    email: 'abhaychauhan5051a@gmail.com',
    phone: '8279933693',
    location: 'Haridwar, Uttarakhand, 249402, India',
    linkedin: 'https://www.linkedin.com/in/abhay-singh-1112as',
    github: 'https://github.com/abhay-singh1100',
  };

  return (
    <Container>
      <Box sx={{ pt: 12, pb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" color="primary" sx={{ mb: 4 }}>
            Contact Me
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              bgcolor: 'background.paper',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton color="primary" sx={{ bgcolor: 'background.default' }}>
                  <Email />
                </IconButton>
                <Typography variant="h6" color="secondary">
                  {contactInfo.email}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton color="primary" sx={{ bgcolor: 'background.default' }}>
                  <Phone />
                </IconButton>
                <Typography variant="h6" color="secondary">
                  {contactInfo.phone}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton color="primary" sx={{ bgcolor: 'background.default' }}>
                  <LocationOn />
                </IconButton>
                <Typography variant="h6" color="secondary">
                  {contactInfo.location}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton
                  color="primary"
                  sx={{ bgcolor: 'background.default' }}
                  component="a"
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </IconButton>
                <Typography
                  variant="h6"
                  color="secondary"
                  component="a"
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: 'none' }}
                >
                  LinkedIn Profile
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton
                  color="primary"
                  sx={{ bgcolor: 'background.default' }}
                  component="a"
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub />
                </IconButton>
                <Typography
                  variant="h6"
                  color="secondary"
                  component="a"
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: 'none' }}
                >
                  GitHub Profile
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Contact; 