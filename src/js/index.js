import { Virus } from './virus.js';
import { getRandomColors } from './utils.js';

const canvas = document.querySelector('#gameCanvas');
const ctx = canvas.getContext("2d");

const ballRadius = 16;
const W = canvas.width;
const H = canvas.height;

const v1 = new Virus(ballRadius, 20, 20, 5, 5, getRandomColors());

(function draw(){
    ctx.clearRect(0, 0, W, H);
    
    v1.drawVirus(ctx);
    v1.updatePosition(W, H);
    requestAnimationFrame(draw);
})();