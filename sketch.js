
var database;

var Canvas;
var gameState=0;
var playerCount;
var form, player, game;
var car1, car2, car3,car4;
var cars=[]

var allplayers;
var distance=0;
var cars1, cars2,cars3, cars4, track

function preload(){
    cars1=loadImage("car1.png");
    cars2=loadImage("car2.png");
    cars3= loadImage("car3.png");
    cars4=loadImage("car4.png");
    track= loadImage("track.jpg");
}
function setup(){
    Canvas= createCanvas(displayWidth,displayHeight);
    database=firebase.database ()

    game= new Game();
    game.getState();
    game.start();   
}

function draw(){
    background("white");

    if (playerCount===4){
        game.update(1)
    }    
    if (gameState===1){
        clear();
        game.play();
    }
    if (gameState===2){
        game.end();
    }
    
}

