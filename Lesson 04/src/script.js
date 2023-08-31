import * as three from 'three';
import './style.css';

const scene = new three.Scene();

const geometry = new three.BoxGeometry(1, 1, 1);
const material = new three.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new three.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new three.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new three.WebGLRenderer({
  canvas: document.querySelector('canvas.webgl'),
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
