import React, { useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import io from 'socket.io-client';

import '../../App.css';

const socket = io.connect();

export default function Canvas() {
    // useEffect(_ => ); Retrieve previous drawings here.
    return (<P5Wrapper sketch={sketch}></P5Wrapper>)
}

const sketch = p => {
    p.setup = _ => {
        p.createCanvas(1000, 800);
        p.background(255);
    }

    p.mouseDragged = _ => {
        // Send drawing data to the server.
        const data = {
            x: p.mouseX,
            y: p.mouseY
        };
        socket.emit('clientDraw', data);

        p.noStroke();
        p.fill(0);
        p.ellipse(p.mouseX, p.mouseY, 36, 36);
        console.log(`${data['x']}, ${data['y']}`);
    }

    socket.on('serverDraw', data => {
        p.noStroke();
        p.fill(0);
        p.ellipse(data.x, data.y, 36, 36);
    });
}
