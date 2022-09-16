import { Container, Row, Text, Spacer, Link, Collapse } from '@nextui-org/react';
import { v4 as uuidv4 } from 'uuid';
import { HeartIconDark, HeartIconLight, CertificationIconDark, CertificationIconLight } from './Icons';
import Licenses from './Licenses';
import pckg from '../../package.json';

const About = ({ darkMode, brandColor, brandColorStrict }) => {
    // Place main installed packages and other acknowledgements into this array manually.
    const acknowledgeArray = [
        ["React", "https://reactjs.org/"],
        ["NextUI", "https://nextui.org/"],
        ["@fisch0920/use-dark-mode", "https://github.com/transitive-bullshit/use-dark-mode"],
        ["uuid", "https://github.com/uuidjs/uuid"],
        ["Boxicons", "https://boxicons.com/"],
        ["Express", "https://expressjs.com/"]
    ]

    return (
        <Container fluid>
            <Row justify='center'>
                <Text size='$4xl' color={brandColor}>About this website</Text>
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
                        {
                            acknowledgeArray.map(acknowledgement => (
                                <Link key={uuidv4()} color={brandColorStrict} href={acknowledgement[1]} target='_blank'>
                                    {acknowledgement[0]}
                                </Link>
                            ))
                        }
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
