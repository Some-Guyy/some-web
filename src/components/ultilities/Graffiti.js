import { useState } from 'react';
import { Container, Row } from '@nextui-org/react';
import { v4 as uuidv4 } from 'uuid';
import Sketch from 'react-p5';

const Graffiti = () => {
    const canvasSize = 1000

    // Brush properties
    const [brushSize, setBrushSize] = useState(20);
    const [brushColor, setBrushColor] = useState('white');

    // Palette for canvas
    const paletteSizes = [40, 30, 20, 10];
    const paletteColors = ['white', 'silver', 'gray', '#222', 'navy', 'blue', 'aqua', 'teal', 'lime', 'green', 'olive', 'yellow', 'orange', 'red', 'maroon', 'purple', 'fuchsia'];

    // When canvas launches.
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(canvasSize, canvasSize).parent(canvasParentRef);
        p5.background('rgb(255,255,255)');
    }

    // When pointer is in canvas.
    const draw = p5 => p5.cursor('crosshair');

    // When drawing.
    const mouseDragged = p5 => {
        if (p5.mouseX >= 0 && p5.mouseX <= canvasSize && p5.mouseY >= 0 && p5.mouseY <= canvasSize) {
            p5.noStroke();
            p5.fill(brushColor);
            p5.circle(p5.mouseX, p5.mouseY, brushSize);
            console.log(`drawX: ${p5.mouseX}, drawY: ${p5.mouseY}, brushSize: ${brushSize}`);
        }
    }

    return (
        <Container fluid>
            <Row justify='center'>
                <Container lg display='flex' wrap='nowrap' css={{ padding: '20px', borderRadius: '10px', backgroundColor: '#EFE4D6' }}>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        {<div id="paletteCurrent" style={{ backgroundColor: brushColor }} />}
                    </div>
                    <Container display='flex' justify='space-evenly' alignItems='center'>
                        {paletteColors.map(color => <div key={uuidv4()} className="paletteColor" onClick={() => setBrushColor(color)} style={{ backgroundColor: color }} />)}
                    </Container>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        {paletteSizes.map(size => <div key={uuidv4()} className="paletteSize" onClick={() => setBrushSize(size)} style={{ width: `${size}px`, height: `${size}px`, backgroundColor: size === brushSize ? '#fff' : '#222', border: size === brushSize ? '1.5px solid #222' : '0px' }} />)}
                    </div>
                </Container>
            </Row>
            <Row justify='center'>
                <Sketch setup={setup} draw={draw} mouseDragged={mouseDragged} />
            </Row>
        </Container>
    )
}

export default Graffiti;
