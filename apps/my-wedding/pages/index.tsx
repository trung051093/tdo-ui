import { Container, Flex } from '@chakra-ui/react';
import { MENU } from '@my-wedding/constants';
import {
  Home,
  Menu,
  WeddingCard,
  Photo,
  ThankYou,
} from '@my-wedding/components';
import { Section } from 'react-scroll-section';
import Head from 'next/head';

export function Index() {
  return (
    <Container pos="relative" maxW="100%" maxH="100%" p="0">
      <Head>
        <title>Trung & Trâm!</title>
        <meta property="og:title" content="Trung & Trâm Wedding" />
        <meta property="og:description" content="In dreams and in love there are no impossibilities." />
        <meta property="og:image" content="/_next/image?url=%2Fwedding-images%2F26.jpg&w=828&q=75" />
        <meta property="twitter:title" content="Trung & Trâm Wedding" />
        <meta property="twitter:description" content="In dreams and in love there are no impossibilities." />
        <meta property="twitter:image" content="/_next/image?url=%2Fwedding-images%2F26.jpg&w=828&q=75" />
      </Head>
      <Section id={MENU.Home}>
        <Home />
      </Section>
      <Section id={MENU.WeddingCard}>
        <WeddingCard />
      </Section>
      <Section id={MENU.Photo}>
        <Photo />
      </Section>
    </Container>
  );
}

export default Index;
