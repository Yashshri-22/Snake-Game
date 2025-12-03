//game constants and variables
let  inputDir = {x: 0, y: 0};
const  foodsound= new Audio('assets/sounds/eat.mp3');
const  losingsound= new Audio('assets/sounds/losing.mp3');
const  movingsound= new Audio('assets/sounds/moving.mp3');
const  bgsound= new Audio('assets/sounds/theme.mp3');
let speed = 7;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y:15}
]
food = {x: 6, y: 7};

//game functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake){
    //if u bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    //if u bump into the wall
    if(snake[0].x >= 18 ||  snake[0].x <= 0 || snake[0].y >= 18 ||  snake[0].y <= 0){
        return true;
    }
}

function gameEngine(){
    //part 1: updating the snake array and food
    if(isCollide(snakeArr) === true ){
        losingsound.play();
        bgsound.pause();
        inputDir = {x: 0, y: 0};
        alert("Game over...press any key to play again!!!")
        snakeArr = [{x: 13, y:15}];
        bgsound.play();
        score = 0;
    }
     //if you have eaten the food,increment the score and regenrate the food
     if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodsound.play();
        score += 1;
        if(score>HighScoreval){
            HighScoreval = score;
            localStorage.setItem("HighScore",JSON.stringify(HighScoreval))
            hiscoreBox.innerHTML = "HighScore: " + HighScoreval;
        }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({x :snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b - a)* Math.random()), y: Math.round(a + (b - a)* Math.random())}
    }

    //moving the snake 
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        const element = snakeArr[i];
        snakeArr[i+1] = {...snakeArr[i]}
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    //part 2: display the snake and food
    // display the snake
    board.innerHTML ="";
    snakeArr.forEach((e, _index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(_index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);

    })
   
    // display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

//logic starts here
bgsound.play();
let HighScore = localStorage.getItem("HighScore");
if(HighScore === null){
    let HighScoreval = 0;
    localStorage.setItem("HighScore",JSON.stringify(HighScoreval))
}
else{
    HighScoreval = JSON.parse(HighScore)
    hiscoreBox.innerHTML = "HighScore: " + HighScoreval;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    inputDir = {x: 0,y: 1} //start the game
    movingsound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
    
        default:
            break;
    }
})