song = "";

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
    song = loadSound("music (2).mp3");
}

function play(){
    song.play();
}

function pause(){
    song.pause();
}

function stop(){
    song.stop();
}