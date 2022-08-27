import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  const lightTheme = createTheme({
    type: 'light'
  })

  const darkTheme = createTheme({
    type: 'dark'
  })

  // Theme colors
  const lightBackColor = '#fff';
  const darkBackColor = 'linear-gradient(135deg, #000000 0%, #000000 33%, #063119 66%, #000000 100%)';
  const anyBrandColor = 'success';

  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Layout lightBackColor={lightBackColor} darkBackColor={darkBackColor} anyBrandColor={anyBrandColor}>
          <Component {...pageProps} anyBrandColor={anyBrandColor} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp
