import React from 'react';

import * as THREE from 'three';
// import { TimelineMax, Expo } from 'gsap';

import '../../App.css';

export default function Balls() {
    return (
        <React.Fragment></React.Fragment>
    );
}

// Setting up cameras and renderers
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
// let raycaster = new THREE.Raycaster();
// let mouse = new THREE.Vector2();

// Setting up objects
let meshArray = [];
for (let i = 0; i < 20; i++) {
    let geometry = new THREE.SphereGeometry(1, 32, 32);
    let material = new THREE.MeshLambertMaterial({ color: Math.random() * 0xFFFFFF });
    let mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (Math.random() - 0.5) * 20;
    mesh.position.y = (Math.random() - 0.5) * 20;
    mesh.position.z = - Math.random() * 10;
    scene.add(mesh);
    meshArray.push({object: mesh, status: 'expand'});
}
let light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

const render = () => {
    requestAnimationFrame(render);

    for (var meshObject in meshArray) {
        if (meshArray[meshObject].object.scale.x > 1.5) {
            meshArray[meshObject].status = 'shrink';
        } else if (meshArray[meshObject].object.scale.x < 0.5) {
            meshArray[meshObject].status = 'expand';
        }

        if (meshArray[meshObject].status == 'expand') {
            meshArray[meshObject].object.scale.x += Math.random() / 50;
            meshArray[meshObject].object.scale.y += Math.random() / 50;
            meshArray[meshObject].object.scale.z += Math.random() / 50;
        } else {
            meshArray[meshObject].object.scale.x -= Math.random() / 50;
            meshArray[meshObject].object.scale.y -= Math.random() / 50;
            meshArray[meshObject].object.scale.z -= Math.random() / 50;
        }
    }

    renderer.render(scene, camera);
}

render();
