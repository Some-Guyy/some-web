import { Container, Row, Text, Spacer, Link } from '@nextui-org/react';
import pckg from '../../package.json';

const About = ({ brandColor }) => {
    return (
        <Container fluid>
            <Row justify='center'>
                <Text size='$4xl' color={brandColor}>About this website</Text>
            </Row>
            <Row justify='center'>
                <Text>Created this website as I was bored.</Text>
            </Row>
            <Row justify='center'>
                <Text>Copyright Ⓢ 2022 Some Guy. Some Rights Reserved. v{pckg.version}</Text>
            </Row>
            <Spacer y={1} />
            <Row justify='center'>
                <Text size='$4xl' color={brandColor}>Acknowledgments</Text>
            </Row>
            <Row justify='center'>
                <Link color={brandColor}>Icons by Boxicons</Link>
            </Row>
        </Container>
    );
}

export default About;