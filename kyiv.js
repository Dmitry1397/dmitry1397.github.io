const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

const angles = [{start: -45, end: 45}, {start: -20, end: 20}, {start:0, end: 360}];

ctx.translate(0, height / 2);

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

class Letter {
    constructor(x, letter) {
        this.x = x;
        this.y = 20;
        this.letter = letter;
        this.exists = true;
    }

    draw(){
        ctx.strokeStyle = 'grey';
        ctx.lineWidth = 2;
        ctx.font = 'bold 50px Arial';
        ctx.strokeText(this.letter, this.x, this.y);
    }
}

const k = new Letter(width / 20 * 2, 'K');
const y = new Letter(width/20 * 7, 'Y');
const i = new Letter(width/20 * 12, 'I');
const v = new Letter(width/20 * 16, 'V');

const letters = [k, y, i, v];
const posX = 0;
class Pacman {
    constructor(x, startAngle, endAngle) {
        this.x = x;
        this.y = 0;
        this.radius = 50;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    draw() {
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, degToRad(this.startAngle), degToRad(this.endAngle), true);
        ctx.lineTo(this.x, this.y);
        ctx.fill(); 
    }

    update() {
        for (let i = 0; i < angles.length; i++) {
            if (this.startAngle === angles[i].start && this.x % 15 === 0) {
                if (i === angles.length - 1) {
                    this.startAngle = angles[0].start;
                    this.endAngle = angles[0].end;
                } else {
                    this.startAngle = angles[i+1].start;
                    this.endAngle = angles[i+1].end
                }
                this.x++;
            }

        }
        console.log(this.x);
    }
        


    checkBounds() {
        if (this.x - this.radius > width) {
            this.x = 0;
            for (const letter of letters) {
                letter.exists = true;
            }
        } else {
            this.x++;
        }
    }
    colissionDetect() {
        for (const letter of letters) {
            if (this.x === Math.floor(letter.x) || this.x === Math.ceil(letter.x) || this.x === Math.round(letter.x)) {
                letter.exists = false;
            }
        }
    }
}

const pacman = new Pacman(-50, angles[0].start, angles[0].end);

function loop() {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, -(height / 2), width, height);

    for (let letter of letters) {
        if (letter.exists) {
            letter.draw();
        }
    }

    pacman.draw();
    pacman.update();
    pacman.checkBounds();
    pacman.colissionDetect();
    window.requestAnimationFrame(loop);
}

loop();

ctx.strokeStyle = 'grey';
ctx.lineWidth = 2;
ctx.font = 'bold 50px Arial';
ctx.strokeText('K   Y   I   V', 0, 0);
