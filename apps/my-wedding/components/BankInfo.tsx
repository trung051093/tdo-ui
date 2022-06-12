import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  useClipboard,
  useDisclosure,
  IconButton,
  Text,
  Box,
  InputGroup,
  InputRightElement,
  Divider,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { FiCopy, FiCheckSquare } from 'react-icons/fi';

function BankInputInfo({
  label,
  value,
  breakRow = false,
  canCopy = false,
}: {
  label: string;
  value: string;
  breakRow?: boolean;
  canCopy?: boolean;
}) {
  const { onCopy } = useClipboard(value);
  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Flex mb={2} direction={breakRow ? 'column' : 'row'}>
      <Text fontWeight="bold" marginRight={2}>
        {label}:
      </Text>
      {canCopy ? (
        <>
          <InputGroup>
            <Input value={value} isReadOnly />
            <InputRightElement>
              <IconButton
                variant="ghost"
                onClick={handleCopy}
                aria-label="Copy"
                icon={copied ? <FiCheckSquare /> : <FiCopy />}
              />
            </InputRightElement>
          </InputGroup>
        </>
      ) : (
        <Text>{value}</Text>
      )}
    </Flex>
  );
}

export const BankInfoDrawer = () => {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <Box pos="fixed" top="10px" right="125px" zIndex={2}>
        <Button
          variant="outline"
          colorScheme="pink"
          ref={btnRef}
          onClick={onOpen}
        >
          {t('Bank')}
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{t('Banking Info')}</DrawerHeader>

          <DrawerBody>
            <Text fontStyle="italic">
              {t("This is for case when you don't like using cash")}
            </Text>
            <Divider my="2" />
            <BankInputInfo label={t('Bank')} value={'Vietcombank'} breakRow />
            <BankInputInfo
              label={t('Bank Name')}
              value={'Luu Hoang Bao Tram'}
              breakRow
            />
            <BankInputInfo
              label={t('Bank Number')}
              value={'0331000474054'}
              breakRow
              canCopy
            />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              {t('Cancel')}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
