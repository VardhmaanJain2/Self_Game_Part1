// coins,boxex,score,cloud(problem)
var ground, groundImage;
var iground;
var mario, marioStandingImage, marioAnimation, marioAttacked, marioJumping;
var gameState = 1;
var bowser;
var turtle;
var obstaclesGroup;
var cloud1;
var cloud2;
var cloud3;
var gameOver, gameOverImage;
var bfirebal_Image;
var backgroundMusic;
var jumpSound;
var gameOverSound;
var platformGroup;
var mysteryBoxGroup;
var platformImage, mysteryBoxImage
var coinImage;
var invisibleMysteryBlock;
var invisibleMysteryBlockGroup;

function preload(){
  groundImage = loadImage("Images/backg.jpg");
  marioStandingAnimation = loadAnimation("Images/Mario/km_0.png");
  marioJumping = loadAnimation("Images/Mario/km_4.png")
  marioAnimation = loadAnimation("Images/Mario/km_4.png","Images/Mario/km_3.png","Images/Mario/km_2.png","Images/Mario/km_1.png")
  bowser = loadAnimation("Images/Bowser/1.png","Images/Bowser/2.png");
  turtle = loadAnimation("Images/Turtle/L1.png","Images/Turtle/L2.png");
  marioAttacked = loadAnimation("Images/Mario/mh.png")
  cloud1 = loadImage("Images/clouds/cloud1.png");
  cloud2 = loadImage("Images/clouds/cloud2.png");
  cloud3 = loadImage("Images/clouds/cloud3.png");
  gameOverImage = loadImage("Images/game over.jpg");
  fireball_Image = loadImage("Images/Fireball.png");
  backgroundMusic = loadSound("Sounds/super-mario-bros-4293.mp3");
  jumpSound = loadSound("Sounds/smb_jump-small.wav");
  gameOverSound = loadSound("Sounds/smb_gameover.wav");
  platformImage = loadImage("Images/Platform/t.png");
  mysteryBoxImage = loadImage("Images/Mystery_Box/Mystery_Box_1.png");
  coinImage = loadImage("Images/coin.png");

}

