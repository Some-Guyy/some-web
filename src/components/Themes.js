import React from 'react';
import { Container, Text, Spacer, Button, Row } from '@nextui-org/react';
import { v4 as uuidv4 } from 'uuid';
import { ColorFillIconDark, ColorFillIconLight } from './Icons';

const Themes = ({ darkMode, brandColor, setBrandColorIndex, brandColors }) => {
    const changeTheme = index => {
        setBrandColorIndex(index);
        localStorage.setItem('brandColorIndex', index);
    }
    return (
        <Container fluid>
            <Row justify='center'>
                <Text size='$4xl' color={brandColor}>Select a theme below!</Text>
            </Row>
            <Spacer y={1} />
            <Row justify='center' wrap='wrap'>
                {brandColors.map((color, index) => (
                    <React.Fragment key={uuidv4()}>
                        <Button key={uuidv4()} auto rounded ghost shadow color={color.colorStrict} onPress={() => changeTheme(index)} icon={darkMode.value ? <ColorFillIconDark /> : <ColorFillIconLight />}>{color.name}
                        </Button><Spacer key={uuidv4()} x={1} />
                    </React.Fragment>
                ))}
            </Row>
        </Container>
    );
}

export default Themes;
