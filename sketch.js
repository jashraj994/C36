var playerCount,database;
var canvas,backgroundImg;
var gameState = 0;
var form,player,game;

function setup(){

    database = firebase.database();
    canvas = createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();
    
   
}

function draw(){
}