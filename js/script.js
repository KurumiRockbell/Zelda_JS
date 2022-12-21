// VARIABLES USES    
    
let temps = 29;
let points = 0;
let ttime; 
let pmove; // piece moove
let gmove; //
let goodgame = 1; // suprimme tt les sprite quand gameover est la
let goomrad; // moov de goomba , 1 = hauteur, 2 = bas , 3= gauche droite    

let gameOver = document.getElementById("gameover");
let chrono = document.getElementById("secondes");
let score = document.getElementById("score");
let goldpiece = document.getElementById("piece");
let mario = document.getElementById("perso");
let ops = document.getElementById("goomba");


//GAME OVER 

gameOver.style.display = 'none';

function over() {
    gameOver.style.display = 'block';
    clearInterval(ttime);
    clearInterval(pmove);
    goldpiece.style.display = 'none';
    mario.style.display = 'none';
    ops.style.display = 'none';
    goodgame = 0;
}
setTimeout(over, 30500);

// TIMER & SCORE    

function moinsTemps() {
    chrono.innerText = "TEMPS RESTANT : " + temps + " s";
    temps = temps <= 0 ? 0 : temps - 1;
}
ttime = setInterval(moinsTemps, 1000);

function diminScore() {
    points--;
    score.innerText = "Score : " + points;
}

function plusScore() {
    points++;
    score.innerText = "Score : " + points;
}


// PIECE    

let posx = Math.floor(Math.random() * (window.innerWidth - 100));   

let posy = Math.floor(Math.random() * (window.innerHeight - 100));  


document.getElementById("piece").style.left = posx + "px";
document.getElementById("piece").style.top = posy + "px";

function bougepiece() {
    posx = Math.floor(Math.random() * (window.innerWidth - 100));
    posy = Math.floor(Math.random() * (window.innerHeight - 100));

    moveImgTo("piece", posx, posy);

    goldpiece.style.left = posx + "px";
    goldpiece.style.top = posy + "px";
}
pmove = setInterval(bougepiece, 6000);  

// GOOMBA OPS

let posex = Math.floor(Math.random() * (window.innerWidth - 100));
let posey = Math.floor(Math.random() * (window.innerHeight - 100));
document.getElementById("goomba").style.left = posex + "px";
document.getElementById("goomba").style.top = posey + "px";

function bougeOps() {
    posex = Math.floor(Math.random() * (window.innerWidth - 100));
    posey = Math.floor(Math.random() * (window.innerHeight - 100));

    moveImgTo("goomba", posex, posey);
}
gmove = setInterval(bougeOps, 1500);

setInterval(mouvOps, 500);

function mouvOps() {
    goomrad = Math.floor(Math.random() * 4);
    switch (true) {
        case goomrad == 0:
            posex += 50;
            moveImgTo("goomba", posex, posey);
        case goomrad == 1:
            posex -= 50;
            moveImgTo("goomba", posex, posey);
        case goomrad == 2:
            posey += 50;
            moveImgTo("goomba", posex, posey);
        case goomrad == 3:
            posey -= 50;
            moveImgTo("goomba", posex, posey);
    }
}

// MARIO MOOVE

let xMario = 725;
let yMario = 625; 
document.getElementById("perso").style.left = xMario + "px";
document.getElementById("perso").style.top = yMario + "px";

document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft") {
        xMario -= 50;
        moveImgTo("perso", xMario, yMario);
        if ((Math.abs(posx - xMario) < 50) && (Math.abs(posy - yMario) < 50) && (goodgame != 0)) {
            clearInterval(pmove);
            pmove = setInterval(bougepiece, 5000);
            bougepiece();
            plusScore();
        }
        if ((Math.abs(posex - xMario) < 50) && (Math.abs(posey - yMario) < 50) && (goodgame != 0)) {
            diminScore();
            bougeOps();
        }
    } else if (event.key == "ArrowUp") {
        yMario -= 50;
        moveImgTo("perso", xMario, yMario);
        if ((Math.abs(posx - xMario) < 50) && (Math.abs(posy - yMario) < 50) && (goodgame != 0)) {
            clearInterval(pmove);
            pmove = setInterval(bougepiece, 5000);
            bougepiece();
            plusScore();
        }
        if ((Math.abs(posex - xMario) < 50) && (Math.abs(posey - yMario) < 50) && (goodgame != 0)) {
            diminScore();
            bougeOps();
        }
    } else if (event.key == "ArrowRight") {
        xMario += 50;
        moveImgTo("perso", xMario, yMario);
        if ((Math.abs(posx - xMario) < 50) && (Math.abs(posy - yMario) < 50) && (goodgame != 0)) {
            clearInterval(pmove);
            pmove = setInterval(bougepiece, 5000);
            bougepiece();
            plusScore();
        }
        if ((Math.abs(posex - xMario) < 50) && (Math.abs(posey - yMario) < 50) && (goodgame != 0)) {
            diminScore();
            bougeOps();
        }
    } else if (event.key == "ArrowDown") {
        yMario += 50;
        moveImgTo("perso", xMario, yMario);
        if ((Math.abs(posx - xMario) < 50) && (Math.abs(posy - yMario) < 50) && (goodgame != 0)) {
            clearInterval(pmove);
            pmove = setInterval(bougepiece, 5000);
            bougepiece();
            plusScore();
        }
        if ((Math.abs(posex - xMario) < 50) && (Math.abs(posey - yMario) < 50) && (goodgame != 0)) {
            diminScore();
            bougeOps();
        }
    }
});
function moveImgTo(id, x, y) {
    document.getElementById(id).style.left = x + "px";
    document.getElementById(id).style.top = y + "px";
};