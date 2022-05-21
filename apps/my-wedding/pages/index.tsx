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

export function Index() {
  return (
    <Container pos="relative" maxW="100%" maxH="100%" p="0">
      <Menu />
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
