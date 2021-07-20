noseX=0;
 noseY=0;

function preload()
{
   clown_nose = loadImage("https://i.postimg.cc/fT4tx8yr/580b57fbd9996e24bc43bed5.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.position(480, 220);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-8;
        noseY = results[0].pose.nose.y-8;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function modelLoaded()
{
    console.log('Posenet is initialized');
}

function draw()
{
   image(video, 0, 0, 300, 300);
   image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save('MyfilterImg.png');
}
function adduser()
{
    window.location="thank.html";
}