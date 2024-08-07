const above = document.getElementById("above")

function appendToDisplay(name){
    above.value += name;
}

function clearDisplay(){
    above.value = "";
} 

function calculate(){
    above.value = eval(above.value)
}