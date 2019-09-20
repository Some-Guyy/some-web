import React, { Component } from 'react';

import * as THREE from 'three';
import { TimelineMax, Expo } from 'gsap';

import '../App.css';

export default class Test extends Component {
    render() {
        
        return (
            <React.Fragment></React.Fragment>
        );
    }
}

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#222");
renderer.setSize(window.innerWidth, window.innerHeight - 80);

document.body.appendChild(renderer.domElement);
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight - 80);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshLambertMaterial({color: 0xFF0000});
let mesh = new THREE.Mesh(geometry, material);
mesh.position.y = -1;

scene.add(mesh);
let light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

let render = () => {
    requestAnimationFrame(render);

    mesh.rotation.x += 0.01;
    mesh.rotation.z += 0.005;

    renderer.render(scene, camera);
}

render();

let tl = new TimelineMax().delay(.3);
tl.to(mesh.scale, 1, {x: 3, ease:Expo.easeOut});
tl.to(mesh.scale, 1, {x: 1, ease:Expo.easeOut});
