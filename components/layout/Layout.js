import { useTheme } from '@nextui-org/react'
import Meta from '../Meta'
import Nav from './Nav'

const Layout = ({ children, lightBackColor, darkBackColor, anyBrandColor }) => {
  // Changing background based on theme.
  const { isDark } = useTheme();
  const backColor = isDark ? darkBackColor : lightBackColor;
  const brandColor = anyBrandColor;

  return (
    <div style={{ background: backColor }}>
      <Meta />
      <Nav brandColor={brandColor} />
      {children}
    </div>
  )
}

export default Layout
