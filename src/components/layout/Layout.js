import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Body from './Body';

const Layout = ({ darkMode }) => {
  // Brand color will be selected via index. It gets stored in localStorage.
  const [brandColorIndex, setBrandColorIndex] = React.useState(localStorage.getItem('brandColorIndex') || 2);

  // Brand colors for both light and dark theme.
  const allBrandColors = [
    {
      name: "Blue",
      light: "#0043BB",
      dark: "primary"
    },
    {
      name: "Purple",
      light: "#58139F",
      dark: "secondary"
    },
    {
      name: "Green",
      light: "#007A1C",
      dark: "success"
    },
    {
      name: "Yellow",
      light: "#C77E00 ",
      dark: "warning"
    },
    {
      name: "Pink",
      light: "#B00031",
      dark: "error"
    },
  ];

  // This will be the colors used based on theme.
  // Certain components with limited set of colors to choose from will use colorStrict key instead.
  const brandColors = allBrandColors.map(color => ({ name: color.name, color: darkMode.value ? color.dark : color.light, colorStrict: color.dark }));
  const brandColor = brandColors[brandColorIndex].color
  const brandColorStrict = brandColors[brandColorIndex].colorStrict

  return (
    <Router>
      <Nav darkMode={darkMode} brandColor={brandColor} brandColorStrict={brandColorStrict} />
      <Body darkMode={darkMode} brandColor={brandColor} brandColorStrict={brandColorStrict} setBrandColorIndex={setBrandColorIndex} brandColors={brandColors} />
    </Router>
  );
}

export default Layout;
