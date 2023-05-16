let gap;
let platforms = [];

let velocity = 1;
let acceleration = 0.2;
let speed = 0;
let isGameActive = false;

let x = 100;
let y = 100;
let s = 1;
let bennyY = 100;
let bennyX = 100;

let xMouse = 200;
let yMouse = 200;
let sMouse = 0.4;

function setup() {
  createCanvas(700, 500);
  frameRate(30);
}

background(135, 206, 235);

function clouds(x, y, s) {
  fill(255, 255, 255);
  noStroke();
  rect(x, y + 220 * s, 405 * s, 60 * s);
  rect(x + 105 * s, y + 125 * s, 135 * s, 95 * s);
  rect(x + 145 * s, y + 110 * s, 60 * s, 15 * s);
  rect(x + 90 * s, y + 165 * s, 15 * s, 55 * s);
  rect(x + 75 * s, y + 205 * s, 15 * s, 15 * s);
  rect(x + 15 * s, y + 205 * s, 45 * s, 15 * s);
  rect(x + 240 * s, y + 195 * s, 165 * s, 25 * s);
  rect(x + 240 * s, y + 165 * s, 15 * s, 30 * s);
  rect(x + 255 * s, y + 180 * s, 15 * s, 15 * s);
  rect(x + 300 * s, y + 150 * s, 60 * s, 45 * s);
  rect(x + 285 * s, y + 180 * s, 15 * s, 15 * s);
  rect(x + 200 * s, y + 160 * s, 15 * s, 35 * s);
  rect(x + 360 * s, y + 165 * s, 15 * s, 30 * s);
  rect(x + 375 * s, y + 180 * s, 15 * s, 15 * s);
  rect(x + 405 * s, y + 240 * s, 15 * s, 40 * s);

  fill(115, 147, 179);
  rect(x, y + 265 * s, 420 * s, 15 * s);
  rect(x, y + 220 * s, 15 * s, 45 * s);
  rect(x + 15 * s, y + 250 * s, 15 * s, 15 * s);
  rect(x + 405 * s, y + 240 * s, 15 * s, 30 * s);
  rect(x + 390 * s, y + 220 * s, 15 * s, 45 * s);
  rect(x + 375 * s, y + 250 * s, 15 * s, 15 * s);
  rect(x + 90 * s, y + 205 * s, 15 * s, 15 * s);
  rect(x + 105 * s, y + 220 * s, 15 * s, 45 * s);
  rect(x + 120 * s, y + 240 * s, 15 * s, 30 * s);
  rect(x + 255 * s, y + 195 * s, 15 * s, 30 * s);
  rect(x + 240 * s, y + 225 * s, 15 * s, 15 * s);
  rect(x + 225 * s, y + 240 * s, 15 * s, 25 * s);
  rect(x + 210 * s, y + 250 * s, 15 * s, 15 * s);

  fill(0, 0, 0);
  rect(x, y + 280 * s, 420 * s, 15 * s);
  rect(x - 15 * s, y + 220 * s, 15 * s, 60 * s);
  rect(x, y + 205 * s, 15 * s, 15 * s);
  rect(x + 15 * s, y + 190 * s, 45 * s, 15 * s);
  rect(x + 60 * s, y + 205 * s, 15 * s, 15 * s);
  rect(x + 75 * s, y + 165 * s, 15 * s, 40 * s);
  rect(x + 90 * s, y + 125 * s, 15 * s, 40 * s);
  rect(x + 105 * s, y + 110 * s, 40 * s, 15 * s);
  rect(x + 145 * s, y + 95 * s, 55 * s, 15 * s);
  rect(x + 200 * s, y + 110 * s, 40 * s, 15 * s);
  rect(x + 240 * s, y + 125 * s, 15 * s, 40 * s);
  rect(x + 255 * s, y + 165 * s, 15 * s, 15 * s);
  rect(x + 270 * s, y + 180 * s, 15 * s, 15 * s);
  rect(x + 285 * s, y + 165 * s, 15 * s, 15 * s);
  rect(x + 300 * s, y + 150 * s, 15 * s, 15 * s);
  rect(x + 315 * s, y + 135 * s, 45 * s, 15 * s);
  rect(x + 360 * s, y + 150 * s, 15 * s, 15 * s);
  rect(x + 375 * s, y + 165 * s, 15 * s, 15 * s);
  rect(x + 390 * s, y + 180 * s, 15 * s, 15 * s);

  rect(x + 405 * s, y + 195 * s, 15 * s, 45 * s);
  rect(x + 420 * s, y + 240 * s, 15 * s, 40 * s);
}

function benny(x, y, s) {
  noStroke();
  fill(254, 225, 53);
  rect(x, y + 200 * s, 110 * s, 70 * s);
  rect(x + 70 * s, y + 110 * s, 40 * s, 90 * s);
  rect(x + 85 * s, y + 270 * s, 25 * s, 40 * s);
  rect(x, y + 270 * s, 25 * s, 40 * s);
  rect(x + 55 * s, y + 35 * s, 110 * s, 90 * s);
  rect(x - 15 * s, y + 200 * s, 15 * s, 15 * s);
  rect(x + 165 * s, y + 70 * s, 15 * s, 15 * s);
  rect(x - 30 * s, y + 185 * s, 15 * s, 15 * s);
  rect(x + 40 * s, y + 35 * s, 15 * s, 15 * s);

  fill(204, 119, 34);
  rect(x + 165 * s, y + 85 * s, 40 * s, 35 * s);
  rect(x + 165 * s, y + 100 * s, 15 * s, 20 * s);

  fill(0, 0, 0);
  rect(x - 15 * s, y + 215 * s, 15 * s, 95 * s);
  rect(x - 15 * s, y + 309 * s, 40 * s, 15 * s);
  rect(x + 25 * s, y + 254 * s, 15 * s, 70 * s);
  rect(x + 25 * s, y + 265 * s, 60 * s, 15 * s);
  rect(x + 70 * s, y + 254 * s, 15 * s, 70 * s);
  rect(x + 70 * s, y + 309 * s, 40 * s, 15 * s);
  rect(x + 110 * s, y + 135 * s, 15 * s, 189 * s);
  rect(x, y + 200 * s, 70 * s, 15 * s);
  rect(x + 55 * s, y + 65 * s, 15 * s, 135 * s);
  rect(x + 55 * s, y + 35 * s, 110 * s, 15 * s);
  rect(x + 165 * s, y + 50 * s, 15 * s, 20 * s);
  rect(x + 100 * s, y + 120 * s, 80 * s, 15 * s);
  rect(x + 180 * s, y + 70 * s, 25 * s, 15 * s);
  rect(x + 180 * s, y + 105 * s, 25 * s, 15 * s);
  rect(x + 205 * s, y + 85 * s, 15 * s, 20 * s);
  rect(x - 30 * s, y + 200 * s, 15 * s, 15 * s);
  rect(x - 15 * s, y + 185 * s, 15 * s, 15 * s);
  rect(x - 45 * s, y + 185 * s, 15 * s, 15 * s);
  rect(x - 30 * s, y + 170 * s, 15 * s, 15 * s);
  rect(x - 60 * s, y + 140 * s, 15 * s, 45 * s);
  rect(x - 45 * s, y + 125 * s, 30 * s, 15 * s);
  rect(x - 15 * s, y + 140 * s, 15 * s, 30 * s);
  rect(x + 40 * s, y + 50 * s, 15 * s, 15 * s);
  rect(x + 25 * s, y + 35 * s, 15 * s, 15 * s);
  rect(x + 25 * s, y + 20 * s, 30 * s, 15 * s);
  rect(x + 100 * s, y + 20 * s, 15 * s, 15 * s);
  rect(x + 100 * s, y - 10 * s, 15 * s, 15 * s);
  rect(x + 115 * s, y - 10 * s, 15 * s, 30 * s);
  rect(x + 85 * s, y - 10 * s, 15 * s, 30 * s);
  rect(x + 70 * s, y + 105 * s, 15 * s, 15 * s);
  rect(x + 132 * s, y + 70 * s, 12 * s, 12 * s);
  rect(x + 120 * s, y + 82 * s, 24 * s, 12 * s);

  fill(204, 119, 34);
  rect(x - 45 * s, y + 170 * s, 15 * s, 15 * s);
  rect(x - 45 * s, y + 140 * s, 30 * s, 30 * s);
  rect(x + 100 * s, y + 5 * s, 15 * s, 15 * s);
  rect(x, y + 230 * s, 15 * s, 30 * s);
  rect(x + 25 * s, y + 215 * s, 30 * s, 15 * s);
  rect(x + 45 * s, y + 240 * s, 15 * s, 15 * s);
  rect(x + 90 * s, y + 210 * s, 20 * s, 30 * s);
  rect(x + 10 * s, y + 289 * s, 15 * s, 20 * s);
  rect(x + 85 * s, y + 265 * s, 15 * s, 30 * s);
  rect(x + 80 * s, y + 175 * s, 15 * s, 20 * s);
  rect(x + 70 * s, y + 130 * s, 15 * s, 30 * s);
  rect(x + 80 * s, y + 50 * s, 20 * s, 15 * s);

  fill(255, 255, 255);
  rect(x + 120 * s, y + 70 * s, 12 * s, 12 * s);
}

function mouse(xMouse, yMouse, sMouse) {
  // outline

  fill(0, 0, 0);
  noStroke();
  rect(xMouse - 50 * sMouse, yMouse, 20 * sMouse, 80 * sMouse);
  rect(xMouse - 30 * sMouse, yMouse - 20 * sMouse, 60 * sMouse, 20 * sMouse);
  rect(xMouse - 30 * sMouse, yMouse + 80 * sMouse, 60 * sMouse, 20 * sMouse);
  rect(xMouse + 30 * sMouse, yMouse, 20 * sMouse, 20 * sMouse);
  rect(xMouse + 30 * sMouse, yMouse + 60 * sMouse, 20 * sMouse, 20 * sMouse);
  rect(xMouse + 50 * sMouse, yMouse + 20 * sMouse, 20 * sMouse, 40 * sMouse);
  rect(xMouse + 70 * sMouse, yMouse + 40 * sMouse, 70 * sMouse, 20 * sMouse);
  rect(xMouse + 140 * sMouse, yMouse + 20 * sMouse, 20 * sMouse, 20 * sMouse);
  rect(xMouse + 160 * sMouse, yMouse, 20 * sMouse, 20 * sMouse);
  rect(xMouse + 180 * sMouse, yMouse - 20 * sMouse, 60 * sMouse, 20 * sMouse);
  rect(xMouse + 240 * sMouse, yMouse, 20 * sMouse, 20 * sMouse);
  rect(xMouse + 260 * sMouse, yMouse + 20 * sMouse, 20 * sMouse, 50 * sMouse);
  rect(xMouse + 240 * sMouse, yMouse + 70 * sMouse, 20 * sMouse, 20 * sMouse);
  rect(xMouse + 180 * sMouse, yMouse + 90 * sMouse, 60 * sMouse, 20 * sMouse);
  rect(xMouse + 160 * sMouse, yMouse + 110 * sMouse, 20 * sMouse, 100 * sMouse);
  rect(xMouse + 180 * sMouse, yMouse + 210 * sMouse, 20 * sMouse, 40 * sMouse);
  rect(xMouse + 200 * sMouse, yMouse + 250 * sMouse, 20 * sMouse, 60 * sMouse);
  // long one:
  rect(xMouse + 40 * sMouse, yMouse + 310 * sMouse, 160 * sMouse, 20 * sMouse);
  rect(xMouse + 140 * sMouse, yMouse + 270 * sMouse, 20 * sMouse, 40 * sMouse);
  //under R eye
  rect(xMouse - 10 * sMouse, yMouse + 120 * sMouse, 20 * sMouse, 20 * sMouse);
  rect(xMouse - 10 * sMouse, yMouse + 160 * sMouse, 130 * sMouse, 20 * sMouse);
  rect(xMouse + 40 * sMouse, yMouse + 180 * sMouse, 20 * sMouse, 130 * sMouse);

  // nose
  fill(255, 182, 193);
  rect(xMouse - 30 * sMouse, yMouse + 140 * sMouse, 20 * sMouse, 20 * sMouse);

  // hands and feet and tail
  fill(255, 182, 193);
  rect(xMouse + 20 * sMouse, yMouse + 230 * sMouse, 20 * sMouse, 40 * sMouse);
  rect(xMouse + 120 * sMouse, yMouse + 230 * sMouse, 20 * sMouse, 40 * sMouse);

  rect(xMouse + 120 * sMouse, yMouse + 310 * sMouse, 40 * sMouse, 20 * sMouse);
  rect(xMouse + 20 * sMouse, yMouse + 310 * sMouse, 40 * sMouse, 20 * sMouse);

  rect(xMouse + 220 * sMouse, yMouse + 310 * sMouse, 50 * sMouse, 20 * sMouse);
  rect(xMouse + 270 * sMouse, yMouse + 260 * sMouse, 20 * sMouse, 50 * sMouse);
  rect(xMouse + 290 * sMouse, yMouse + 210 * sMouse, 20 * sMouse, 50 * sMouse);
  rect(xMouse + 290 * sMouse, yMouse + 210 * sMouse, 20 * sMouse, 50 * sMouse);
  rect(xMouse + 310 * sMouse, yMouse + 180 * sMouse, 20 * sMouse, 30 * sMouse);
  rect(xMouse + 330 * sMouse, yMouse + 160 * sMouse, 20 * sMouse, 20 * sMouse);

  // left ear fill
  fill(181, 181, 181);
  rect(xMouse - 30 * sMouse, yMouse, 20 * sMouse, 80 * sMouse);
  rect(xMouse - 30 * sMouse, yMouse, 60 * sMouse, 20 * sMouse);
  rect(xMouse - 10 * sMouse, yMouse + 60 * sMouse, 20 * sMouse, 20 * sMouse);
  rect(xMouse + 30 * sMouse, yMouse + 20 * sMouse, 20 * sMouse, 40 * sMouse);

  //right ear fill
  rect(xMouse + 240 * sMouse, yMouse + 20 * sMouse, 20 * sMouse, 50 * sMouse);
  rect(xMouse + 160 * sMouse, yMouse + 20 * sMouse, 20 * sMouse, 20 * sMouse);
  rect(xMouse + 140 * sMouse, yMouse + 40 * sMouse, 20 * sMouse, 20 * sMouse);
  rect(xMouse + 180 * sMouse, yMouse, 60 * sMouse, 20 * sMouse);
  rect(xMouse + 180 * sMouse, yMouse + 70 * sMouse, 60 * sMouse, 20 * sMouse);

  // head fill
  rect(xMouse + 50 * sMouse, yMouse + 60 * sMouse, 130 * sMouse, 20 * sMouse);
  rect(xMouse + 30 * sMouse, yMouse + 80 * sMouse, 150 * sMouse, 20 * sMouse);
  rect(xMouse + 30 * sMouse, yMouse + 100 * sMouse, 50 * sMouse, 20 * sMouse);
  rect(xMouse + 100 * sMouse, yMouse + 100 * sMouse, 60 * sMouse, 20 * sMouse);
  rect(xMouse + 160 * sMouse, yMouse + 100 * sMouse, 20 * sMouse, 10 * sMouse);
  rect(xMouse + 10 * sMouse, yMouse + 120 * sMouse, 150 * sMouse, 20 * sMouse);
  rect(xMouse - 10 * sMouse, yMouse + 140 * sMouse, 170 * sMouse, 20 * sMouse);
  rect(xMouse + 120 * sMouse, yMouse + 160 * sMouse, 40 * sMouse, 20 * sMouse);
  rect(xMouse + 100 * sMouse, yMouse + 180 * sMouse, 60 * sMouse, 20 * sMouse);
  rect(xMouse + 100 * sMouse, yMouse + 200 * sMouse, 60 * sMouse, 30 * sMouse);
  rect(xMouse + 160 * sMouse, yMouse + 210 * sMouse, 20 * sMouse, 100 * sMouse);
  rect(xMouse + 140 * sMouse, yMouse + 230 * sMouse, 20 * sMouse, 40 * sMouse);
  rect(xMouse + 180 * sMouse, yMouse + 250 * sMouse, 20 * sMouse, 60 * sMouse);
  rect(xMouse + 120 * sMouse, yMouse + 270 * sMouse, 20 * sMouse, 40 * sMouse);

  // light fill
  fill(221, 221, 221);
  rect(xMouse - 10 * sMouse, yMouse + 20 * sMouse, 40 * sMouse, 40 * sMouse);
  rect(xMouse + 10 * sMouse, yMouse + 60 * sMouse, 20 * sMouse, 20 * sMouse);

  rect(xMouse + 60 * sMouse, yMouse + 230 * sMouse, 60 * sMouse, 80 * sMouse);
  rect(xMouse + 60 * sMouse, yMouse + 180 * sMouse, 40 * sMouse, 50 * sMouse);

  rect(xMouse + 180 * sMouse, yMouse + 20 * sMouse, 60 * sMouse, 50 * sMouse);
  rect(xMouse + 160 * sMouse, yMouse + 40 * sMouse, 20 * sMouse, 20 * sMouse);

  //eyes:
  fill(0, 0, 0);
  rect(xMouse + 10 * sMouse, yMouse + 100 * sMouse, 20 * sMouse, 20 * sMouse);
  rect(xMouse + 80 * sMouse, yMouse + 100 * sMouse, 20 * sMouse, 20 * sMouse);
  rect(xMouse + 43 * sMouse, yMouse + 100 * sMouse, 20 * sMouse, 20 * sMouse);
}

function platform(x, y, s) {
  noStroke();
  fill(155, 118, 83);
  rect(x, y + 95 * s, 120, 30, 10);
  fill(65, 180, 92);
  rect(x, y + 90 * s, 120, 15);
  fill(65, 140, 0);
  rect(x, y + 90 * s, 15, 15);
  rect(x + 30 * s, y + 90 * s, 15, 15);
  rect(x + 60 * s, y + 90 * s, 15, 15);
  rect(x + 90, y + 90 * s, 15, 15);
}

function startScreen() {
  background(135, 206, 235);
  fill(30, 63, 102);
  rect(50, 110, 300, 270);
  fill(135, 206, 235);
  textSize(16);
  text("Press space __ to start game.", 90, 180);
  text("Use arrowkeys to make Benny go ", 70, 220);
  text(" left and right", 160, 255);
  text("Jump as high as you can", 120, 290);
  text("Have a nice trip!", 150, 325);

  if (keyIsDown(32)) {
    x = 100;
    velocity = 1;
    bennyY = 100;
    state = "game";
  }
}

function gameScreen() {
  background(135, 206, 235);
  clouds(190, 70, 0.3);
  clouds(40, 180, 0.3);
  clouds(10, 0, 0.3);
  benny(bennyX, bennyY, 0.4);
  platform(100, 300, 1);
  mouse(280, 520, 0.2);

  if (isGameActive) {
    bennyY = bennyY + velocity;
    velocity = velocity + acceleration;
    bennyX = bennyX + speed;
  }

  if (keyIsDown(38)) {
    isGameActive = true;
  }

  if (bennyY > 500) {
    isGameActive = false;
    state = "lose";
  }

  if (keyIsDown(38)) {
    velocity = velocity - 0.5;
  } else if (keyIsDown(39)) {
    speed = 5;
  } else if (keyIsDown(37)) {
    speed = -5;
  } else {
    speed = 0;
  }
}

function gameOverScreen() {
  background(135, 206, 235);
  fill(30, 63, 102);
  rect(50, 110, 300, 270);
  fill(135, 206, 235);
  textSize(36);
  text("OH NO!!!", 130, 240);
  textSize(20);
  text("Press enter to try again", 100, 290);
  if (keyIsDown(13)) {
    state = "start";
  }
}

let state = "game";

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lose") {
    gameOverScreen();
  }

  /*   clouds(120, 0, 0.4);
clouds(420, 100, 0.3);
clouds(40, 180, 0.3);
mouse(400, 400, 0.2);
platform(100, 100, s); */
}
