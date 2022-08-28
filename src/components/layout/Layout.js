import React from 'react';
import Nav from './Nav';
import Body from './Body';
import useDarkMode from 'use-dark-mode';

const Layout = () => {
    const darkMode = useDarkMode(true);
    const [brandColorId, setBrandColorId] = React.useState(2);

    // Brand colors for both light and dark theme.
    const allBrandColors = [
      {
        id: 0,
        name: "Blue",
        light: "#0043BB",
        dark: "primary"
      },
      {
        id: 1,
        name: "Purple",
        light: "#58139F",
        dark: "secondary"
      },
      {
        id: 2,
        name: "Green",
        light: "#007A1C",
        dark: "success"
      },
      {
        id: 3,
        name: "Yellow",
        light: "#C77E00 ",
        dark: "warning"
      },
      {
        id: 4,
        name: "Pink",
        light: "#B00031",
        dark: "error"
      },
    ];
  
    // This will be the colors used based on theme.
    // Certain components with limited set of colors to choose from will use colorStrict key instead.
    const brandColors = allBrandColors.map(color => ({id: color.id, name: color.name, color: darkMode.value ? color.dark : color.light, colorStrict: color.dark}));
  
    return (
        <>
            <Nav brandColorId={brandColorId} brandColors={brandColors} />
            <Body brandColorId={brandColorId} setBrandColorId={setBrandColorId} brandColors={brandColors} />
        </>
    );
}

export default Layout;
