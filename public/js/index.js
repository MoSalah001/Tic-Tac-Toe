const divs = document.querySelectorAll(".game");

let img = document.createElement("img")

const player1 = {
    win : 0,
    lose : 0,
    sign : "public/Mat/circle.svg"
}

const player2 = {
    win : 0,
    lose : 0,
    sign : "public/Mat/cross.svg"
}


function action() {
    img.src=`${player1.sign}`
    this.appendChild(img);
}

for(i in divs) {
    divs[i].addEventListener('click', action)
}