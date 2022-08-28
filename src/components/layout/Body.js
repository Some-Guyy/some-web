import Placeholder from '../Placeholder';
import Themes from '../Themes';

const Body = ({ brandColorId, setBrandColorId, brandColors }) => {
    return <Themes brandColorId={brandColorId} setBrandColorId={setBrandColorId} brandColors={brandColors} />;
}

export default Body;
