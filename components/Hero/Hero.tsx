import React from 'react';
import { createStyles, Overlay, Container, Title, Button, TextInput, Box } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'absolute',
    backgroundImage:
      'url(/above.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    top: '56px',
    bottom: 0,
    left: 0,
    right: 0,
  },

  container: {
    height: 'calc(100vh - 56px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 2,
    zIndex: 0,
    position: 'relative',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    lineHeight: 1.1,
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    margin: '0 0 18px',
    padding: '0 0.4em 0'
  },

  description: {
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },
}));

export function HeroContentLeft({ setDrawerOpened, showMapImage, setCardsOpened, cardsOpened }) {
  const { classes } = useStyles();

  return (
    <Box 
        sx={{
        position: 'absolute',
        backgroundImage:
        `url(/${showMapImage ? 'lysebotn-polygon.png' : 'above.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        top: '56px',
        bottom: 0,
        left: 0,
        right: 0,
    }}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.125) 0%, rgba(0, 0, 0, .55) 80%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        {!showMapImage && <Title className={classes.title}>Your smart #vanlife companion</Title>}
        <Box sx={() => ({ display: 'flex', flexDirection: 'row', paddingBottom: '12px', width: '100%', justifyContent: 'flex-start'})}>
            {!showMapImage && <TextInput
                placeholder="Where to next?"
                radius="xl"
                size="md"
                required 
                sx={{color: '#ffffff', fontWeight: 500}}
                />}
            {!showMapImage && <Button variant="gradient" size="md" radius="xl" style={{ background: '#01A333', margin: '0 0 0 1em'}} onClick={() => {!showMapImage ? setDrawerOpened() : setCardsOpened()}}>
                {!showMapImage ? 'Discover' : 'Show me 5 sites'}
            </Button>}
        </Box>
      </Container>
    </Box>
  );
}