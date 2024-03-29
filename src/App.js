import { createTheme, NextUIProvider } from '@nextui-org/react';
import Layout from './components/layout/Layout';
import useDarkMode from '@fisch0920/use-dark-mode';
import './App.css';

const App = () => {
  const lightTheme = createTheme({
    type: 'light'
  })

  const darkTheme = createTheme({
    type: 'dark'
  })

  // Apply light or dark theme depending on useDarkMode value. It gets stored in localStorage.
  const darkMode = useDarkMode(true);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Layout darkMode={darkMode} />
    </NextUIProvider>
  );
}

export default App;
