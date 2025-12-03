//game constants and variables
let  direction = {x: 0, y: 0};
const  foodsound= new Audio('music/eat.mp3');
const  losingsound= new Audio('music/losing.mp3');
const  movingsound= new Audio('music/moving.mp3');
const  bgsoundsound= new Audio('music/theme.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y:15}
]
//game functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return
    }
    lastPaintTime = ctime;
    gameEngine();
}
function gameEngine(){
    //part 1: updating the snake array and food
    //part 2: display the snake and food
    board.innerHTML ="";
    snakeArr.forEach((e, _index)=>{
        snakeElement = document.createElement('div');
        snakeElement.index.gridRowStart = e.y;
        snakeElement.index.gridColumnStart = e.x;
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);

    })
}

//logic starts here
window.requestAnimationFrame(main);