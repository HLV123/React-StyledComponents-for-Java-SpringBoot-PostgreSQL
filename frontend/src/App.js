import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import { AuthProvider } from './context/AuthContext';
import AppRouter from './routes/AppRouter';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: '#181818',
          color: '#f5f0eb',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '14px',
          fontSize: '14px',
        },
      }}
    />
  </ThemeProvider>
);

export default App;
