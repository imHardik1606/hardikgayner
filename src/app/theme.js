'use client';
import { Geist, Bricolage_Grotesque } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
});

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#2563eb',
    },
    background: {
      default: 'var(--background)',
      paper: 'var(--card)',
    },
    text: {
      primary: 'var(--foreground)',
    },
  },
  typography: {
    fontFamily: geist.style.fontFamily,
    h1: { fontFamily: bricolage.style.fontFamily },
    h2: { fontFamily: bricolage.style.fontFamily },
    h3: { fontFamily: bricolage.style.fontFamily },
    h4: { fontFamily: bricolage.style.fontFamily },
    h5: { fontFamily: bricolage.style.fontFamily },
    h6: { fontFamily: bricolage.style.fontFamily },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default getTheme;