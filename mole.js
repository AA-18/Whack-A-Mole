let curMoleTile;
let curPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

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
  if (curMoleTile) {
    curMoleTile.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "./monty-mole.png";

  let num = getRandomTile();
  if (curPlantTile && curPlantTile.id == num) {
    return;
  }
  curMoleTile = document.getElementById(num);
  curMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (curPlantTile) {
    curPlantTile.innerHTML = "";
  }

  let plant = document.createElement("img");
  plant.src = "./piranha-plant.png";

  let num = getRandomTile();
  if (curMoleTile && curMoleTile.id == num) {
    return;
  }
  curPlantTile = document.getElementById(num);
  curPlantTile.appendChild(plant);
}

function selectTile() {
    if(gameOver) {
        return ;
}
  if (this == curMoleTile) {
    score += 10;
    document.getElementById("score").innerText = "Score : " + score.toString();
  } else if (this == curPlantTile) {
    document.getElementById("score").innerText =
      "GAME OVER: " + score.toString();
    gameOver = true;
    let btn = document.createElement("button");
    btn.id = "btn";
    btn.innerHTML = "Restart";
    document.getElementById("restart").appendChild(btn);
    btn.addEventListener("click",restartGame);
  }
}

function restartGame() {
    gameOver = false;
    score = 0;
    document.getElementById("btn").remove();
    document.getElementById("score").innerText = "Score : 0";
    curMoleTile.innerHTML = "";
    curPlantTile.innerHTML = "";
}
