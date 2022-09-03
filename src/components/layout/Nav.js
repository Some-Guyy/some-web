import { Navbar, Button, Link, Text, Image, Spacer } from '@nextui-org/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { GitHubIconDark, GitHubIconLight, MoonIcon, SunIcon } from '../Icons';

const Nav = ({ darkMode, brandColor, brandColorStrict }) => {
    // When browser width reaches this size (on mobile and tablets), we want to hide certain components on the navbar to fit the content in a smaller width.
    const mobileWidth = "xs";
    const tabletWidth = "sm";
    const location = useLocation();

    // List of pages to navigate to.
    const pages = [
        {
            name: "Home",
            route: "/"
        },
        {
            name: "Themes",
            route: "/themes"
        },
        {
            name: "About",
            route: "/about"
        }
    ];

    return (
        <Navbar maxWidth='fluid' variant='sticky'>
            <Navbar.Brand>
                <Navbar.Toggle showIn={tabletWidth} />
                <Spacer x={0.5} />
                <Image width={40} height={40} src='https://cdn.discordapp.com/attachments/625670917263196174/679323937934671873/Birb.png' showSkeleton alt='logo' />
                <Spacer x={1} />
                <Text b size='$3xl' hideIn={mobileWidth} color={brandColor}>
                    Some Website
                </Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight activeColor={brandColorStrict} hideIn={tabletWidth} variant='underline-rounded'>
                {
                    pages.map(page => (
                        <Navbar.Item key={uuidv4()} isActive={true ? location.pathname === page.route : false} as={RouterLink} to={page.route}>
                            {page.name}
                        </Navbar.Item>
                    ))
                }
                <Spacer x={1} />
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link href='https://github.com/Some-Guyy/some-web' target='_blank'>
                    <Button auto rounded ghost shadow color={brandColorStrict} icon={darkMode.value ? <GitHubIconDark /> : <GitHubIconLight />} />
                </Navbar.Link>
                <Navbar.Item>
                    <Button auto rounded ghost shadow color={brandColorStrict} icon={darkMode.value ? <SunIcon /> : <MoonIcon />} onPress={() => darkMode.toggle()} />
                </Navbar.Item>
            </Navbar.Content>
            <Navbar.Collapse>
                {pages.map(page => (
                    <Navbar.CollapseItem key={uuidv4()}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={page.route}
                        >
                            {page.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav;
