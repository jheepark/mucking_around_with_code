//--------------Experiment 1 Random Elipses and rectangles ------------------//

// function setup(){
//   createCanvas(1280, 720);
//   frameRate(15);
//   background(random(0, 255));
// }
//
// function draw(){
//   var heightRandom = random(0, 50);
//   var widthRandom = random(0, 50);
//   var randomX = random(0, width);
//   var randomY = random(0, height);
//
//   translate(widthRandom, heightRandom);
//
//   var whichShape = Math.floor(Math.random() * 2) + 1;
//
//   fill(random(0,255), random(0, 255), random(0,255));
//
//   (whichShape === 1) ? rect(randomX, randomY, widthRandom, heightRandom) : ellipse(randomX, randomY, heightRandom);
// }

//--------------Experiment 2 Circle Studies with Alpha ------------------//

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(200);
//   frameRate(5);
// }
//
// var topValue = 250;
// var alphaValue = 240;
// var heightValue = 720;
// var bot = 0;
// var alphaInc = 10;
// var heightInc = 40;
// //
// // var num_iters = 400000000;
// //
// function draw() {
//   noStroke();
//
// function alphaValueChanger (value, top) {
// 	if (value === top || value === 0) {
// 		alphaInc = (alphaInc * -1);
// 	}
// 	return value += alphaInc
// }
//
// function heightValueChanger (value, top) {
// 	if (value === top || value === 0) {
// 		heightInc = (heightInc * -1);
// 	}
// 	return value += heightInc
// }
//
// heightValue = heightValueChanger(heightValue, 760);
// alphaValue = alphaValueChanger(alphaValue, 250);
//
// 	// this is an infinite loop that does not work but took way to long to figure out to delete
// 	// while( bot <= alphaValue <= topValue ){
// 	//
// 	//   if( alphaValue >= topValue || alphaValue <= bot ){
// 	//     alphaInc = (alphaInc * -1);
// 	// 		num_iters--;
// 	//   }
// 	// 	if (num_iters === 0){ break; }
// 	//   alphaValue += alphaInc;
// 	// }
//
// 	//this is ternary logic which also doesn't work....
//   // alphaValue === 0 ? alphaValue += 5 : alphaValue -= 5;
//   // heightValue === 0 ? heightValue += 20 : heightValue -= 20;
//
// 	//this is alpha logic which also doesn't work because I am an idiot..
// 	// var myColor = '#FF0000';
// 	// var c = color(myColor);
// 	// c._array[3] = alphaValue / 255;
//
//   fill(alphaValue);
//   ellipse(windowWidth/2, windowHeight/2, heightValue);
// }


//--------------Experiment 3 Rotating Sketch------------------//

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(240);
	rectMode(CENTER);
}

var alphaValue = 250;

function draw() {
	noFill();
	if (frameCount % 5 == 0) {
		push();
		translate(width / 2, height / 2);
		rotate(radians(frameCount));
		rect(0, 0, 600, 40, 20);
		line(0, 300, 350, 0);
		fill(random(0, 250), random(150, 200), random(150, 200));
		noStroke();
		ellipse(0, 200, 15, 15);
		fill(0);
		ellipse(0, 350, 20, 20);
		pop();
	}

	//other combinations for interesting effects//
	// line (0, 0, 350, 0);
	// line (300, 0, 350, 0);
	// line (0, 300, 350, 0);
	// rect(0, 300, 600, 40, 20);

}