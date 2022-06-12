// 1. Import the extendTheme function
import { extendTheme, theme as base } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  breakpoints: {
    xs: '20em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  colors: {
    brand: {
      100: '#FFFAEF',
    },
  },
  fonts: {
    heading: `'Dancing Script', ${base.fonts?.heading}`,
    body: `'Montserrat', ${base.fonts?.body}`,
  },
  components: {
    Button: {
      variants: {
        ghost: {
          field: {
            _focus: {
              borderColor: 'transparent',
            },
            _active: {
              bachground: 'transparent',
            },
          },
        },
      },
    },
  },
});
