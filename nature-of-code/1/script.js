//Random Walker
// let w;

// function setup() {
//   createCanvas( 640, 360);
//   w = new Walker();
// }

// function draw() {
//   background(51);
//   w.update();
//   w.display();
// }

//constructor function
//p5.js random function takes in a random( min, max ); --> gives you a random num between these 2
// function Walker() {
// 	this.pos = createVector(width/2, height/2);
// 	this.vel = createVector(0, 0);

// 	this.update = function() {
// 		this.acc = createVector(random(-1, 1), random(-1, 1));
// 		this.acc.mult(5);

// 		this.vel.add(this.acc);
// 		this.pos.add(this.vel);
// 	}

//   this.display = function() {
//     fill(255);
//     ellipse(this.pos.x, this.pos.y, 48, 48);
//   }
// }

// FOLLOWING MOUSE EXAMPLE

// function Walker() {
// 	this.pos = createVector(width / 2, height / 2);
// 	this.vel = createVector(0, 0);

// 	this.update = function () {
// 		var mouse = createVector(mouseX, mouseY);
// 		this.acc = p5.Vector.sub(mouse, this.pos);
// 		// this.acc.mult(0.01);
// 		// this.acc.normalize();
// 		this.acc.setMag(0.1);
// 		this.vel.add(this.acc);
// 		this.pos.add(this.vel);
// 	}

// 	this.display = function () {
// 		fill(255);
// 		ellipse(this.pos.x, this.pos.y, 48, 48);
// 	}
// }


// PERLIN NOISE

var xoff= 0;
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(51);

	// var x = 320;
	// var x = random(0, width);
	// var x = noise(Date.now()) * width;
	var x = noise(xoff) * width;
	xoff+=0.05;

	fill(255);
	ellipse(x, 180, 48, 48);
}