import { useState } from 'react';
import { Container } from '@nextui-org/react';
import { v4 as uuidv4 } from 'uuid';

const Palette = ({ initialBrushColor, initialBrushSize, newBrushColor, newBrushSize }) => {
    // Brush properties.
    const [brushColor, setBrushColor] = useState(initialBrushColor);
    const [brushSize, setBrushSize] = useState(initialBrushSize);

    // Palette for canvas.
    const paletteSizes = [40, 30, 20, 10];
    const paletteColors = ['white', 'silver', 'gray', 'black', 'navy', 'blue', 'aqua', 'teal', 'lime', 'green', 'olive', 'yellow', 'orange', 'red', 'maroon', 'purple', 'fuchsia'];

    return (
        <Container lg display='flex' wrap='nowrap' css={{ padding: '20px', borderRadius: '10px', backgroundColor: '#EFE4D6' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {<div id="paletteCurrent" style={{ backgroundColor: brushColor }} />}
            </div>
            <Container display='flex' justify='space-evenly' alignItems='center'>
                {paletteColors.map(color => <div key={uuidv4()} className="paletteColor" onClick={() => {setBrushColor(color); newBrushColor(color);}} style={{ backgroundColor: color }} />)}
            </Container>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {paletteSizes.map(size => <div key={uuidv4()} className="paletteSize" onClick={() => {setBrushSize(size); newBrushSize(size);}} style={{ width: `${size}px`, height: `${size}px`, backgroundColor: size === brushSize ? '#fff' : '#222', border: size === brushSize ? '1.5px solid #222' : '0px' }} />)}
            </div>
        </Container>
    )
}

export default Palette;
