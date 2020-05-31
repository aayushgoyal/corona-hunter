export class Virus {

    constructor(radius, xPos, yPos, vx, vy, color) {
        this.radius = radius;
        this.xPos = xPos;
        this.yPos = yPos;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
    }

    drawVirus(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
    } 

    updatePosition(canvasWidth, canvasHeight) {
        if(this.xPos + this.radius + this.vx > canvasWidth || this.xPos - this.radius + this.vx <= 0) {
            this.vx = -this.vx;
        }

        if(this.yPos + this.radius + this.vy > canvasHeight || this.yPos - this.radius + this.vy <= 0) {
            this.vy = -this.vy;
        }

        this.xPos += this.vx;
        this.yPos += this.vy;
    }
}
