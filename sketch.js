var player, playerImage;
var enemy1, enemyImage;
var wallImage, sideWallImage;

function preload(){
  playerImage = loadImage("Images/Boy.png");
  //wallImage = loadImage("Images/wall.jpg");
  //sideWallImage = loadImage("Images/sideWall.jpg");

}

function setup() {
  createCanvas(800,800);
  player = createSprite(50, 750, 50, 50);
  player.addImage(playerImage);
  player.scale = 0.1;

  enemy1 = new Enemy(400,400,80,80);
  enemy2 = new Enemy(500,220,40,40);
  enemy3 = new Enemy(600,20,60,60)
  wall1 = new Wall(550,320,250,25);
  wall2 =new Wall(200,500,250,25) 
}

function draw() {
  background("grey");  
  enemy1.display();
  wall1.display();
  wall2.display();
  drawSprites();
}