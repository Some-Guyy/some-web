import React, { useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import io from 'socket.io-client';

import '../../App.css';

const socket = io.connect();

export default function Canvas() {
    useEffect(_ => socket.on('connected', _ => console.log('Client: Socket connected!')));
    return (<P5Wrapper sketch={sketch}></P5Wrapper>)
}

const sketch = p => {
    p.setup = _ => {
        p.createCanvas(200, 200);
    }

    p.draw = _ => {
        p.background(51);
        p.ellipse(p.mouseX, p.mouseY, 60, 60);
    }

    // p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //     if (canvas) //Make sure the canvas has been created
    //         p.fill(newProps.color);
    // }
}
