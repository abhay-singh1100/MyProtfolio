import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Maxim Design Systems',
      role: 'Software Developer',
      type: 'Internship',
      period: 'Sep 2024 – Present',
      location: 'Roorkee, Uttarakhand, India',
      achievements: [
        'Engineered TCURVE a multi-panel Python application with PyQt5 and Matplotlib to compare up to 4 datasets simultaneously, boosting data analysis efficiency by 60%.',
        'Integrated NGSpice and SciPy-based optimization, automating parameter tuning and reducing model fitting time by 80% while achieving <5% RMSE accuracy.',
        'Implemented automated scaling, curve fitting, and real-time data export, increasing user productivity by 40% in semiconductor device characterization.',
      ],
    },
    {
      company: 'Infosys Springboard',
      role: 'Python Full Stack',
      type: 'Internship',
      period: 'May 2024 – July 2024',
      location: 'Remote',
      achievements: [
        'Created a Python app to extract bank check data from scanned PDFs using Tesseract OCR, PyPDF2, and OpenCV, improving data processing accuracy.',
        'Designed a Tkinter-based UI with SQLite integration, reducing onboarding time by 25% and enhancing usability through intuitive visual layout and fast queries.',
      ],
    },
  ];

  return (
    <Container>
      <Box sx={{ pt: 12, pb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" color="primary" sx={{ mb: 4 }}>
            Experience
          </Typography>
        </motion.div>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                mb: 4,
                bgcolor: 'background.paper',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
                {exp.company}
              </Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {exp.role} · {exp.type}
              </Typography>
              <Typography variant="subtitle1" color="secondary" sx={{ mb: 2 }}>
                {exp.period} | {exp.location}
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2 }}>
                {exp.achievements.map((achievement, i) => (
                  <Typography
                    key={i}
                    component="li"
                    variant="body1"
                    color="secondary"
                    sx={{ mb: 1 }}
                  >
                    {achievement}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default Experience; 