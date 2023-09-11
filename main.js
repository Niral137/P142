function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function setup()
{
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

game_status ="";
function startGame()
{
    game_status= "start";
    document.getElementById("status").innerHTML = "Game Is Loaded";
}

function draw()
{
    if(game_status == "start")
}