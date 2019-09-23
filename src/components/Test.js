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

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

let meshArray = [];

for (let i = 0; i < 20; i++) {
    let geometry = new THREE.BoxGeometry(Math.random() * 3, Math.random() * 3, Math.random() * 3);
    let material = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
    let mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (Math.random() - 0.5) * 20;
    mesh.position.y = (Math.random() - 0.5) * 20;
    mesh.position.z = - Math.random() * 10;
    scene.add(mesh);
    meshArray.push(mesh);
}

let light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

let render = () => {
    requestAnimationFrame(render);

    for (var meshObject in meshArray) {
        meshArray[meshObject].rotation.x += Math.random() / 50;
        meshArray[meshObject].rotation.y += Math.random() / 50;
        meshArray[meshObject].rotation.z += Math.random() / 50;
    }

    renderer.render(scene, camera);
}

const onHover = event => {
    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(scene.children, true);
    for (let i = 0; i < intersects.length; i++) {
        let animationSpin = new TimelineMax();
        animationSpin.to(intersects[i].object.rotation, 3, {y: 15, ease:Expo.easeOut});
    }
}

render();
window.addEventListener('mousemove', onHover);
