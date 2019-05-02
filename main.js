// var capture;
// var firstPixels;
// var movingPixels;
//
// function setup() {
//   createCanvas(window.innerWidth, window.innerHeight);
//   capture = createCapture(VIDEO);
//   capture.size(320, 240);
//   // capture.hide();
// }
//
// function draw() {
//   image(capture, 0, 0, window.innerWidth, window.innerHeight);
//   loadPixels();
//   movingPixels = pixels;
//   updatePixels();
//
//   for (var y = 0; y < height; y+=4) {
//     for (var x = 0; x < width; x+=4) {
//       var index = (x + y * width)*4;
//       if (firstPixels && movingPixels
//         && !Math.abs(firstPixels[index+0] - movingPixels[index+0] <= 10)
//         && !Math.abs(firstPixels[index+1] - movingPixels[index+1] <= 10)
//         && !Math.abs(firstPixels[index+2] - movingPixels[index+2] <= 10)
//       )
//         var tracker = new Tracker(p, x, y);
//         tracker.display(toFill);
//       }
//     }
//   }
//
// function mousePressed() {
//   loadPixels();
//   firstPixels = pixels;
// }


////////////_F_A_C_E ---- T_R_A_C_K_E_R/////////////////////
let ctracker;

function setup() {
  // setup camera capture
  let videoInput = createCapture(VIDEO);
  videoInput.size(window.innerWidth, window.innerHeight);
  videoInput.position(0, 0);

  // setup canvas
  let cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.position(0, 0);
  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);
  noStroke();
}

function draw() {
  clear();
  // get array of face marker positions [x, y] format
  let positions = ctracker.getCurrentPosition();

  for (let i=0; i<positions.length; i++) {
    // set the color of the ellipse based on position on screen
    fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
    // draw ellipse at each position point
    ellipse(positions[i][0], positions[i][1], 8, 8);
  }
}
