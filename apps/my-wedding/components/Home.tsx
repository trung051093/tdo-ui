import { Center, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import bgImg from '@my-wedding/assets/images/bg.png';
import { Image } from './Image';
import { MENU } from '@my-wedding/constants';
import React from 'react';
import { ScrollWrapper } from './ScrollWrapper';
import useTranslation from 'next-translate/useTranslation';

export const Home = () => {
  const { t } = useTranslation('common');
  return (
    <Flex h="100vh" direction="row" position="relative">
      <Image
        container={{ w: '100vw', h: '100vh' }}
        src={bgImg}
        alt="background-image"
      />
      <ScrollWrapper nextId={MENU.WeddingCard}>
        <Center width="100%" pos="absolute" top="40%">
          <VStack spacing="4">
            <Heading size="4xl" fontWeight="400">
              {t('Welcome')}
            </Heading>
            <Text size="2xl"> {t('To our wedding')}</Text>
            <Heading size="3xl" fontWeight="400">
              {t('Trung & Trâm')}
            </Heading>
            <Text> {t('July 10, 2022')}</Text>
            <Heading
              fontSize="2xl"
              textAlign="center"
              fontWeight="normal"
              fontStyle="italic"
            >
              {t('In dreams and in love there are no impossibilities')}
            </Heading>
          </VStack>
        </Center>
      </ScrollWrapper>
    </Flex>
  );
};
