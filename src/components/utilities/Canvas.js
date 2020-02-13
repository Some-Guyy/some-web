import React, { useState } from 'react';
import io from 'socket.io-client';

import P5Wrapper from 'react-p5-wrapper';

import '../../App.css';

const socket = io.connect();

export default function Canvas() {
    const [brushSize, setBrushSize] = useState(20);
    const [brushColor, setBrushColor] = useState(0);

    // Change brush properties
    const pickColor = color => setBrushColor(color);

    // Palette for canvas
    const paletteColors = ['red', 'green', 'blue'];

    // Canvas
    const sketch = p => {
        // When canvas launches.
        p.setup = _ => {
            socket.emit('requestCanvasState', '');
            p.createCanvas(1800, 800);
            p.background(255);
        }

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
            p.ellipse(p.mouseX, p.mouseY, brushSize);
            console.log(`${data['drawX']}, ${data['drawY']}`);
        }

        socket.on('canvasState', data => {
            for (let i = 0; i < data.length; i++) {
                p.noStroke();
                p.fill(data[i].brushColor);
                p.ellipse(data[i].drawX, data[i].drawY, data[i].brushSize);
            }
        });

        socket.on('serverDraw', data => {
            p.noStroke();
            p.fill(data.brushColor);
            p.ellipse(data.drawX, data.drawY, data.brushSize);
        });
    }

    return (
        <React.Fragment>
            <div id="palette">
                {paletteColors.map(color => <div className="paletteColor" onClick={_ => pickColor(color)} style={{ backgroundColor: color }} />)}
            </div>
            <P5Wrapper sketch={sketch}></P5Wrapper>
        </React.Fragment>
    )
}
