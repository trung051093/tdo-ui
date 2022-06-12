import { Box, Button } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

enum LanguageKey {
  vn = 'vn',
  en = 'en',
}

export const LanguageToggle = () => {
  const { lang } = useTranslation();

  const onChangeLanguage = () => {
    switch (lang) {
      case LanguageKey.en:
        setLanguage(LanguageKey.vn);
        break;
      case LanguageKey.vn:
        setLanguage(LanguageKey.en);
        break;
      default:
        setLanguage(LanguageKey.vn);
        break;
    }
  };
  return (
    <Box pos="fixed" top="10px" right="60px" zIndex={2}>
      <Button
        onClick={onChangeLanguage}
        variant="outline"
        colorScheme="pink"
        aria-label="Change Language"
      >
        {lang === LanguageKey.en ? 'VN' : 'EN'}
      </Button>
    </Box>
  );
};
