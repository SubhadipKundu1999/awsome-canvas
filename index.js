var canvas = document.querySelector('canvas');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// /// ///////////////////////////// rectangle
// c.fillStyle = 'rgba(25,70,80,0.5)';
// c.fillRect(0, 100, 100, 100);
// c.fillStyle = 'rgba(255,255,80,0.5)';
// c.fillRect(100, 0, 100, 100);


// //////////////////////////line

// c.beginPath();
// c.moveTo(0, 20);

// c.lineTo(100, 100);
// // c.stroke();
// c.strokeStyle = "#f67f"
// c.stroke();


// //arc circle
// for (var i = 0; i < 20; i++) {
//     c.beginPath();
//     let x = Math.round(Math.random() * 200);
//     let y = Math.round(Math.random() * 200);
//     c.arc(x, y, 10, 0, Math.PI * 2, true);
//     // c.strokeStyle = `rgba(${x},${y},0,0)`;
//     c.stroke();
// }

// console.log(c);




/////////// animation :

//

//

let mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
})

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

window.addEventListener('mouseout', function () {
    // mouse.x = undefined;
    // mouse.y = undefined;
})


colorArray = ['#348811', '#22BA11', '#FA4F01', '#F24041', '#16411']
class Circle {
    constructor(x, y, dx, dy, radius, colorIndex) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.colorIndex = colorIndex;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.strokeStyle = 'rgba(220, 220, 0, 0.3)';
        c.strokeStyle = colorArray[this.colorIndex]
        c.stroke();
        // c.fillStyle = 'rgba(220, 220, 0, 0.3)';
        c.fillStyle = colorArray[this.colorIndex];

        c.fill();

    }
    update() {

        this.draw();

        if (this.x + this.radius > innerWidth || this.x - 2 * this.radius < 0) {
            this.dx = - this.dx;

        }

        if (this.y + this.radius > innerHeight) {
            this.dy = - this.dy;
        }
        if (this.y - this.radius < 0) {
            this.dy = - this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        // this.radius -= 1;


        //interactivity;
        if (Math.abs(mouse.x - this.x) < 30 && Math.abs(mouse.y - this.y) < 50) {
            console.log(this.radius);
            // this.radius = Math.min(this.radius + 1, 20);
            this.radius += 1;
            if (this.radius > 40) {
                this.radius = 40;
            }
        }

        else if (Math.abs(mouse.x - this.x) > 50) {
            console.log(this.radius);
            this.radius -= 1;
            if (this.radius < 5) {
                this.radius = 5;
            }

        }

    }


}
let circleArray = [];

function init() {

    circleArray = [];
    for (i = 0; i < 400; i++) {
        let radius = 5
        let x = Math.round(Math.random() * (innerWidth - 2 * radius) + radius);
        let y = Math.round(Math.random() * (innerHeight - 2 * radius) + radius)
        let dx = (Math.random() - 0.5) * 1;
        let dy = (Math.random() - 0.8) * 1;
        let colorIndex = Math.round(Math.random() * 5);


        var circle = new Circle(x, y, dx, dy, radius, colorIndex);
        circleArray.push(circle);
    }

}

function animate() {
    requestAnimationFrame(animate);



    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (i = 0; i < circleArray.length; i++) {
        circleArray[i].update();


    }



    // if (x + radius > innerWidth || x - radius < 0) {
    //     dx = -dx;
    //     c.strokeStyle = 'green';
    // }

    // if (y + radius > innerHeight || y - radius < 0) {
    //     c.strokeStyle = 'blue';
    //     dy = -dy;
    // }
    // x += dx;
    // y = y + dy;
}


init();
animate();