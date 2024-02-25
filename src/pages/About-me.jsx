import { motion } from 'framer-motion';
import { Typography, Box } from '@mui/material';
import Keayboard from '../components/Keyboard/Keyboard';

export default function AboutMe() {
  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: '20px 60px',
        gap: '50px',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 144px)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant='h5'
            sx={{
              textAlign: 'left',
              margin: 0,
              fontSize: '3em',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            Hello, I am
          </Typography>
          <motion.div
            initial={{ x: -1600 }}
            animate={{ x: 0, transition: { duration: 1.5 } }}
          >
            <Typography
              variant='h1'
              sx={{
                textAlign: 'left',
                fontSize: '6em',
                fontWeight: 'bold',
                color: '#FD5F00',
              }}
            >
              NOVIK
            </Typography>
            <Typography
              variant='h1'
              sx={{
                textAlign: 'left',
                fontSize: '6em',
                fontWeight: 'bold',
                color: '#FD5F00',
              }}
            >
              YAROSLAV
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 2 },
            }}
          >
            <Typography
              variant='h4'
              sx={{
                textAlign: 'left',
                fontSize: '3em',
                fontWeight: 'bold',
              }}
            >
              FRONTEND DEVELOPER
            </Typography>
          </motion.div>
        </Box>

        <Keayboard />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <motion.div
          initial={{ x: -3000 }}
          animate={{
            x: 0,
            transition: { delay: 2.5, duration: 2 },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant='h4'
              sx={{ textAlign: 'left', fontWeight: 'bold' }}
            >
              ABOUT ME
            </Typography>
            <Typography
              sx={{ textAlign: 'left', fontSize: '1.2em', paddingLeft: '10px' }}
            >
              I was born in Russia, then moved to Israel, and now reside in
              Italy. Before transitioning, I worked in a traditional business
              field. However, I've always been{' '}
              <span style={{ fontWeight: 'bold', color: '#FD5F00' }}>
                drawn to high technology
              </span>{' '}
              and eventually decided to pursue a career as a developer. I{' '}
              <span style={{ fontWeight: 'bold', color: '#FD5F00' }}>
                dedicated significant time to studying and consistently excelled
                in tasks at work.
              </span>{' '}
              I have been specializing in frontend development for several
              years. I{' '}
              <span style={{ fontWeight: 'bold', color: '#FD5F00' }}>
                derive satisfaction from being involved in progress,
                problem-solving, and meeting challenges in my work.
              </span>{' '}
              I am inspired by the fact that development is a field in which one
              can continuously learn and discover new things endlessly.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ x: 3000 }}
          animate={{
            x: 0,
            transition: { delay: 2.5, duration: 2 },
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}
          >
            <Typography
              variant='h4'
              sx={{ textAlign: 'left', fontWeight: 'bold' }}
            >
              MY KNOWLEDGES
            </Typography>
            <Typography
              sx={{ textAlign: 'left', fontSize: '1.2em', paddingLeft: '10px' }}
            >
              I specialize in{' '}
              <span style={{ fontWeight: 'bold', color: '#FD5F00' }}>
                JavaScript
              </span>{' '}
              language and{' '}
              <span style={{ fontWeight: 'bold', color: '#FD5F00' }}>
                React
              </span>{' '}
              library. As a state manager, I have always used{' '}
              <span style={{ fontWeight: 'bold', color: '#FD5F00' }}>
                Redux
              </span>
              . I have basic knowledge of{' '}
              <span style={{ fontWeight: 'bold', color: '#FD5F00' }}>
                TypeScript
              </span>{' '}
              and am currently actively deepening my understanding of it.
              Despite focusing on frontend development, I have basic knowledge
              of{' '}
              <span style={{ fontWeight: 'bold', color: '#FD5F00' }}>
                Node.js
              </span>{' '}
              and can certainly write backend code for my projects.
              Additionally, as a side activity, I maintain websites on{' '}
              <span style={{ fontWeight: 'bold', color: '#FD5F00' }}>
                WordPress
              </span>{' '}
              , which allows me to view web development from a different
              perspective.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ y: 1000 }}
          animate={{
            y: 0,
            transition: { delay: 2.5, duration: 2 },
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}
          >
            <Typography
              variant='h4'
              sx={{ textAlign: 'left', fontWeight: 'bold' }}
            >
              MY WAY
            </Typography>
            <Typography
              sx={{ textAlign: 'left', fontSize: '1.2em', paddingLeft: '10px' }}
            >
              To{' '}
              <span style={{ fontWeight: 'bold', color: '#FD5F00' }}>
                develop apps and myself
              </span>{' '}
              . To be{' '}
              <span style={{ fontWeight: 'bold', color: '#FD5F00' }}>
                reliable
              </span>{' '}
              ,{' '}
              <span style={{ fontWeight: 'bold', color: '#FD5F00' }}>
                responsible team player
              </span>{' '}
              . Deliver results on time. Pay attention to details, and listen to
              suggestions. And of course learn new things.
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
