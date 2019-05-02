// What this is:
// p5.js + poseNet (via ml5.js) + matter.js (Box2D variant)
// A facetracker/bodytracker integrated with a 2D physics engine.
// Instructions:
// Click your mouse to drop a box from your nose.

//TAKEN FROM-----> http://cmuems.com/2018/60212f/deliverables/5-due-10-12/templates/

let video;
let poseNet;
let poses = [];
let lastKeypoints = []; // The most recent keypoints

var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;

function setup() {
  createCanvas(640, 480);

  // Create a camera object, and a poseNet tracker for it
  video = createCapture(VIDEO);
  video.size(width, height);
  poseNet = ml5.poseNet(video);
  poseNet.on('pose', function(results) {
    poses = results;
  });
  video.hide();

  // Create a Matter.js physics engine, and put a ground in it
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, height, width, 100, options);
  World.add(world, ground);
}

function mousePressed() {
  var noseX = lastKeypoints[0].x;
  var noseY = lastKeypoints[0].y;
  boxes.push(new Box(noseX, noseY, 30,30));
}

function draw() {
  background(51);
  image(video, 0,0, width, height);

  updateKeypoints();     // Update the tracker.
  drawKeypoints();       // Draw the tracker.

  Engine.update(engine); // Update the physics engine.
  drawPhysics();         // Draw the physics objects.
}


function drawPhysics() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);
}


// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  for (let i = 0; i < lastKeypoints.length; i++) {
    keypoint = lastKeypoints[i];
    fill(255, 0, 0);
    ellipse(keypoint.x, keypoint.y, 10, 10);
  }
}


function updateKeypoints() {
  // If there are no poses, ignore it.
  if (poses.length <= 0) {
    return;
  }

  // Otherwise, let's update the lastKeypoints.
  let pose = poses[0].pose;
  let keypoints = pose.keypoints;
  for (let kp = 0; kp < keypoints.length; kp++) {
    lastKeypoints[kp] = keypoints[kp].position;
  }
}
