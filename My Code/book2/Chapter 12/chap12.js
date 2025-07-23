let trainSpeed = 250;
let trainPosition = 0;
let animation;
let crashed = false;

const train = document.getElementById("train");
train.addEventListener("click", speedUp);

const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (crashed) return;

    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }

    console.log("Train speed: " + trainSpeed + "ms per frame");

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);
}

function frame() {
    trainPosition += 2;
    train.style.left = trainPosition + "px";
    console.log("Train position: " + trainPosition);
    checkPosition(trainPosition);
}

function checkPosition(currentPosition) {
    if (currentPosition >= 260) {
        alert("OOOOO!");
        console.log("Crash!");
        clearInterval(animation);
        crashed = true;
    }
}

function stopTrain() {
    if (trainPosition < 260) {
        clearInterval(animation);
        console.log("Train stopped.");
    }
}


const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetTrain);

function resetTrain() {
    clearInterval(animation);
    trainSpeed = 250;
    trainPosition = 0;
    crashed = false;
    train.style.left = "0px";
    console.log("Train has been reset.");
}
