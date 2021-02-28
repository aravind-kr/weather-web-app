import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '48em',
  md: '62em',
  lg: '80em'
});

const theme = extendTheme({
  fonts,
  breakpoints,
  colors: {
    background: 'gray.50'
  }
});

export default theme;
