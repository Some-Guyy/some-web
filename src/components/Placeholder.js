import { Container, Text, Row } from '@nextui-org/react';

const Placeholder = ({ brandColor }) => {
    return (
        <Container fluid>
            <Row justify='center'>
                <Text size='$5xl' color={brandColor}>Welcome to Some Website!</Text>
            </Row>
            <Row justify='center'>
                <Text size='$2xl'>
                    Welcome to the first launch of the site! Sadly there's literally nothing to see here for now...
                </Text>
            </Row>
            <Row justify='center'>
            </Row>
        </Container>
    );
}

export default Placeholder;
