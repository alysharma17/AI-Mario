
function preload() {
	coin=loadSound('coin.wav');
	gameover=loadSound('gameover.wav');
	jump=loadSound('jump.wav');
	kick=loadSound('kick.wav');
	mariodie=loadSound('mariodie.wav');
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent('game_console');
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses)
}

function modelLoaded() {
console.log("Model Loaded");
}



function gotPoses(results) {
if (results.length>0) {
	console.log(results);
   nose_X=results[0].pose.nose.x;
   nose_Y=results[0].pose.nose.y;
}
}

function draw() {
	game();
}