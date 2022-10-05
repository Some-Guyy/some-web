import { Container, Text, Row } from '@nextui-org/react';
import Graffiti from './ultilities/Graffiti';

const Home = ({ brandColor }) => {
    return (
        <Container fluid>
            <Row justify='center'>
                <Text size='$5xl' color={brandColor}>Welcome to Some Website!</Text>
            </Row>
            <Row justify='center'>
                {window.innerWidth >= 960 ? <Graffiti />
                : <Text size='$2xl'>Use a desktop/tablet to view the graffiti wall. Otherwise there's nothing else here ¯\_(ツ)_/¯</Text>}
            </Row>
        </Container>
    );
}

export default Home;
