
const body = document.getElementsByTagName('body')[0];
    function colorFlipper(name){
        body.style.backgroundColor = name;
    }
    // colorFlipper('blue')
function setColor(){
    const red = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const color = `rgb(${red}, ${blue}, ${green})`
    body.style.backgroundColor = color;
}
console.log(color);  