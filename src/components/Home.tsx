import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const AnimatedText = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay,
    config: { tension: 280, friction: 20 },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

const Home = () => {
  const floatAnimation = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-10px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    config: { tension: 300, friction: 10 },
  });

  const gradientText = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: async (next) => {
      while (true) {
        await next({ backgroundPosition: '100% 50%' });
        await next({ backgroundPosition: '0% 50%' });
      }
    },
    config: { duration: 5000 },
  });

  return (
    <Container>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          pt: 8,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <AnimatedText delay={0}>
          <Typography
            variant="h6"
            color="primary"
            sx={{ mb: 2, fontFamily: 'monospace' }}
          >
            Hi, my name is
          </Typography>
        </AnimatedText>

        <AnimatedText delay={100}>
          <animated.div style={gradientText}>
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 2, 
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #64ffda 30%, #0a192f 90%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <center>
                Abhay Singh.
              </center>
            </Typography>
          </animated.div>
        </AnimatedText>

        <AnimatedText delay={200}>
          <Typography
            variant="h2"
            color="secondary"
            sx={{ mb: 4, opacity: 0.8 }}
          >
        I build intelligent systems powered by Data and the Web.
          </Typography>
        </AnimatedText>

        <AnimatedText delay={300}>
          <Typography
            variant="body1"
            color="secondary"
            sx={{ 
              mb: 4, 
              maxWidth: '600px', 
              opacity: 0.7,
              textAlign: 'center',
              margin: '0 auto'
            }}
          >
          I'm a B.Tech student at COER University, with a strong interest in Artificial Intelligence, Machine Learning, Natural Language Processing, and Full-Stack Web Development. I specialize in building intelligent systems that transform data into actionable insights and scalable applications.

          My core strengths lie in combining ML algorithms with robust backend architectures and interactive frontends, using tools like Python, React.js, FastAPI, and SQL/NoSQL databases. I’m driven by curiosity, precision, and a desire to solve real-world problems through clean, efficient, and meaningful code.


                  </Typography>
        </AnimatedText>

        <AnimatedText delay={400}>
          <animated.div style={floatAnimation}>
            <Button
              href="#projects"
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
              Check out my work!
            </Button>
          </animated.div>
        </AnimatedText>

        {/* Background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            opacity: 0.1,
            background: 'radial-gradient(circle at 50% 50%, #64ffda 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Container>
  );
};

export default Home;