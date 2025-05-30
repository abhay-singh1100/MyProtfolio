import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const skills = {
    'Programming Languages': ['Java', 'Python'],
    'AI/ML': ['Model Training', 'Facial Recognition', 'OpenCV', 'TensorFlow', 'Hyperparameter Tuning'],
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'React'],
    'Backend & APIs': ['Flask', 'RESTful API Development'],
    'Databases': ['MySQL', 'Firebase', 'MongoDB'],
    'Tools': ['Power Bi', 'Git']
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
            About Me
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Typography variant="h3" color="secondary" sx={{ mb: 3 }}>
            Education
          </Typography>
          <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: 'background.paper' }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              COER UNIVERSITY ROORKEE
            </Typography>
            <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
              Bachelor of Technology - BTech
            </Typography>
            <Typography variant="body1" color="secondary">
              GPA: 8.4 / 10
            </Typography>
          </Paper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="h3" color="secondary" sx={{ mb: 3 }}>
            Skills
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
            {Object.entries(skills).map(([category, skillList]) => (
              <Paper key={category} elevation={3} sx={{ p: 3, height: '100%', bgcolor: 'background.paper' }}>
                <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                  {category}
                </Typography>
                {skillList.map((skill) => (
                  <Typography
                    key={skill}
                    variant="body1"
                    color="secondary"
                    sx={{ mb: 1 }}
                  >
                    • {skill}
                  </Typography>
                ))}
              </Paper>
            ))}
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Box sx={{ mt: 6 }}>
            <Typography variant="h3" color="secondary" sx={{ mb: 3 }}>
              Certifications
            </Typography>
            <Paper elevation={3} sx={{ p: 3, mb: 3, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Paper Presentation at SocProS 2025 – IIT Roorkee
                <a href="https://www.dropbox.com/scl/fi/e9nle06xszrztk2gcqjuz/Researchpaper.jpg?rlkey=2zct2pnn6yskwnt1sbe3eoovp&e=1&st=nl1ic9rh&dl=0" target="_blank" rel="noopener noreferrer"> View</a>
              </Typography>
              <Typography variant="body1" color="secondary">
                Presented research on "Threshold Optimized Ensemble Learning for Android Malware Detection" at an international conference.
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: 3, bgcolor: 'background.paper' }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Certified Ai & Data Quality Analyst – IIT Mandi iHub & NSDC (2024)
                <a href="https://www.dropbox.com/scl/fi/g3aqsvrtoygbkfsy93xv0/iitmandi.jpg?rlkey=s4m0ua7iyqs8e537itf8x3gj4&e=1&st=9mic7agk&dl=0" target="_blank" rel="noopener noreferrer"> View</a>
              </Typography>
              <Typography variant="body1" color="secondary">
                Completed 480-hour training with Grade A under PMKVY scheme.
              </Typography>
            </Paper>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About; 