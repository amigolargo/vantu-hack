import { useState } from 'react';
import { Box, Slider, Drawer, Text, Button, Image } from '@mantine/core';
import Carousel from 'nuka-carousel';
import { HeaderMiddle } from '../components/Header/Header';
import { HeroContentLeft } from '../components/Hero/Hero';
import { DemoCard } from '../components/Card/Card';

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const [showMapImage, setShowMapImage] = useState(false);
  const [showGoogleMaps, setShowGoogleMaps] = useState(false);
  const [cardsOpened, setCardsOpened] = useState(false);
  const [risk, setRisk] = useState(50);
  const [radius, setRadius] = useState(20);

  return (
    <Box sx={{ height: '100vw' }}>
      <HeaderMiddle />
      {showGoogleMaps && <Image src="/google.png" width="100vw" height="100vh" sx={{position: 'fixed', zIndex: 300, top: 0, left: 0, bottom: 0, right: 0}} />}
      {showMapImage && <Box sx={{ position: 'fixed', zIndex: 2, bottom: 0, width: '100%' }}>
        <Text size="xl" sx={{ padding: '1em 1.25em 0.5em', fontWeight: 700, color: '#ffffff' }}>Where will you sleep tonight?</Text>
        <Carousel
          wrapAround={true}
          slidesToShow={1.1}
          cellAlign="center"
          cellSpacing={20}
          withoutControls
        >
          <DemoCard index={0} setShowGoogleMaps={setShowGoogleMaps} /> 
          <DemoCard index={1} setShowGoogleMaps={setShowGoogleMaps} /> 
          <DemoCard index={2} setShowGoogleMaps={setShowGoogleMaps} /> 
          <DemoCard index={3} setShowGoogleMaps={setShowGoogleMaps} /> 
          <DemoCard index={4} setShowGoogleMaps={setShowGoogleMaps} /> 
        </Carousel>
      </Box>}
      <HeroContentLeft setDrawerOpened={() => setOpened(true)} showMapImage={showMapImage} setCardsOpened={() => setCardsOpened(true)} cardsOpened={cardsOpened} />
      <Drawer
        position='bottom'
        opened={opened}
        onClose={() => setOpened(false)}
        title=""
        padding="xl"
        size="l"
      >
        <Box sx={{ padding: '0 0 32px'}}>
          <Text size="xl" sx={{ fontWeight: 700, margin: '-2em 0 1em 0' }}>Lysebotn</Text>

          <Text size="xl" sx={{ margin: '0 0 12px' }}>Explore within:</Text>
          <Slider
            color="#01A333"
            size="lg"
            radius="lg"
            label={null}
            marks={[
              { value: 20, label: '10km'},
              { value: 40, label: '20km' },
              { value: 100, label: '50km' },
            ]}
            value={radius}
            onChange={setRadius}
          />

          
          <Text size="xl" sx={{margin: '48px 0 12px'}}>Are you feeling adventurous?:</Text>
          <Slider
            color="#01A333"
            size="lg"
            radius="lg"
            label={null}
            value={risk}
            onChange={setRisk}
            marks={[
              { value: 7, label: 'Not today!'},
              { value: 50, label: 'So-so' },
              { value: 90, label: 'Let\'s\n do this!'}
            ]}
          />

          <Button size="md" radius="xl" sx={{margin: '3em 0 0', background: '#01A333'}} onClick={() => { setShowMapImage(true); setOpened(false); }}>Let's go</Button>
        </Box>
      </Drawer>
    </Box>
  );
}
