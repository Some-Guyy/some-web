import { createTheme, NextUIProvider } from '@nextui-org/react';
import Layout from './components/layout/Layout';
import useDarkMode from 'use-dark-mode';
import './App.css';

const App = () => {
  const lightTheme = createTheme({
    type: 'light'
  })

  const darkTheme = createTheme({
    type: 'dark'
  })

  const darkMode = useDarkMode(false); // Apply light or dark theme depending on useDarkMode value

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Layout />
    </NextUIProvider>
  );
}

export default App;
