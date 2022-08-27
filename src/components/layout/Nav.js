import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { AcmeLogo } from './AcmeLogo.js';

const Nav = ({ brandColor }) => {
    return (
        <Navbar maxWidth={'fluid'} variant={'sticky'}>
            <Navbar.Brand>
                <AcmeLogo />
                <Text b size='$3xl' color={brandColor} hideIn='xs'>
                    Some Website
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn='xs' variant={'underline-rounded'} activeColor={brandColor}>
                <Navbar.Link href='#'>Features</Navbar.Link>
                <Navbar.Link isActive href='#'>Customers</Navbar.Link>
                <Navbar.Link href='#'>Pricing</Navbar.Link>
                <Navbar.Link href='#'>Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link color='inherit' href='#'>
                    Login
                </Navbar.Link>
                <Navbar.Item>
                    <Button auto flat as={Link} href='#' color={brandColor}>
                        Sign Up
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    );
}

export default Nav;
