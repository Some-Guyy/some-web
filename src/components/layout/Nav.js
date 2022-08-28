import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { AcmeLogo } from './AcmeLogo';
import { GitHubIconLight } from '../icons/GitHubIconLight';
import { GitHubIconDark } from '../icons/GitHubIconDark';
import { SunIcon } from '../icons/SunIcon';
import { MoonIcon } from '../icons/MoonIcon';
import useDarkMode from 'use-dark-mode';

const Nav = ({ brandColorId, brandColors }) => {
    const darkMode = useDarkMode(true);
    const pages = ["Home", "Themes", "About"];

    return (
        <Navbar maxWidth={'fluid'} variant={'sticky'}>
            <Navbar.Brand>
                <Navbar.Toggle showIn='xs' />
                <AcmeLogo />
                <Text b size='$2xl' color={brandColors[brandColorId].color}>
                    Some Website
                </Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight activeColor={brandColors[brandColorId].colorStrict} hideIn='xs' variant={'underline-rounded'}>
                {
                    pages.map(page => (
                        <Navbar.Link href='#'>{page}</Navbar.Link>
                    ))
                }
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link href='https://github.com/Some-Guyy/some-web' target='_blank'>
                    <Button auto rounded ghost shadow color={brandColors[brandColorId].colorStrict} icon={darkMode.value ? <GitHubIconDark /> : <GitHubIconLight />} />
                </Navbar.Link>
                <Navbar.Item>
                    <Button auto rounded ghost shadow color={brandColors[brandColorId].colorStrict} icon={darkMode.value ? <MoonIcon /> : <SunIcon />} onPress={() => darkMode.toggle()} />
                </Navbar.Item>
            </Navbar.Content>
            <Navbar.Collapse>
                {pages.map(page => (
                    <Navbar.CollapseItem key={page}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="#"
                        >
                            {page}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav;
