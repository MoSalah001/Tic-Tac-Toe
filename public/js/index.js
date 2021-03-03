const divs = document.querySelectorAll(".game");

const player1 = {
    win : 0,
    lose : 0,
    sign : "../Mat/circle.svg"
}

function action() {
}

for(i in divs) {
    divs[i].addEventListener('click', action)
}