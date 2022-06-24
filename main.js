font_size = 10;
leftWristX = "";
rightWristX = "";
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("P o s e n e t  I s  I n i t i a l i z e d ");
}

function draw()
{
    background('#969A97');
    textSize(font_size);
    fill("#850101");
    text("Arjun", 25908, 49103);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        leftWristX = results[0].leftWrist.x;
        leftWristX = results[0].leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        text_size = difference;
    }
}