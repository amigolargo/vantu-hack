import { useState } from 'react';
import { Box, Slider, Drawer, Text, Button } from '@mantine/core';
import Carousel from 'nuka-carousel';
import { HeaderMiddle } from '../components/Header/Header';
import { HeroContentLeft } from '../components/Hero/Hero';
import { DemoCard } from '../components/Card/Card';

export default function HomePage() {
  const [opened, setOpened] = useState(true);
  const [showMapImage, setShowMapImage] = useState(false);
  const [cardsOpened, setCardsOpened] = useState(false);

  return (
    <Box>
      <HeaderMiddle />
      {cardsOpened && <Carousel
          wrapAround={true}
          slidesToShow={1.25}
        >
          <DemoCard /> 
          <DemoCard /> 
          <DemoCard /> 
        </Carousel> }
      <HeroContentLeft setDrawerOpened={() => setOpened(true)} showMapImage={showMapImage} setCardsOpened={() => setCardsOpened(true)} />
      <Drawer
        position='bottom'
        opened={opened}
        onClose={() => setOpened(false)}
        title=""
        padding="xl"
        size="xl"
      >
        <Box sx={{ padding: '0 0 32px'}}>
          <Text size="xl" sx={{ fontWeight: 700, margin: '-2em 0 1em 0' }}>Lysebotn</Text>

          <Text size="xl" sx={{margin: '0 0 12px'}}>Explore within:</Text>
          <Slider
            color="green"
            size="lg"
            radius="lg"
            label={null}
            marks={[
              { value: 20, label: '10km'},
              { value: 40, label: '20km' },
              { value: 100, label: '50km' },
            ]}
            value={20}
          />

          
          <Text size="xl" sx={{margin: '48px 0 12px'}}>Are you feeling adventurous?:</Text>
          <Slider
            color="green"
            size="lg"
            radius="lg"
            label={null}
            value={50}
            marks={[
              { value: 7, label: 'Not today!'},
              { value: 50, label: 'So-so' },
              { value: 90, label: 'Let\'s\n do this!'}
            ]}
          />

          <Button size="md" radius="xl" sx={{margin: '3em 0 0', background: '#01A333'}} onClick={() => setShowMapImage(true)}>Let's go</Button>
        </Box>
      </Drawer>
    </Box>
  );
}
