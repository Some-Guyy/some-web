import { Container, Row, Text, Spacer } from '@nextui-org/react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import { io } from 'socket.io-client';
import Palette from './Palette';

const Graffiti = () => {
    // Initial properties.
    const socket = io();
    const canvasSize = 900;
    const loadingTextSize = 40;
    const initialBrushColor = 'white';
    const initialBrushSize = 20;

    // Brush properties.
    let brushColor = initialBrushColor;
    let brushSize = initialBrushSize;

    // Functions to change brush properties.
    const newBrushColor = color => brushColor = color;
    const newBrushSize = size => brushSize = size;

    // Graffiti canvas.
    const sketch = p5 => {
        // When canvas launches.
        p5.setup = () => {
            p5.createCanvas(canvasSize, canvasSize);
            p5.background('black');
            p5.textSize(loadingTextSize);
            p5.fill(initialBrushColor);
            p5.text('Graffiti is loading...', canvasSize/3, loadingTextSize);
            // Request graffiti data when launching canvas. Use a timer to allow thematic changes to occur before requesting the data.
            const requestGraffiti = setTimeout(() => socket.emit('requestGraffiti', ''), 1000);
        }

        // When pointer is in canvas.
        p5.draw = () => p5.cursor('crosshair');

        // When drawing.
        p5.mouseDragged = () => {
            if (p5.mouseX >= 0 && p5.mouseX <= canvasSize && p5.mouseY >= 0 && p5.mouseY <= canvasSize) {
                const data = {
                    drawX: p5.mouseX,
                    drawY: p5.mouseY,
                    brushSize,
                    brushColor
                };
                socket.emit('clientDraw', data);

                p5.noStroke();
                p5.fill(brushColor);
                p5.circle(p5.mouseX, p5.mouseY, brushSize);
            }
        }

        // Once graffiti data received, draw it on canvas.
        socket.on('sendGraffiti', data => {
            p5.clear(); // Clear any loading messages before drawing.
            for (let i = 0; i < data.length; i++) {
                p5.noStroke();
                p5.fill(data[i].brushColor);
                p5.circle(data[i].drawX, data[i].drawY, data[i].brushSize);
            }
        });

        // Update graffiti from other clients' drawings in real time.
        socket.on('serverDraw', data => {
            p5.noStroke();
            p5.fill(data.brushColor);
            p5.circle(data.drawX, data.drawY, data.brushSize);
        });
    }

    return (
        <Container fluid>
            <Row justify='center'>
                <Text size='$2xl'>
                    While you're here, feel free to leave your mark below!
                </Text>
            </Row>
            <Row justify='center'>
                <Palette initialBrushColor={initialBrushColor} initialBrushSize={initialBrushSize} newBrushColor={newBrushColor} newBrushSize={newBrushSize} />
            </Row>
            <Spacer y={1} />
            <Row justify='center'>
                <ReactP5Wrapper sketch={sketch} />
            </Row>
        </Container>
    )
}

export default Graffiti;
