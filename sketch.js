var bg, bgImage;
var mom, mom_Image, girl, girl_image;
var mobile,
  mobileImg,
  laptop,
  laptopImg,
  headsets,
  headsetsImg,
  drone,
  droneImg,
  Ipad,
  IpadImg;
var mobileS = 0
var droneS = 0
var ipadS = 0
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  momImg = loadImage("mom.png");
  girlImg = loadAnimation("1.png", "2.png", "3.png", "4.png", "5.png", "6.png");
  girlStop = loadAnimation("1.png");

  bgImg = loadImage("city image game.jpg");
  ipadImg = loadImage("ipad.png");
  droneImg = loadImage("drone.png");
  mobileImg = loadImage("mobile.png");
  laptopImg = loadImage("laptop.png");
  headsetsImg = loadImage("headsets.png");
}

function setup() {
  createCanvas(800, 600);
  bg = createSprite(200, 200, 20, 20);
  bg.addImage("bg", bgImg);
  bg.scale = 3;
  girl = createSprite(300, 470, 20, 20);
  girl.addAnimation("girl", girlImg);
  girl.addAnimation("girlstopped", girlStop);
  girl.scale = 0.7;
  mom = createSprite(50, 470, 20, 20);
  mom.addImage("girl", momImg);
  mom.scale = 0.3;
  mobileSI = createSprite(width-100,100);
  mobileSI.addImage("mobile", mobileImg);
  mobileSI.scale = 0.1;

  droneSI = createSprite(width-170,100);
  droneSI.addImage("mobile", droneImg);
  droneSI.scale = 0.1;
  
  ipadSI = createSprite(width-240,100);
  ipadSI.addImage("mobile", ipadImg);
  ipad
  SI.scale = 0.1;

  mobileG = new Group();
  droneG = new Group();
  ipadG = new Group();
}
function draw() {
  background(50, 50, 50);

  if (gameState === PLAY) {

    bg.velocityX = -2;
    if (keyDown(DOWN_ARROW) && girl.y < 530) {
      girl.y = girl.y + 5;
    }
    if (keyDown(UP_ARROW) && girl.y > 480) {
      girl.y = girl.y - 5;
    }
    if (keyDown(RIGHT_ARROW)) {
      girl.x = 300;
    } else {
      girl.velocityX = -2;
    }

    if (bg.x < 0) {
      bg.x = bg.width / 2;
    }
    drones();
    ipads();
    mobiles();

    if(girl.isTouching(mom)){
      gameState = END;
    }
    for (var i = 0; i < mobileG.length; i++) {
    if (mobileG.get(i).isTouching(girl)) {
      mobileG.get(i).destroy();
      mobileS+=1
    }
    
  }
  for (var i = 0; i < droneG.length; i++) {
    if (droneG.get(i).isTouching(girl)) {
      droneG.get(i).destroy();
      droneS+=1
    }
  }  

  for (var i = 0; i < ipadG.length; i++) {
    if (ipadG.get(i).isTouching(girl)) {
      ipadG.get(i).destroy();
      ipadS+=1
    }
  }

  }else if( gameState === END){
    bg.velocityX = -0;
    girl.setVelocity(0,0);
    girl.changeAnimation("girlstopped", girlStop);

  }

  

  

  
  drawSprites();

  fill(255);
  text(mobileS,width-80,100);
  text(droneS,width-135,100);
  text(ipadS,width-210,100);
  
}

function ipads() {
  if (frameCount % 100 === 0) {
    ipad = createSprite(800, 530, 20, 20);
    var rand = Math.round(random(1, 2));
    if (rand === 1) {
      ipad.y = 535;
    } else {
      ipad.y = 580;
    }
    ipad.addImage("ipad", ipadImg);
    ipad.scale = 0.1;
    ipad.velocityX = -3;
    ipadG.add(ipad);
  }
}

function drones() {
  if (frameCount % 200 === 0) {
    drone = createSprite(800 + 30, 530, 20, 20);
    var rand = Math.round(random(1, 2));
    if (rand === 1) {
      drone.y = 535;
    } else {
      drone.y = 580;
    }
    drone.addImage("ipad", droneImg);
    drone.scale = 0.1;
    drone.velocityX = -4;
    droneG.add(drone);
  }
}

function mobiles() {
  if (frameCount % 150 === 0) {
    mobile = createSprite(800 + 15, 530, 20, 20);
    var rand = Math.round(random(1, 2));
    if (rand === 1) {
      mobile.y = 535;
    } else {
      mobile.y = 580;
    }
    mobile.addImage("mobile", mobileImg);
    mobile.scale = 0.1;
    mobile.velocityX = -3;
    mobileG.add(mobile);
  }
}
