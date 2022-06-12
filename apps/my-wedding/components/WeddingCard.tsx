import {
  Flex,
  VStack,
  Box,
  Center,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import bgImg from '@my-wedding/assets/images/bg2.png';
import { Image } from './Image';
import { FiMapPin } from 'react-icons/fi';
import { ScrollWrapper } from './ScrollWrapper';
import { MENU } from '@my-wedding/constants';
import useTranslation from 'next-translate/useTranslation';

export const WeddingCard = () => {
  const { t } = useTranslation('common');

  const openMaps = () => {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf('iPhone') != -1 ||
      navigator.platform.indexOf('iPad') != -1 ||
      navigator.platform.indexOf('iPod') != -1
    ) {
      window.open(
        'maps://maps.google.com/maps?daddr=10.7991591,106.6598348&amp;ll=15'
      );
    } else {
      /* else use Google */
      window.open(
        'https://maps.google.com/maps?daddr=10.7991591,106.6598348&amp;ll=15'
      );
    }
  };

  return (
    <Flex h="100vh" pos="relative">
      <Image
        container={{ w: '100vw', h: '100vh' }}
        src={bgImg}
        alt="background-image"
      />
      <ScrollWrapper
        prevId={MENU.Home}
        nextId={MENU.Photo}
        nextText={MENU.Photo}
      >
        <Center w="100%" pos="absolute" top="12%" px={{ base: '10', md: '16' }}>
          <Flex w="100%" h="100%" direction="column" alignItems="center">
            <Heading fontSize="4xl" fontWeight="normal" marginBottom="4">
              {t('Reception')}
            </Heading>
            <VStack spacing="2">
              <Text textAlign="center">
                {t(
                  "Please share in our celebration by joining us for dinner reception at five o'clock in the evening on"
                )}
              </Text>
              <Text textAlign="center" fontWeight="semibold">
                {t("Five o'clock in the evening")}
              </Text>
              <Text textAlign="center" fontWeight="semibold">
                {t('Sunday, July 10th, 2022')}
              </Text>
            </VStack>
            <VStack marginTop="6">
              <Text textAlign="center" fontWeight="semibold">
                {t('GALA CENTER')}
              </Text>
              <Text textAlign="center">{t('415 Hoang Van Thu Street')}</Text>
              <Text textAlign="center">
                {t('Tan Binh District, Ho Chi Minh City')}
              </Text>
              <Button variant="link" onClick={openMaps} leftIcon={<FiMapPin />}>
                <Text> {t('View Maps')}</Text>
              </Button>
            </VStack>
            <Box marginTop="12">
              <Heading textAlign="center" fontSize="4xl" fontWeight="normal">
                {t('Thank you')}
              </Heading>
              <VStack>
                <Text textAlign="center">
                  {t('For sharing our special day')}
                </Text>
                <Text textAlign="center"> {t('10 . 07 . 2022')}</Text>
                <Heading fontSize="sm" fontWeight="normal">
                  {t('TRUNG & TRÂM')}
                </Heading>
              </VStack>
            </Box>
          </Flex>
        </Center>
      </ScrollWrapper>
    </Flex>
  );
};
