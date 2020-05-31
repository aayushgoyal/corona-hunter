import VirusImg from '../assets/virus.png';
import { virusDimension } from './constants/constant';

const virus = new Image();
virus.src = VirusImg;
export class Virus {

    constructor(xPos, yPos, vx, vy, color) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
    }

    drawVirus(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.drawImage(virus, this.xPos, this.yPos, virusDimension, virusDimension);
        ctx.closePath();
        ctx.fill();
    } 

    updatePosition(canvasWidth, canvasHeight) {
        if(this.xPos + virusDimension + this.vx > canvasWidth || this.xPos + this.vx <= 0) {
            this.vx = -this.vx;
        }

        if(this.yPos + virusDimension + this.vy > canvasHeight || this.yPos + this.vy <= 0) {
            this.vy = -this.vy;
        }

        this.xPos += this.vx;
        this.yPos += this.vy;
    }
}
