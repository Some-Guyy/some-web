import React, { useState } from 'react';
import io from 'socket.io-client';
import P5Wrapper from 'react-p5-wrapper';
import '../../App.css';

const socket = io.connect();

export default function Canvas() {
    // Brush properties
    const [brushSize, setBrushSize] = useState(20);
    const [brushColor, setBrushColor] = useState('white');

    // Palette for canvas
    const paletteSizes = [40, 30, 20, 10]
    const paletteColors = ['white', 'silver', 'gray', '#222', 'navy', 'blue', 'aqua', 'teal', 'lime', 'green', 'olive', 'yellow', 'orange', 'red', 'maroon', 'purple', 'fuchsia'];

    // Change brush properties
    const pickSize = size => setBrushSize(size);
    const pickColor = color => setBrushColor(color);

    // Canvas
    const sketch = p => {
        // When canvas launches.
        p.setup = _ => {
            socket.emit('requestCanvasState', '');
            p.createCanvas(1320, 700);
        }

        // When pointer is in canvas.
        p.draw = _ => p.cursor('crosshair');

        // When drawing.
        p.mouseDragged = _ => {
            // Send drawing data to the server.
            const data = {
                drawX: p.mouseX,
                drawY: p.mouseY,
                brushSize,
                brushColor
            };
            socket.emit('clientDraw', data);

            p.noStroke();
            p.fill(brushColor);
            p.circle(p.mouseX, p.mouseY, brushSize);
        }

        socket.on('canvasState', data => {
            for (let i = 0; i < data.length; i++) {
                p.noStroke();
                p.fill(data[i].brushColor);
                p.circle(data[i].drawX, data[i].drawY, data[i].brushSize);
            }
        });

        socket.on('serverDraw', data => {
            p.noStroke();
            p.fill(data.brushColor);
            p.circle(data.drawX, data.drawY, data.brushSize);
        });
    }

    return (
        <React.Fragment>
            <div id="palette">
                {<div id="paletteCurrent" style={{ backgroundColor: brushColor }} />}
                {paletteColors.map(color => <div className="paletteColor" onClick={_ => pickColor(color)} style={{ backgroundColor: color }} />)}
                {paletteSizes.map(size => <div className="paletteSize" onClick={_ => pickSize(size)} style={{ width: `${size}px`, height: `${size}px`, backgroundColor: size === brushSize ? '#fff' : '#222', border: size === brushSize ? '1.5px solid #222' : '0px' }} />)}
            </div>
            <P5Wrapper sketch={sketch} />
        </React.Fragment>
    )
}
