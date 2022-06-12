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
import { LanguageToggle } from '@my-wedding/components/LanguageToggle';
import { BankInfoDrawer } from '@my-wedding/components/BankInfo';
import useTranslation from 'next-translate/useTranslation';

export function Index() {
  const { t } = useTranslation('common');

  return (
    <Container pos="relative" maxW="100%" maxH="100%" p="0" overflow="hidden">
      <Head>
        <title>Trung & Trâm!</title>
        <meta property="og:title" content={t('Trung & Trâm Wedding')} />
        <meta
          property="og:description"
          content={t('In dreams and in love there are no impossibilities')}
        />
        <meta property="og:image" content="/wedding/26-min.jpg" />
        <meta property="twitter:title" content={t('Trung & Trâm Wedding')} />
        <meta
          property="twitter:description"
          content={t('In dreams and in love there are no impossibilities')}
        />
        <meta property="twitter:image" content="/wedding/26-min.jpg" />
      </Head>
      <BankInfoDrawer />
      <LanguageToggle />
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
