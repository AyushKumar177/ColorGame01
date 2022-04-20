
var numberOfSquares = 6;
var colors= generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "EASY" ? numberOfSquares = 3 : numberOfSquares = 6 ;        
        reset();
    });
}

function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "NEW COLORS !";
    messageDisplay.textContent = "";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        } 
    }
    h1.style.backgroundColor = "steelblue";
    h2.style.backgroundColor = "steelblue";
}
// easy.addEventListener("click", function(){
//     easy.classList.add("selected");
//     hard.classList.remove("selected");
//     numberOfSquares= 3;
//     colors=generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0;i< squares.length ; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
// });
// hard.addEventListener("click", function(){
//     easy.classList.remove ("selected");
//     hard.classList.add("selected");
//     numberOfSquares=6;
//     colors=generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0;i< squares.length ; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
// }});
resetButton.addEventListener("click",function(){
    reset();
    // messageDisplay.textContent = "";
    // this.textContent = "NEW COLORS !";
    // //generate all new colors
    // colors = generateRandomColors(numberOfSquares);
    // //pick a new random color
    // pickedColor = pickColor();
    // //change color display to match picked color
    // colorDisplay.textContent = pickedColor;
    // //change color of squares
    // for(var i=0;i<squares.length;i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
    // h2.style.backgroundColor = "steelblue";
})

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    //using the click function
    squares[i].addEventListener("click",function(){
        //grabbing color
        var clickedColor = this.style.backgroundColor;
        //comparing color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "CORRECT !";
            changeColors(clickedColor);
            h1.style.backgroundColor= clickedColor;
            h2.style.backgroundColor= clickedColor;
            resetButton.textContent = "PLAY AGAIN";

        }else{
            this.style.backgroundColor= "#232323";
            messageDisplay.textContent = "TRY AGAIN !";
        }
    })
}
function changeColors(color){
    //loop through all squares
    for(var i=0;i<squares.length;i++){
        //change each color to match each given color
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}
function generateRandomColors(num){
    //make an array of colors
    var arr= [];
    //repeat num times
    for(var i=0;i<num;i++){
        //get random color an push in array
        arr.push(randomColor());
    }
    //return the  array
    return arr;
}
function randomColor(){
    //picking  r , g , b
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
