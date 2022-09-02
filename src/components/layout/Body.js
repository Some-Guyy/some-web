import { Routes, Route, useLocation } from 'react-router-dom';
import { Container, Text, Row } from '@nextui-org/react';
import Home from '../Home';
import Themes from '../Themes';
import About from '../About';

const Body = ({ darkMode, brandColor, brandColorStrict, setBrandColorIndex, brandColors }) => {
    const location = useLocation();
    return (
        <Routes>
            <Route path='/' element={<Home brandColor={brandColor} />} />
            <Route path='/themes' element={<Themes darkMode={darkMode} brandColor={brandColor} setBrandColorIndex={setBrandColorIndex} brandColors={brandColors} />} />
            <Route path='/about' element={<About darkMode={darkMode} brandColor={brandColor} brandColorStrict={brandColorStrict} />} />
            <Route path='*' element={
                <Container fluid>
                    <Row justify='center'>
                        <Text h1 color={brandColor}>Sorry man, the page "{location.pathname}" doesn't exist.</Text>
                    </Row>
                </Container>
            } />
        </Routes>
    );
}

export default Body;
