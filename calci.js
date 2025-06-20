let display=document.getElementById("display");
function appendToDisplay(value){
    display.textContent=display.textContent+value;
}
function clearDisplay(){
    display.textContent=""
}

function calculate(){
    let expression=display.textContent;
    let result=eval(expression);
    display.textContent=result;
}
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}