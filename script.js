
// Dom Elements
var inputArea = document.getElementById("main-input-area")
let clr = document.getElementById("Clear")
let mainDiv = document.getElementById("main-div")
let del = document.getElementById("del")
let btn = document.querySelectorAll("button")
let body = document.body
let light = document.getElementById("light")
let savebtn = document.getElementById("saved")


// Function for light and dark mode
function toggleLightDarkMode() {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        inputArea.style.color = "black";
        body.style.transition = "0.5s ease-in-out "
        lightbtn.style.display = "block";
        light.style.display = "none";
    } else {
        body.style.backgroundColor = "black";
        inputArea.style.color = "white";
        body.style.transition = "0.5s ease-in-out"
        lightbtn.style.display = "none";
        light.style.display = "block";
    }
}
light.addEventListener('click', toggleLightDarkMode);
lightbtn.addEventListener('click', toggleLightDarkMode);

document.addEventListener('keydown' , function(event){

    switch (event.key){
        case '0':
            zero()
            break;
        case '1':
            one()
            break;
        case '2':
            two()
            break;
        case '3':
            three()
            break;
        case '4':
            four()
            break;
        case '5':
            five()
            break;
        case '6':
            six()
            break;
        case '7':
            sev()
            break;
        case '8':
            eig()
            break;
        case '9':
            nine()
            break;
//  // // // // / / 
        case '+':
            addition()
            break;
        case '-':
            subtract()
            break;
        case '*':
            multiplication()
            break;
        case '/':
            division()
            break;
        case '%':
            percantage()
            break ;
        case 'Enter':
            equal()
            break;
        case 'Backspace':
            inputArea.value = inputArea.value.slice(0, -1);
            break ;
        case 'Delete':
            inputArea.value = ""
            break;


    }

})
function percantage(){
    inputArea.value += "%"
}
function addition(){
    inputArea.value += "+"
}
function subtract(){
    inputArea.value += "-"
}
function multiplication(){
    inputArea.value += "*"
}
function division(){
    inputArea.value += "/"
}
    function dot(){
    inputArea.value += "."
}
function zero() {
    inputArea.value += 0
}
function one() {
    inputArea.value += 1
}
function two() {
    inputArea.value += 2
}
function three() {
    inputArea.value += 3
}
function four() {
    inputArea.value += 4
}
function five() {
    inputArea.value += 5
}
function six() {
    inputArea.value += 6
}
function sev() {
    inputArea.value += 7
}
function eig() {
    inputArea.value += 8
}
function nine() {
    inputArea.value += 9
}
clr.addEventListener("click" , () =>{
    inputArea.value = ""
})
del.addEventListener("click", () => {
    inputArea.value = inputArea.value.slice(0, -1);
});
function equal() {
    try {
        inputArea.value = eval(inputArea.value);
    } catch (error) {
        inputArea.value = "Error";
    }
   
}

