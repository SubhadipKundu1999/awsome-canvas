var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let c = canvas.getContext('2d');


// //rectangle
// // // /// ///////////////////////////// rectangle
// // CanvasRect.fillRect(x: number, y: number, w: number, h: number);
// c.fillStyle = 'rgba(25,70,80,0.5)';
// c.fillRect(0, 100, 100, 100);
// c.fillStyle = 'rgba(255,255,80,0.5)';
// c.fillRect(100, 0, 100, 100);



// //line
// c.beginPath();
// c.moveTo(0, 0);
// c.lineTo(200, 200);
// c.stroke();

// c.beginPath();
// c.moveTo(200, 0);
// c.lineTo(0, 200);
// c.stroke();


// // arc
// c.beginPath();
// c.arc(200, 200, 100, 0, Math.PI * 2);
// c.strokeStyle = 'rgba(0, 0, 0, 0.5)';
// c.fillStyle = 'rgba(0,0,0,0.5)';
// c.fill();
// c.stroke();


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.strokeStyle = 'rgba(200, 100, 150, 0.8)';
        c.fillStyle = 'rgba(200,100,150,0.8)';
        c.fill();
    }

    update() {
        this.draw();

        if (this.x + 1.5 * this.radius > innerWidth || this.x - this.radius / 1.5 < 0) {
            this.dx = -this.dx;
        }
        if (this.y + 1.5 * this.radius > innerHeight || this.y - this.radius / 1.5 < 0) {
            this.dy = -this.dy;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

    }

}

let circleArray = [];
function init() {

    circleArray = [];


    for (let i = 0; i < 100; i++) {
        let radius = 20;
        let x = Math.round(Math.random() * (innerWidth - 2 * radius) + radius);
        let y = Math.round(Math.random() * (innerHeight - 2 * radius) + radius)
        let dx = (Math.random() - 0.5) * 1;
        let dy = (Math.random() - 0.8) * 1;

        var circle = new Circle(x, y, dx, dy, radius);
        circleArray.push(circle);

    }

}



function animate() {

    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].draw();
        circleArray[i].update();
    }


    // // arc


    // c.beginPath();
    // c.arc(x, y, radius, 0, Math.PI * 2);
    // c.strokeStyle = 'rgba(200, 100, 150, 0.8)';
    // c.fillStyle = 'rgba(200,100,150,0.8)';
    // c.fill();
    // c.stroke()

    // if (x + 1.5 * radius > innerWidth || x - radius / 1.5 < 0) {
    //     dx = -dx;
    // }
    // if (y + 1.5 * radius > innerHeight || y - radius / 1.5 < 0) {
    //     dy = -dy;
    // }

    // x = x + dx;
    // y = y + dy;


}


animate();
init();