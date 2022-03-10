import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Dashboard } from './src/screens/Dashboard/Dashboard';
import { Register } from './src/screens/Register/Register';

export default function App() {
  const [fontsLoaded] = useFonts({
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  });

  /**Enquanto as fonts não estão carregadas, o app irá segurar a tela de splash */
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
     <Register />
    </ThemeProvider>
  );
}
