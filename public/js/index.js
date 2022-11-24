const divs = document.querySelectorAll(".game");

let counter = 0;

const circle = "public/Mat/circle.svg";

const cross = "public/Mat/cross.svg";

const resetbtn = document.querySelector("#reset")
const btnDark = document.querySelector("#btnDark")

const player1 = {
    win : 0,
    lose : 0,
    sign : "./public/Mat/cross.svg"
}

const player2 = {
    win : 0,
    lose : 0,
    sign : "./public/Mat/circle.svg"
}

const track = [];

const toggle = document.querySelector(".btn");
toggle.addEventListener('click',change)

function play(){
    for(let i = 0; i< divs.length; i++) {
        divs[i].addEventListener('click', action);
        let x = document.createElement("img");
        divs[i].append(x);
    }
}
play()

function action() {
    if(this.firstChild.src === "") {
        counter++;
        track.push(counter)
        if(counter % 2 == 0) {
            this.firstChild.src = circle;
            check()
        } else if(!counter % 2 == 0) {
            this.firstChild.src = cross;
            check()
        }
    }      
}

function check() {
            let crs = 'cross';
            let crc = 'circle';
            if( // cross wins  player 2
                (divs[0].firstChild.src.includes(crs) === true && divs[1].firstChild.src.includes(crs) === true && divs[2].firstChild.src.includes(crs) === true) || 
                (divs[3].firstChild.src.includes(crs) === true && divs[4].firstChild.src.includes(crs) === true && divs[5].firstChild.src.includes(crs) === true) || 
                (divs[6].firstChild.src.includes(crs) === true && divs[7].firstChild.src.includes(crs) === true && divs[8].firstChild.src.includes(crs) === true) ||
                (divs[0].firstChild.src.includes(crs) === true && divs[3].firstChild.src.includes(crs) === true && divs[6].firstChild.src.includes(crs) === true) || 
                (divs[1].firstChild.src.includes(crs) === true && divs[4].firstChild.src.includes(crs) === true && divs[7].firstChild.src.includes(crs) === true) ||
                (divs[2].firstChild.src.includes(crs) === true && divs[5].firstChild.src.includes(crs) === true && divs[8].firstChild.src.includes(crs) === true) ||
                (divs[0].firstChild.src.includes(crs) === true && divs[4].firstChild.src.includes(crs) === true && divs[8].firstChild.src.includes(crs) === true) ||
                (divs[2].firstChild.src.includes(crs) === true && divs[4].firstChild.src.includes(crs) === true && divs[6].firstChild.src.includes(crs) === true)
            ){
                player1.win +=1;
                player2.lose +=1;
                document.querySelector("#win1").innerHTML = `Score: ${player1.win}`;
                resetbtn.style.display= "block";
                divs.forEach(div=>{
                    div.removeEventListener('click',action);
                })
                
            } else if( // circle win player 1
                (divs[0].firstChild.src.includes(crc) === true && divs[1].firstChild.src.includes(crc) === true && divs[2].firstChild.src.includes(crc) === true) || 
                (divs[3].firstChild.src.includes(crc) === true && divs[4].firstChild.src.includes(crc) === true && divs[5].firstChild.src.includes(crc) === true) || 
                (divs[6].firstChild.src.includes(crc) === true && divs[7].firstChild.src.includes(crc) === true && divs[8].firstChild.src.includes(crc) === true) ||
                (divs[0].firstChild.src.includes(crc) === true && divs[3].firstChild.src.includes(crc) === true && divs[6].firstChild.src.includes(crc) === true) || 
                (divs[1].firstChild.src.includes(crc) === true && divs[4].firstChild.src.includes(crc) === true && divs[7].firstChild.src.includes(crc) === true) ||
                (divs[2].firstChild.src.includes(crc) === true && divs[5].firstChild.src.includes(crc) === true && divs[8].firstChild.src.includes(crc) === true) ||
                (divs[0].firstChild.src.includes(crc) === true && divs[4].firstChild.src.includes(crc) === true && divs[8].firstChild.src.includes(crc) === true) ||
                (divs[2].firstChild.src.includes(crc) === true && divs[4].firstChild.src.includes(crc) === true && divs[6].firstChild.src.includes(crc) === true)
            ){
                player2.win +=1;
                player1.lose +=1;   ; 
                document.querySelector("#win2").innerHTML = `Score: ${player1.win}`;
                resetbtn.style.display= "block";
                divs.forEach(div=>{
                    div.removeEventListener('click',action);
                })
            } else if(counter % 9 == 0){
                resetbtn.style.display= "block";
            }
}

document.querySelector("#reset").addEventListener('click',reset)


function reset(){
    for(let i = 0; i< divs.length; i++) {
        divs[i].removeChild(divs[i].firstChild);
        counter=0;
    }
    resetbtn.style.display= "none";
    play();
}
            

function change() {
    if(toggle.checked == true){
        document.getElementById('switch-label').textContent = "Light Mode";
        document.getElementsByTagName("body")[0].classList.add("darkmode");
        document.getElementById("title").id = "titleDark";
        let game = document.getElementsByClassName("game");
        document.getElementById("h1").id="p1";
        document.getElementById("h2").id="p2";
        document.getElementById("reset").id ="btnDark";
        for(let i=0; i< game.length;i++) {
            game[i].classList.add("gameDark")
        }
    } else if(toggle.checked == false) {
        document.getElementById('switch-label').textContent = "Dark Mode";
        document.getElementsByTagName("body")[0].classList.remove("darkmode");
        document.getElementById("titleDark").id = "title";
        let game = document.getElementsByClassName("game");
        document.getElementById("p1").id="h1";
        document.getElementById("p2").id="h2";
        document.getElementsByTagName("p")[0].id = "p";
        document.getElementsByTagName("p")[1].id = "p";
        document.getElementById("btnDark").id ="reset"
        for(let i=0; i< game.length;i++) {
            game[i].classList.remove("gameDark")
        }
    }
}