//--------------Experiment 1 Quadrants with Lines------------------//
// function setup() {
// 	createCanvas(800, 400);
// }
//
// function draw() {
// 	background(mouseX, mouseY, 255);
//
// 	for(var i = 0; i < width/2; i+=10) {
// 		line(i, 0, i, height/2)
// 	}
//
// 	for(var i = 0; i < height/2; i+=10) {
// 		line(width/2, i, width, i)
// 	}
//
// 	for(var i = width/2; i < width; i+=10) {
// 		line(i, height/2, i, height)
// 	}
//
// 	for(var i = height/2; i < height; i+=10) {
// 		line(0, i, width/2, i)
// 	}
// }

//--------------Experiment 2 Evenly Spreadout Circles with Changing Colours------------------//

// var margin = 100;
// var circleSize = 50;
//
// var numHorizontal = 6;
// var numVertical = 4;
//
// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// 	background(255);
// 	colorMode(HSB, width, height, 100);
// }
//
// function draw() {
// 	for (var x = 0; x < numHorizontal; x++) {
// 		for (var y = 0; y < numVertical; y++) {
// 			var myColor1 = map(y, 0, 5, 0, 255);
// 			var myColor2 = map(x, 0, 5, 0, 255);
// 			fill(mouseX, mouseY, myColor1);
//
// 			var posX = map(x, 0, numHorizontal-1, margin, width - margin);
// 			var posY = map (y, 0, numVertical-1, margin, height - margin);
// 				ellipse( posX, posY, 100, 100);
// 		}
// 	}
// }


//--------------Experiment 3 Concentric Rectangles and Circles with the map function ------------------//
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	rectMode(CENTER);
}

function draw() {
	noStroke();
	for (var x = 550; x > 50; x -= 50) {
		var myColor = map(x, 600, 50, 255, 0)
		fill(myColor);
		rect(width / 2 - 200, height / 2, x, x);
		ellipse(width / 2 + 400, height / 2, x, x);
	}
}