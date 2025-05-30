import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    transform: isHovered ? 'scale(1.02) translateY(-10px)' : 'scale(1) translateY(0px)',
    boxShadow: isHovered 
      ? '0 20px 25px -5px rgba(100, 255, 218, 0.1), 0 10px 10px -5px rgba(100, 255, 218, 0.04)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      style={springProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          bgcolor: 'background.paper',
          height: '100%',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
          {project.title}
        </Typography>
        <Typography variant="subtitle1" color="secondary" sx={{ mb: 3 }}>
          {project.period}
        </Typography>
        <Box component="ul" sx={{ m: 0, pl: 2, mb: 3 }}>
          {project.description.map((desc: string, i: number) => (
            <Typography
              key={i}
              component="li"
              variant="body1"
              color="secondary"
              sx={{ mb: 1 }}
            >
              {desc}
            </Typography>
          ))}
        </Box>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {project.technologies.map((tech: string) => (
            <Chip
              key={tech}
              label={tech}
              color="primary"
              variant={isHovered ? "filled" : "outlined"}
              sx={{
                mb: 1,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            />
          ))}
        </Stack>
      </Paper>
    </animated.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Blockchain-Based E-Voting System',
      period: 'Sep 2023 – Nov 2023',
      description: [
        'Architected a blockchain-based e-voting system integrated with electoral infrastructure, cutting costs by $200,000 annually and improving election efficiency.',
        'Automated smart contracts in Solidity with advanced cryptography, reducing security vulnerabilities by 35% and ensuring end-to-end voter data integrity.',
      ],
      technologies: ['Blockchain', 'Solidity', 'Smart Contracts', 'Cryptography'],
    },
    {
      title: 'Android Malware Detection System Using Machine Learning',
      period: 'Nov 2024 – Jan 2025',
      description: [
        'Trained a stacking ensemble model (Logistic Regression, Random Forest, SVM) achieving 84.2% accuracy and 96.93% recall for Android malware detection with minimized false negatives.',
        'Engineered a multi-phase pipeline using permission and behavioral analysis with Gradient Boosting-based feature selection and custom thresholds for risk-level classification.',
        'Deployed a scalable malware detection system on 30,000+ apps using probability-based classification and meta-learning for enhanced real-world threat robustness.',
      ],
      technologies: ['Machine Learning', 'Python', 'Scikit-learn', 'Feature Engineering'],
    },
    {
      title: 'Real-Time Face Recognition Attendance System',
      period: 'Feb 2025 – Mar 2025',
      description: [
        'Developed a real-time Flask-based Face Recognition Attendance System using OpenCV and NumPy, automating authentication and reducing manual effort by over 90%.',
        'Designed and implemented 10+ scalable RESTful APIs for user registration, attendance tracking, analytics, and admin operations, enhancing system modularity and accessibility.',
        'Built secure facial recognition pipelines with CSV export and analytics features, supporting 100+ users and delivering daily actionable attendance reports.',
      ],
      technologies: ['Flask', 'OpenCV', 'NumPy', 'RESTful APIs', 'Face Recognition'],
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
            Projects
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Projects; 