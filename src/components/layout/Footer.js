import pckg from '../../../package.json';

const Footer = _ => {
    return (
        <footer>
            <span className='footerDesc'>Ⓢ 2022 - Some Guy. Some Rights Reserved.</span>
            <span className='footerVersion'>v{pckg.version}</span>
        </footer>
    )
}

export default Footer;
