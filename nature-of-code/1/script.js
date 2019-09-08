//Random Walker
let w;

function setup() {
  createCanvas( 640, 360);
  w = new Walker();
}

function draw() {
  background(51);
  w.walk();
  w.display();
}

//constructor function
//p5.js random function takes in a random( min, max ); --> gives you a random num between these 2
function Walker() {
  this.pos = createVector(width/2, height/2);
  this.walk = function() {
    this.pos.x = this.pos.x + random(-5, 5);
    this.pos.y = this.pos.y + random(-5, 5);
  }

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
