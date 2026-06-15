'use client';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useTheme } from '@/context/ThemeContext';
import getTheme from './theme';
import { useMemo } from 'react';

export function StyledRoot({ children }) {
  const { theme } = useTheme();
  
  const muiTheme = useMemo(() => getTheme(theme), [theme]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      {children}
    </MuiThemeProvider>
  );
}