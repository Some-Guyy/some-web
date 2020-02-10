import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from './utilities/sketch';

import '../App.css';

export default function Canvas() {
    return (<P5Wrapper sketch={sketch}></P5Wrapper>)
}
