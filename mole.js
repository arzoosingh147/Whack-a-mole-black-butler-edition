let currSebastianTile;
let currundertakerTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) { 
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); 
    setInterval(setPlant, 2000); 
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currSebastianTile) {
        currSebastianTile.innerHTML = "";
    }
    let seba = document.createElement("img");
    seba.src = "./Sebastian.png";

    let num = getRandomTile();
    if (currundertakerTile && currundertakerTile.id == num) {
        return;
    }
    currSebastianTile = document.getElementById(num);
    currSebastianTile.appendChild(seba);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currundertakerTile) {
        currundertakerTile.innerHTML = "";
    }
    let un = document.createElement("img");
    un.src = "./undertaker.png";

    let num = getRandomTile();
    if (currSebastianTile && currSebastianTile.id == num) {
        return;
    }
    currundertakerTile = document.getElementById(num);
    currundertakerTile.appendChild(un);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currSebastianTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); 
    }
    else if (this == currundertakerTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); 
        gameOver = true;
    }
}