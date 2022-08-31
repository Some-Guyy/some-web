import React from 'react';
import { Container, Text, Spacer, Button, Row } from '@nextui-org/react';
import { v4 as uuidv4 } from 'uuid';
import { PaintIconDark, PaintIconLight } from './Icons';

const Themes = ({ darkMode, brandColorIndex, setBrandColorIndex, brandColors }) => {
    return (
        <Container fluid>
            <Row justify='center'>
                <Text size='$5xl' color={brandColors[brandColorIndex].color}>Select a theme below!</Text>
            </Row>
            <Spacer y={1} />
            <Row justify='center'>
                {brandColors.map((color, index) => (
                    <React.Fragment key={uuidv4()}>
                        <Button key={uuidv4()} auto rounded ghost shadow color={color.colorStrict} onPress={() => setBrandColorIndex(index)} icon={darkMode.value ? <PaintIconDark /> : <PaintIconLight />}>
                        </Button><Spacer key={uuidv4()} x={1} />
                    </React.Fragment>
                ))}
            </Row>
        </Container>
    );
}

export default Themes;
