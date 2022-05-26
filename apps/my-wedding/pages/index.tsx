import { Container, Box } from '@chakra-ui/react';
import { MENU } from '@my-wedding/constants';
import {
  Home,
  WeddingCard,
  Photo,
  Music,
  FloatingHeart,
} from '@my-wedding/components';
import { Section } from 'react-scroll-section';
import Head from 'next/head';

export function Index() {
  return (
    <Container pos="relative" maxW="100%" maxH="100%" p="0" overflow="hidden">
      <Head>
        <title>Trung & Trâm!</title>
        <meta property="og:title" content="Trung & Trâm Wedding" />
        <meta
          property="og:description"
          content="In dreams and in love there are no impossibilities."
        />
        <meta
          property="og:image"
          content="/wedding/26-min.jpg"
        />
        <meta property="twitter:title" content="Trung & Trâm Wedding" />
        <meta
          property="twitter:description"
          content="In dreams and in love there are no impossibilities."
        />
        <meta
          property="twitter:image"
          content="/wedding/26-min.jpg"
        />
      </Head>
      <Music />
      <FloatingHeart />
      <Box pos="relative">
        <Section id={MENU.Home}>
          <Home />
        </Section>
        <Section id={MENU.WeddingCard}>
          <WeddingCard />
        </Section>
        <Section id={MENU.Photo}>
          <Photo />
        </Section>
      </Box>
    </Container>
  );
}

export default Index;
