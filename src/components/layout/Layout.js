// import { useTheme } from '@nextui-org/react';
import Nav from './Nav';
import Body from './Body';

const Layout = ({ brandColor }) => {
    return (
        <>
            <Nav brandColor={brandColor} />
            <Body brandColor={brandColor} />
        </>
    );
}

export default Layout;
