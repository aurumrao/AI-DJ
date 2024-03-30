song = "";
song2 = "";
function setup() {
    canvas = createCanvas(500,400);
    canvas.position(437, 165);

    video = createCapture(VIDEO);
    video.hide();
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
}
function play2(){
    song2.play();
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