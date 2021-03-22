const divs = document.querySelectorAll(".game");

let counter = 0;

const circle = "public/Mat/circle.svg"

const cross = "public/Mat/cross.svg"

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

const track = [];

for(let i = 0; i< divs.length; i++) {
    divs[i].addEventListener('click', action);
    let x = document.createElement("img");
    divs[i].append(x);
}

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
            let host = "http://127.0.0.1:5500/";
            let crs = host+cross;
            let crc = host+circle;
        
            if( // cross wins  player 2
                (divs[0].firstChild.src === crs && divs[1].firstChild.src === crs && divs[2].firstChild.src === crs) || 
                (divs[3].firstChild.src === crs && divs[4].firstChild.src === crs && divs[5].firstChild.src === crs) || 
                (divs[6].firstChild.src === crs && divs[7].firstChild.src === crs && divs[8].firstChild.src === crs) ||
                (divs[0].firstChild.src === crs && divs[3].firstChild.src === crs && divs[6].firstChild.src === crs) || 
                (divs[1].firstChild.src === crs && divs[4].firstChild.src === crs && divs[7].firstChild.src === crs) ||
                (divs[2].firstChild.src === crs && divs[5].firstChild.src === crs && divs[8].firstChild.src === crs) ||
                (divs[0].firstChild.src === crs && divs[4].firstChild.src === crs && divs[8].firstChild.src === crs) ||
                (divs[2].firstChild.src === crs && divs[4].firstChild.src === crs && divs[6].firstChild.src === crs)
            ){
                console.log("win");
        } else if( // circle win player 1
                (divs[0].firstChild.src === crc && divs[1].firstChild.src === crc && divs[2].firstChild.src === crc) || 
                (divs[3].firstChild.src === crc && divs[4].firstChild.src === crc && divs[5].firstChild.src === crc) || 
                (divs[6].firstChild.src === crc && divs[7].firstChild.src === crc && divs[8].firstChild.src === crc) ||
                (divs[0].firstChild.src === crc && divs[3].firstChild.src === crc && divs[6].firstChild.src === crc) || 
                (divs[1].firstChild.src === crc && divs[4].firstChild.src === crc && divs[7].firstChild.src === crc) ||
                (divs[2].firstChild.src === crc && divs[5].firstChild.src === crc && divs[8].firstChild.src === crc) ||
                (divs[0].firstChild.src === crc && divs[4].firstChild.src === crc && divs[8].firstChild.src === crc) ||
                (divs[2].firstChild.src === crc && divs[4].firstChild.src === crc && divs[6].firstChild.src === crc)
            ){
                player1.win +=1;
                player2.lose +=1   ; 
                console.log(player1.win);
    }
}

