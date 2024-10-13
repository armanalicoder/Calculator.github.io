const display = document.getElementById("display");
function appendToDisplay(inp){
        display.value += inp;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(e){
        display.value = "Error";
    }
}
function clearLastDigit(){
    display.value = display.value.slice(0, -1);
}