song = "";
songStatus = "";
song2Status = "";
song2 = "";
scoreLeftWrist = "";
scoreRightWrist = "";
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
    fill("#FF0000");
    stroke("#FF0000");
    if(song /= ""){
    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);
        
        if(rightWristY > 0 && rightWristY <= 100){
                document.getElementById("speed").innerHTML = "Currently At Half Speed";
                song.rate(0.5);
        }
        else if(rightWristY > 100 && rightWristY <= 200){
                document.getElementById("speed").innerHTML = "Currently At Normal Speed";
                song.rate(1);
        }
        else if(rightWristY > 200 && rightWristY <= 300){
                document.getElementById("speed").innerHTML = "Currently 1 1/2 Times Speed";
                song.rate(1.5);
        }
        else if(rightWristY > 300 && rightWristY <= 450){
                document.getElementById("speed").innerHTML = "Currently At Double Speed";
                song.rate(2);
        }
    }
    if (scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftWristY);
        volume = remove_decimals/500;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
        song.setVolume(volume);
        }
    }
    else if(song2 /= ""){
        if(scoreRightWrist > 0.2){
            circle(rightWristX, rightWristY, 20);
            
            if(rightWristY > 0 && rightWristY <= 100){
                    document.getElementById("speed").innerHTML = "Currently At Half Speed";
                    song2.rate(0.5);
            }
            else if(rightWristY > 100 && rightWristY <= 200){
                    document.getElementById("speed").innerHTML = "Currently At Normal Speed";
                    song2.rate(1);
            }
            else if(rightWristY > 200 && rightWristY <= 300){
                    document.getElementById("speed").innerHTML = "Currently 1 1/2 Times Speed";
                    song2.rate(1.5);
            }
            else if(rightWristY > 300 && rightWristY <= 450){
                    document.getElementById("speed").innerHTML = "Currently At Double Speed";
                    song2.rate(2);
            }
        }
        if (scoreLeftWrist > 0.2){
            circle(leftWristX, leftWristY, 20);
            InNumberleftWristY = Number(leftWristY);
            remove_decimals = floor(InNumberleftWristY);
            volume = remove_decimals/500;
            document.getElementById("volume").innerHTML = "Volume = " + volume;
            song2.setVolume(volume);
            }
        }
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
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        LeftWristX = results[0].pose.leftWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;
        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.x;
        console.log("left hand coords: " + LeftWristX +", "+ LeftWristY +"; right hand coords: " + RightWristX + ", " + RightWristY);
    }
}