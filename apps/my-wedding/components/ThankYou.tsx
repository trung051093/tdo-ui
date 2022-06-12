import { Flex, VStack, Center, Heading, Text } from '@chakra-ui/react';
import bgImg from '@my-wedding/assets/images/bg3.png';
import useTranslation from 'next-translate/useTranslation';
import { Image } from './Image';

export const ThankYou = () => {
  const { t } = useTranslation('common');
  return (
    <Flex pos="relative">
      <Image
        container={{ w: '100vw', h: '100vh' }}
        layout="responsive"
        src={bgImg}
        alt="wedding-image"
      />
      <Center
        w="100%"
        h="100%"
        pos="absolute"
        top="100px"
        px={{ base: '10', md: '16' }}
      >
        <Flex w="100%" h="100%" direction="column" alignItems="center">
          <Heading fontWeight="normal" marginBottom="4">
            {t('Thank you')}
          </Heading>
          <VStack spacing="2">
            <Text textAlign="center"> {t('FOR SHARING OUR SPECIAL DAY')}</Text>
            <Text textAlign="center"> {t('10 . 07 . 2022')}</Text>
            <Text fontWeight="semibold"> {t('TRUNG & TRÂM')}</Text>
          </VStack>
        </Flex>
      </Center>
    </Flex>
  );
};
