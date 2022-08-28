import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { AcmeLogo } from './AcmeLogo';
import { SunIcon } from '../icons/SunIcon';
import { MoonIcon } from '../icons/MoonIcon';
import useDarkMode from 'use-dark-mode';

const Nav = ({ brandColorId, brandColors }) => {
    const darkMode = useDarkMode(false);

    return (
        <Navbar maxWidth={'fluid'} variant={'sticky'}>
            <Navbar.Brand>
                <AcmeLogo />
                <Text b size='$3xl' color={brandColors[brandColorId].color} hideIn='xs'>
                    Some Website
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn='xs' variant={'underline-rounded'} activeColor={brandColors[brandColorId].colorStrict}>
                <Navbar.Link href='#'>Features</Navbar.Link>
                <Navbar.Link isActive href='#'>Customers</Navbar.Link>
                <Navbar.Link href='#'>Pricing</Navbar.Link>
                <Navbar.Link href='#'>Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button auto rounded ghost color={brandColors[brandColorId].colorStrict} icon={darkMode.value ? <MoonIcon /> : <SunIcon />} onPress={() => darkMode.toggle()} />
                </Navbar.Item>
                <Navbar.Link color='inherit' href='#'>
                    Login
                </Navbar.Link>
                <Navbar.Item>
                    <Button auto flat as={Link} href='#' color={brandColors[brandColorId].colorStrict}>
                        Sign Up
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    );
}

export default Nav;
