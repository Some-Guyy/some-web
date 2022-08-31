import { Container, Row, Text } from '@nextui-org/react';
import pckg from '../../package.json';

const About = ({ brandColorIndex, brandColors }) => {
    return (
        <Container fluid>
            <Row justify='center'>
                <Text size='$4xl' color={brandColors[brandColorIndex].color}>About this website</Text>
            </Row>
            <Row justify='center'>
                <Text>Created this website as I was bored.</Text>
            </Row>
            <Row justify='center'>
                <Text>Ⓢ 2022 Some Guy. Some Rights Reserved. v{pckg.version}</Text>
            </Row>
        </Container>
    );
}

export default About;