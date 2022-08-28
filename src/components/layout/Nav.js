import { Navbar, Button, Link, Text, Image, Spacer } from '@nextui-org/react';
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
                <Spacer x={0.5} />
                <Image width={40} height={40} src='https://camo.githubusercontent.com/1834094317772d3ed032bbb84b68a97ae84c318caf5be7a22b11c7296d346e94/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3632353637303931373236333139363137342f3637393332333933373933343637313837332f426972622e706e67' showSkeleton alt='logo' />
                <Spacer x={1} />
                <Text b size='$2xl' color={brandColors[brandColorId].color}>
                    Some Website
                </Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight activeColor={brandColors[brandColorId].colorStrict} hideIn='xs' variant={'underline-rounded'}>
                {
                    pages.map((page, index) => (
                        <Navbar.Link key={index} href='#'>{page}</Navbar.Link>
                    ))
                }
                <Spacer x={1} />
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
