let stopWatch = 0;
let stopTimer = null;
let hourHand = null;
const time = document.getElementById("watch")

function padStart(value){
    return String(value).padStart(2, "0")
}

function starter(){
    const hours = Math.floor(stopWatch / 3600)
    const minutes = Math.floor((stopWatch % 3600) / 60)
    const seconds = stopWatch % 60;

    time.innerHTML = `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}`
}

function addition(){
    stopWatch++
    starter()
}
function start(){
    if(stopTimer)stop()
        stopTimer = setInterval(addition, 1000)
}

function stop(){
    clearInterval(stopTimer)
}

function reset(){
    stop()
    stopWatch = 0;
    starter() 
}