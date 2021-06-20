function found(){
    document.getElementById("found-text").classList.remove("hide");
}

function startGame(){
    document.getElementById("startScreen").style.display = "none";
    startTimer();
  };
  
function startTimer(){
myTimer = setInterval(upTimer, 10);
};

function upTimer(){
newTime = parseFloat(document.getElementById("timer").textContent) + 0.01;
document.getElementById("timer").textContent = newTime.toFixed(3);
};