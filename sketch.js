var gameState=0;
var playerCount = 0;
var game,form, player; 
var db, allPlayers;
var car1, car2, car3,car4, cars=[];
var Icar1,Icar2,Icar3,Icar4,trackI, groundI, textWritten=0;
var playersAtEnd,  leaderboard=0;
function preload(){
    Icar1=loadImage("images/car1.png");
    Icar2=loadImage("images/car2.png");
    Icar4=loadImage("images/car4.png");
    Icar3=loadImage("images/car3.png");
    trackI=loadImage("images/track.jpg");
    groundI=loadImage("images/ground.png");

}
function setup(){
    createCanvas(displayWidth-50,displayHeight-50);
    db=firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4) {
        game.updateState(1);
    }

    if(gameState === 1) {
        clear();
        game.play();
    }
   if(gameState===2){
       
       game.end();
   }
}

