import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import { Loading } from './components/Loading';
import LoadingProvider from './context/LoadingProvider';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <Loading />
        <GlobalStyle />
        <Home />
      </LoadingProvider>
    </ThemeProvider>
  );
}
