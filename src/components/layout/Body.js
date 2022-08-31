import { Routes, Route, useLocation } from 'react-router-dom';
import { Container, Text, Row } from '@nextui-org/react';
import Placeholder from '../Placeholder';
import Themes from '../Themes';

const Body = ({ darkMode, brandColorIndex, setBrandColorIndex, brandColors }) => {
    const location = useLocation();
    return (
        <Routes>
            <Route path='/' element={<Placeholder brandColorIndex={brandColorIndex} setBrandColorIndex={setBrandColorIndex} brandColors={brandColors} />} />
            <Route path='/themes' element={<Themes darkMode={darkMode} brandColorIndex={brandColorIndex} setBrandColorIndex={setBrandColorIndex} brandColors={brandColors} />} />
            <Route path='*' element={
                <Container fluid>
                    <Row justify='center'>
                        <Text h1 color={brandColors[brandColorIndex].color}>Sorry man, the page "{location.pathname}" doesn't exist.</Text>
                    </Row>
                </Container>
            } />
        </Routes>
    );
}

export default Body;
