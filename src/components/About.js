import { Container, Row, Text, Spacer, Link, Collapse } from '@nextui-org/react';
import { HeartIconDark, HeartIconLight, CertificationIconDark, CertificationIconLight } from './Icons';
import Licenses from './Licenses';
import pckg from '../../package.json';

const About = ({ darkMode, brandColor, brandColorStrict }) => {
    return (
        <Container fluid>
            <Row justify='center'>
                <Text size='$5xl' color={brandColor}>About this website</Text>
            </Row>
            <Row justify='center'>
                <Text size='$2xl'>Version {pckg.version}</Text>
            </Row>
            <Row justify='center'>
                <Text>Copyright Ⓢ 2022 Some Guy. Some Rights Reserved.</Text>
            </Row>
            <Spacer y={1} />
            <Container sm>
                <Collapse.Group shadow accordion={false}>
                    <Collapse title='Acknowledgments' subtitle='This website was made with the help of these open source libraries' contentLeft={darkMode.value ? <HeartIconDark /> : <HeartIconLight />}>
                        <Link color={brandColorStrict} href='https://reactjs.org/' target='_blank'>
                            React
                        </Link>
                        <Link color={brandColorStrict} href='https://nextui.org/' target='_blank'>
                            NextUI
                        </Link>
                        <Link color={brandColorStrict} href='https://github.com/donavon/use-dark-mode' target='_blank'>
                            use-dark-mode
                        </Link>
                        <Link color={brandColorStrict} href='https://github.com/uuidjs/uuid' target='_blank'>
                            uuid
                        </Link>
                        <Link color={brandColorStrict} href='https://boxicons.com/' target='_blank'>
                            Boxicons
                        </Link>
                        <Link color={brandColorStrict} href='https://expressjs.com/' target='_blank'>
                            Express
                        </Link>
                    </Collapse>
                    <Collapse title='Licenses' subtitle='These are the licenses for the open source libraries used' contentLeft={darkMode.value ? <CertificationIconDark /> : <CertificationIconLight />}>
                        <Licenses brandColorStrict={brandColorStrict} />
                    </Collapse>
                </Collapse.Group>
            </Container>
        </Container>
    );
}

export default About;
