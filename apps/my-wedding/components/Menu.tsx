import { MENU } from '@my-wedding/constants';
import { Button, Center, HStack, Heading } from '@chakra-ui/react';
import { useScrollSection } from 'react-scroll-section';

export const Menu = () => {
  const homeSection = useScrollSection(MENU.Home);
  const weddingCardSection = useScrollSection(MENU.WeddingCard);
  const photoSection = useScrollSection(MENU.Photo);

  return (
    <Center width="100%" pos="fixed" top="20px" zIndex="1">
      <HStack spacing="4">
        <Button variant="ghost" onClick={homeSection.onClick}>
          <Heading>{MENU.Home}</Heading>
        </Button>
        <Button variant="ghost" onClick={weddingCardSection.onClick}>
          <Heading>{MENU.WeddingCard}</Heading>
        </Button>
        <Button variant="ghost" onClick={photoSection.onClick}>
          <Heading>{MENU.Photo}</Heading>
        </Button>
      </HStack>
    </Center>
  );
};
