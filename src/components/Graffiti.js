import { useState } from 'react';
import { Container, Row, Text, Spacer } from '@nextui-org/react';
import { v4 as uuidv4 } from 'uuid';
import { ReactP5Wrapper } from 'react-p5-wrapper';

const Graffiti = () => {
    // Size of canvas for graffiti.
    const canvasSize = 900;

    // Brush properties
    const [brushSize, setBrushSize] = useState(20);
    const [brushColor, setBrushColor] = useState('white');

    // Palette for canvas
    const paletteSizes = [40, 30, 20, 10];
    const paletteColors = ['white', 'silver', 'gray', 'black', 'navy', 'blue', 'aqua', 'teal', 'lime', 'green', 'olive', 'yellow', 'orange', 'red', 'maroon', 'purple', 'fuchsia'];

    // Graffiti canvas.
    const sketch = p5 => {
        // When canvas launches.
        p5.setup = () => {
            p5.createCanvas(canvasSize, canvasSize);
            p5.background('black');
        }

        // When pointer is in canvas.
        p5.draw = () => p5.cursor('crosshair');

        // When drawing.
        p5.mouseDragged = () => {
            if (p5.mouseX >= 0 && p5.mouseX <= canvasSize && p5.mouseY >= 0 && p5.mouseY <= canvasSize) {
                p5.noStroke();
                p5.fill(brushColor);
                p5.circle(p5.mouseX, p5.mouseY, brushSize);
                console.log(`drawX: ${p5.mouseX}, drawY: ${p5.mouseY}, brushSize: ${brushSize}`);
            }
        }
    }

    return (
        <Container fluid>
            <Row justify='center'>
                <Text size='$2xl'>
                    While you're here, feel free to leave your mark below!
                </Text>
            </Row>
            <Row justify='center'>
                <Container lg display='flex' wrap='nowrap' css={{ padding: '20px', borderRadius: '10px', backgroundColor: '#EFE4D6' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {<div id="paletteCurrent" style={{ backgroundColor: brushColor }} />}
                    </div>
                    <Container display='flex' justify='space-evenly' alignItems='center'>
                        {paletteColors.map(color => <div key={uuidv4()} className="paletteColor" onClick={() => setBrushColor(color)} style={{ backgroundColor: color }} />)}
                    </Container>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {paletteSizes.map(size => <div key={uuidv4()} className="paletteSize" onClick={() => setBrushSize(size)} style={{ width: `${size}px`, height: `${size}px`, backgroundColor: size === brushSize ? '#fff' : '#222', border: size === brushSize ? '1.5px solid #222' : '0px' }} />)}
                    </div>
                </Container>
            </Row>
            <Spacer y={1} />
            <Row justify='center'>
                <ReactP5Wrapper sketch={sketch} />
            </Row>
        </Container>
    )
}

export default Graffiti;
