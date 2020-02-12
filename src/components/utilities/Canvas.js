import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import io from 'socket.io-client';

import '../../App.css';

const socket = io.connect();
const brushSize = 20;

export default function Canvas() {
    return (<P5Wrapper sketch={sketch}></P5Wrapper>)
}

const sketch = p => {
    // When canvas launches.
    p.setup = _ => {
        socket.emit('requestCanvasState', '');
        p.createCanvas(1000, 800);
        p.background(255);
    }

    // When drawing.
    p.mouseDragged = _ => {
        // Send drawing data to the server.
        const data = {
            drawX: p.mouseX,
            drawY: p.mouseY,
            brushSize
        };
        socket.emit('clientDraw', data);

        p.noStroke();
        p.fill(0);
        p.ellipse(p.mouseX, p.mouseY, brushSize);
        console.log(`${data['drawX']}, ${data['drawY']}`);
    }

    socket.on('canvasState', data => {
        for (let i = 0; i < data.length; i++) {
            p.noStroke();
            p.fill(0);
            p.ellipse(data[i].drawX, data[i].drawY, data[i].brushSize);
        }
    });

    socket.on('serverDraw', data => {
        p.noStroke();
        p.fill(0);
        p.ellipse(data.drawX, data.drawY, data.brushSize);
    });
}
