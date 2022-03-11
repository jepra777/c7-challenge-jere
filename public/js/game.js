

let logicPlayer = 0;
let logicComputer = 0;

function who(value){

    switch (value) {
        case 1:
            gameMain(value);
            break;
        case 2:
            gameMain(value);
            break;
        case 3:
            gameMain(value);
            break;
        default:
            break;
    }
}

function gameMain(value){
    player(value);
    computer();
    logic(logicComputer, logicPlayer);
}

function player(value){
    activeButton(value);
    logicPlayer = value;
}

function computer(){
    let active = random(4,6);
    logicComputer = active;
    activeButton(active);
}

function logic(com, ply){
    console.log(com);
    console.log(ply);
    switch (ply) {
        case 1:
            checkCom1(com);
            break;
        case 2:
            checkCom2(com);
            break;
        case 3:
            checkCom3(com);
            break;
        default:
            break;
    }
}

function checkCom1(com){
    if(com == 4) {
        domDraw();
    }
    if(com == 5) {
        domComwin();
    }
    if(com == 6) {
        domPlayerwin();
    }
}

function checkCom2(com){
    if(com == 4) {
        domPlayerwin();
    }
    if(com == 5) {
        domDraw();
    }
    if(com == 6) {
        domComwin();
    }
}

function checkCom3(com){
    if(com == 4) {
        domComwin();
    }
    if(com == 5) {
        domPlayerwin();
    }
    if(com == 6) {
        domDraw();
    }
}

function domComwin(){
    console.log("Com Menang");
    document.querySelector(".showComwin").style.display="block";
    document.querySelector(".offVs").style.display="none";
    window.location.href = '/gamehistories/add/0';

}

function domPlayerwin(){
    console.log("Player Menang");
    document.querySelector(".showPlayerwin").style.display="block";
    document.querySelector(".offVs").style.display="none";
    window.location.href = '/gamehistories/add/1';
}

function domDraw(){
    console.log("Draw");
    document.querySelector(".showDraw").style.display="block";
    document.querySelector(".offVs").style.display="none";
}

function activeButton(value){
    let button = document.querySelector(".button"+value);
    button.style.backgroundColor = "seashell";
    button.style.borderRadius = "10px";

    // Deactive All Button
    for(let i=1; i <= 3; i++){
        let allButton = document.querySelector(".button"+i);
        allButton.removeAttribute("onclick");
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function refresh() {
    window.location.reload();
}