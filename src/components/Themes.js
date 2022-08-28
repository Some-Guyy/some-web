import { Container, Text, Spacer, Button, Row } from '@nextui-org/react';

const Themes = ({ brandColorId, setBrandColorId, brandColors }) => {

    return (
        <Container fluid>
            <Row justify='center'>
                <Text h1 color={brandColors[brandColorId].color}>Select a theme below!</Text>
            </Row>
            <Spacer y={1} />
            <Row justify='center'>
                {brandColors.map(color => (
                    <><Button key={color.id} auto rounded ghost shadow color={color.colorStrict} onPress={() => setBrandColorId(color.id)}>{color.name}</Button><Spacer x={1} /></>
                ))}
            </Row>
        </Container>
    );
}

export default Themes;
