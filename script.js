let color = "black";
let click = true;

function populateBoard(size){
    const board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size *size;

    for(let i=0; i< amount; i++){
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor ="white";
    board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

function changeSize(input){
    populateBoard(input);
}

function colorSquare(){
    if(click){
        if(color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else{
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;
    console.log(color)

}

function resetBoard(){
    const board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector(".board").addEventListener("click", () => {
    click = !click;
    brushOnOff();
}
);

function brushOnOff(){
    if(click == true){
        document.querySelector(".buttons").style.borderColor = "green";
    }else{
        document.querySelector(".buttons").style.borderColor = "red";
    }
}