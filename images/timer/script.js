let secondsTimer = 0;
let interval = null;
const time = document.getElementById("watch");

function padStart(value){
    return String(value).padStart(2, "0")
}

function setTime(){
    const minutes = Math.floor(secondsTimer / 60)
    const seconds = secondsTimer % 60

    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`
}

function timer(){
    secondsTimer++
    setTime()
}

function start(){
    if(interval)stop()
    interval = setInterval(timer, 1000)
}

function stop(){
    clearInterval(interval)
 }
 
 function reset(){
     stop();
     secondsTimer = 0;
     setTime()
 }