import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import { Loading } from './components/Loading';
import LoadingProvider from './context/LoadingProvider';
import { Router } from './router';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <Loading />
        <GlobalStyle />
        <Router />
      </LoadingProvider>
    </ThemeProvider>
  );
}
