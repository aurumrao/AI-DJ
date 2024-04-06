song = "";
song2 = "";
LeftWristX = "";
LeftWristY = "";
RightWristX = "";
RightWristY = "";
function setup() {
    canvas = createCanvas(500,400);
    canvas.position(437, 165);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw(){
    image(video, 0, 0, 500, 400);
}

function preload(){
    song = loadSound("Song1.mp3");
    song2 = loadSound("Song2.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function play2(){
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}
function pause(){
    song.pause();
}
function pause2(){
    song2.pause();
}

function stop(){
    song.stop();
    song2.stop();
}
function modelLoaded(){
    console.log("Posenet is initialized.");
}
function gotPoses(results){
    if (results.length > 0){
        LeftWristX = results[0].pose.leftWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;
        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.x;
        console.log("left hand coords: " + LeftWristX +", "+ LeftWristY +"; right hand coords: " + RightWristX + ", " + RightWristY);
    }
}