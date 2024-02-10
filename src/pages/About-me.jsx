import Box from '@mui/system/Box';
import { Typography } from '@mui/material';
import me from '../img/me.jpeg';
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
          <Typography
            variant='h1'
            sx={{
              textAlign: 'left',
              fontSize: '6em',
              fontWeight: 'bold',
              color: '#E38B29',
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
              color: '#E38B29',
            }}
          >
            YAROSLAV
          </Typography>
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
        </Box>

        <Keayboard />
      </Box>

      {/* <Box>
        <Typography
          variant='h4'
          sx={{
            textAlign: 'center',
            fontSize: '1vw',
            color: '#E38B29',
          }}
        >
          Boring to read this text?
        </Typography>
        <Typography
          variant='h4'
          sx={{
            textAlign: 'center',
            fontSize: '1vw',
          }}
        >
          You may check my <Link to='/projects'>projects</Link> or{' '}
          <Link to='/contacts'>contact</Link> with me
        </Typography>
      </Box> */}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant='h4'
            sx={{ textAlign: 'left', fontWeight: 'bold' }}
          >
            ABOUT ME
          </Typography>
          <Typography sx={{ textAlign: 'left', fontSize: '1.2em' }}>
            I was born in Russia, then moved to Israel, and now reside in Italy.
            Before transitioning, I worked in a traditional business field.
            However, I've always been{' '}
            <span style={{ fontWeight: 'bold', color: '#E38B29' }}>
              drawn to high technology
            </span>{' '}
            and eventually decided to pursue a career as a developer. I{' '}
            <span style={{ fontWeight: 'bold', color: '#E38B29' }}>
              dedicated significant time to studying and consistently excelled
              in tasks at work.
            </span>{' '}
            I have been specializing in frontend development for several years.
            I{' '}
            <span style={{ fontWeight: 'bold', color: '#E38B29' }}>
              derive satisfaction from being involved in progress,
              problem-solving, and meeting challenges in my work.
            </span>{' '}
            I am inspired by the fact that development is a field in which one
            can continuously learn and discover new things endlessly.
          </Typography>
        </Box>

        <Box
          sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}
        >
          <Typography
            variant='h4'
            sx={{ textAlign: 'left', fontWeight: 'bold' }}
          >
            MY KNOWLEDGES
          </Typography>
          <Typography sx={{ textAlign: 'left', fontSize: '1.2em' }}>
            I specialize in{' '}
            <span style={{ fontWeight: 'bold', color: '#E38B29' }}>
              JavaScript
            </span>{' '}
            language and{' '}
            <span style={{ fontWeight: 'bold', color: '#E38B29' }}>React</span>{' '}
            library. As a state manager, I have always used{' '}
            <span style={{ fontWeight: 'bold', color: '#E38B29' }}>Redux</span>.
            I have basic knowledge of{' '}
            <span style={{ fontWeight: 'bold', color: '#E38B29' }}>
              TypeScript
            </span>{' '}
            and am currently actively deepening my understanding of it. Despite
            focusing on frontend development, I have basic knowledge of{' '}
            <span style={{ fontWeight: 'bold', color: '#E38B29' }}>
              Node.js
            </span>{' '}
            and can certainly write backend code for my projects. Additionally,
            as a side activity, I maintain websites on{' '}
            <span style={{ fontWeight: 'bold', color: '#E38B29' }}>
              WordPress
            </span>{' '}
            , which allows me to view web development from a different
            perspective.
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}
        >
          <Typography
            variant='h4'
            sx={{ textAlign: 'left', fontWeight: 'bold' }}
          >
            MY WAY
          </Typography>
          <Typography sx={{ textAlign: 'left', fontSize: '1.2em' }}>
            To{' '}
            <span style={{ fontWeight: 'bold', color: '#E38B29' }}>
              develop apps and myself
            </span>{' '}
            . To be{' '}
            <span style={{ fontWeight: 'bold', color: '#E38B29' }}>
              reliable
            </span>{' '}
            ,{' '}
            <span style={{ fontWeight: 'bold', color: '#E38B29' }}>
              responsible team player
            </span>{' '}
            . Deliver results on time. Pay attention to details, and listen to
            suggestions. And of course learn new things.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
