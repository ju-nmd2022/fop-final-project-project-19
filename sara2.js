let velocity = 1;
let acceleration = 0.2;
let speed = 0;
let isGameActive = false;
let score;
bennyX = 0;
bennyY = 0;

let platformX = 0;
let platformY = 200;
let platformSpeed = 1;
let extraJumpVelocity = -10;

//text for lose screen
function gameOver(x, y, s) {
  //G
  noStroke();
  fill(255, 255, 255);
  rect(x, y, 80 * s, 120 * s);

  fill(30, 63, 102);
  rect(x, y, 80 * s, 20 * s);
  rect(x, y + 20 * s, 20 * s, 20 * s);
  rect(x + 40 * s, y + 40 * s, 40 * s, 20 * s);
  rect(x + 20 * s, y + 40 * s, 20, 40 * s);
  rect(x + 20 * s, y + 80 * s, 40 * s, 20 * s);
  rect(x, y, 80 * s, 20 * s);

  //A
  fill(255, 255, 255);
  rect(x + 100 * s, y, 80 * s, 120 * s);

  fill(30, 63, 102);
  rect(x + 100 * s, y, 80 * s, 20 * s);
  rect(x + 100 * s, y + 20 * s, 20 * s, 20 * s);
  rect(x + 120 * s, y + 40 * s, 40 * s, 20 * s);
  rect(x + 120 * s, y + 80 * s, 40 * s, 40 * s);

  //M
  fill(255, 255, 255);
  rect(x + 200 * s, y + 20 * s, 20 * s, 100 * s);
  rect(x + 220 * s, y + 40 * s, 20 * s, 20 * s);
  rect(x + 240 * s, y + 60 * s, 20 * s, 20 * s);
  rect(x + 260 * s, y + 40 * s, 20 * s, 20 * s);
  rect(x + 280 * s, y + 20 * s, 20 * s, 100 * s);

  //E
  fill(255, 255, 255);
  rect(x + 320 * s, y, 80 * s, 120 * s);

  fill(30, 63, 102);
  rect(x + 320 * s, y, 80 * s, 20 * s);
  rect(x + 340 * s, y + 40 * s, 60 * s, 20 * s);
  rect(x + 340 * s, y + 80 * s, 60 * s, 20 * s);
  rect(x + 380 * s, y + 60 * s, 20 * s, 20 * s);

  //O
  fill(255, 255, 255);
  rect(x, y + 140 * s, 80 * s, 120 * s);

  fill(30, 63, 102);
  rect(x, y + 140 * s, 80 * s, 20 * s);
  rect(x, y + 240 * s, 20 * s, 20 * s);
  rect(x + 60 * s, y + 160 * s, 20 * s, 20 * s);
  rect(x + 20 * s, y + 180 * s, 40 * s, 60 * s);

  //V
  fill(255, 255, 255);
  rect(x + 100 * s, y + 160 * s, 20 * s, 60 * s);
  rect(x + 120 * s, y + 200 * s, 20 * s, 20 * s);
  rect(x + 120 * s, y + 220 * s, 20 * s, 20 * s);
  rect(x + 140 * s, y + 220 * s, 20 * s, 20 * s);
  rect(x + 140 * s, y + 240 * s, 20 * s, 20 * s);
  rect(x + 160 * s, y + 220 * s, 20 * s, 20 * s);
  rect(x + 160 * s, y + 200 * s, 20 * s, 20 * s);
  rect(x + 180 * s, y + 160 * s, 20 * s, 60 * s);

  //E
  fill(255, 255, 255);
  rect(x + 220 * s, y + 140 * s, 80 * s, 120 * s);

  fill(30, 63, 102);
  rect(x + 220 * s, y + 140 * s, 80 * s, 20 * s);
  rect(x + 240 * s, y + 180 * s, 60 * s, 20 * s);
  rect(x + 240 * s, y + 220 * s, 60 * s, 20 * s);
  rect(x + 280 * s, y + 200 * s, 20 * s, 20 * s);

  //R
  fill(255, 255, 255);
  rect(x + 320 * s, y + 140 * s, 80 * s, 120 * s);

  fill(30, 63, 102);
  rect(x + 320 * s, y + 140 * s, 80 * s, 20 * s);
  rect(x + 380 * s, y + 160 * s, 20 * s, 20 * s);
  rect(x + 340 * s, y + 180 * s, 40 * s, 20 * s);
  rect(x + 380 * s, y + 220 * s, 20 * s, 20 * s);
  rect(x + 340 * s, y + 240 * s, 40 * s, 20 * s);
  rect(x + 340 * s, y + 220 * s, 20 * s, 20 * s);
}

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

function penny(x, y, s) {
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

class Platform {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.s = 0.6;
    this.height = 15;
    this.width = 120;
  }

  draw() {
    fill(100, 255, 100);
    noStroke();
    fill(155, 118, 83);
    rect(
      this.x,
      this.y + 96 * this.s,
      this.width * this.s,
      this.height * 2 * this.s,
      10 * this.s
    );
    fill(65, 180, 92);
    rect(
      this.x,
      this.y + 90 * this.s,
      this.width * this.s,
      this.height * this.s
    );
    fill(65, 140, 0);
    rect(
      this.x,
      this.y + 90 * this.s,
      (this.width / 8) * this.s,
      this.height * this.s
    );
    rect(
      this.x + 30 * this.s,
      this.y + 90 * this.s,
      (this.width / 8) * this.s,
      this.height * this.s
    );
    rect(
      this.x + 60 * this.s,
      this.y + 90 * this.s,
      (this.width / 8) * this.s,
      this.height * this.s
    );
    rect(
      this.x + 90 * this.s,
      this.y + 90 * this.s,
      (this.width / 8) * this.s,
      this.height * this.s
    );
  }
}

class PlatformBlack {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.s = 0.6;
    this.height = 15;
    this.width = 120;
  }

  update() {
    this.x += this.speed; // Update platform's x position based on its speed
    if (this.x < 0 || this.x > width) {
      this.speed *= -1;
    }
  }

  draw() {
    fill(0, 0, 0);
    noStroke();
    fill(155, 118, 83);
    rect(
      this.x,
      this.y + 96 * this.s,
      this.width * this.s,
      this.height * 2 * this.s,
      10 * this.s
    );
    fill(0, 0, 0);
    rect(
      this.x,
      this.y + 90 * this.s,
      this.width * this.s,
      this.height * this.s
    );
    fill(0, 0, 0);
    rect(
      this.x,
      this.y + 90 * this.s,
      (this.width / 8) * this.s,
      this.height * this.s
    );
    rect(
      this.x + 30 * this.s,
      this.y + 90 * this.s,
      (this.width / 8) * this.s,
      this.height * this.s
    );
    rect(
      this.x + 60 * this.s,
      this.y + 90 * this.s,
      (this.width / 8) * this.s,
      this.height * this.s
    );
    rect(
      this.x + 90 * this.s,
      this.y + 90 * this.s,
      (this.width / 8) * this.s,
      this.height * this.s
    );
  }
}

class Benny {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.s = 0.3;

    this.width = 40;
    this.height = 60;

    this.velocity = 0.3;
    this.gravity = 0.4;
    this.jumpForce = 15;
  }

  draw() {
    noStroke();
    fill(254, 225, 53);
    rect(this.x, this.y + 200 * this.s, 110 * this.s, 70 * this.s);
    rect(this.x + 70 * this.s, this.y + 110 * this.s, 40 * this.s, 90 * this.s);
    rect(this.x + 85 * this.s, this.y + 270 * this.s, 25 * this.s, 40 * this.s);
    rect(this.x, this.y + 270 * this.s, 25 * this.s, 40 * this.s);
    rect(this.x + 55 * this.s, this.y + 35 * this.s, 110 * this.s, 90 * this.s);
    rect(this.x - 15 * this.s, this.y + 200 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x + 165 * this.s, this.y + 70 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x - 30 * this.s, this.y + 185 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x + 40 * this.s, this.y + 35 * this.s, 15 * this.s, 15 * this.s);

    fill(204, 119, 34);
    rect(this.x + 165 * this.s, this.y + 85 * this.s, 40 * this.s, 35 * this.s);
    rect(
      this.x + 165 * this.s,
      this.y + 100 * this.s,
      15 * this.s,
      20 * this.s
    );

    fill(0, 0, 0);
    rect(this.x - 15 * this.s, this.y + 215 * this.s, 15 * this.s, 95 * this.s);
    rect(this.x - 15 * this.s, this.y + 309 * this.s, 40 * this.s, 15 * this.s);
    rect(this.x + 25 * this.s, this.y + 254 * this.s, 15 * this.s, 70 * this.s);
    rect(this.x + 25 * this.s, this.y + 265 * this.s, 60 * this.s, 15 * this.s);
    rect(this.x + 70 * this.s, this.y + 254 * this.s, 15 * this.s, 70 * this.s);
    rect(this.x + 70 * this.s, this.y + 309 * this.s, 40 * this.s, 15 * this.s);
    rect(
      this.x + 110 * this.s,
      this.y + 135 * this.s,
      15 * this.s,
      189 * this.s
    );
    rect(this.x, this.y + 200 * this.s, 70 * this.s, 15 * this.s);
    rect(this.x + 55 * this.s, this.y + 65 * this.s, 15 * this.s, 135 * this.s);
    rect(this.x + 55 * this.s, this.y + 35 * this.s, 110 * this.s, 15 * this.s);
    rect(this.x + 165 * this.s, this.y + 50 * this.s, 15 * this.s, 20 * this.s);
    rect(
      this.x + 100 * this.s,
      this.y + 120 * this.s,
      80 * this.s,
      15 * this.s
    );
    rect(this.x + 180 * this.s, this.y + 70 * this.s, 25 * this.s, 15 * this.s);
    rect(
      this.x + 180 * this.s,
      this.y + 105 * this.s,
      25 * this.s,
      15 * this.s
    );
    rect(this.x + 205 * this.s, this.y + 85 * this.s, 15 * this.s, 20 * this.s);
    rect(this.x - 30 * this.s, this.y + 200 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x - 15 * this.s, this.y + 185 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x - 45 * this.s, this.y + 185 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x - 30 * this.s, this.y + 170 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x - 60 * this.s, this.y + 140 * this.s, 15 * this.s, 45 * this.s);
    rect(this.x - 45 * this.s, this.y + 125 * this.s, 30 * this.s, 15 * this.s);
    rect(this.x - 15 * this.s, this.y + 140 * this.s, 15 * this.s, 30 * this.s);
    rect(this.x + 40 * this.s, this.y + 50 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x + 25 * this.s, this.y + 35 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x + 25 * this.s, this.y + 20 * this.s, 30 * this.s, 15 * this.s);
    rect(this.x + 100 * this.s, this.y + 20 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x + 100 * this.s, this.y - 10 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x + 115 * this.s, this.y - 10 * this.s, 15 * this.s, 30 * this.s);
    rect(this.x + 85 * this.s, this.y - 10 * this.s, 15 * this.s, 30 * this.s);
    rect(this.x + 70 * this.s, this.y + 105 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x + 132 * this.s, this.y + 70 * this.s, 12 * this.s, 12 * this.s);
    rect(this.x + 120 * this.s, this.y + 82 * this.s, 24 * this.s, 12 * this.s);

    fill(204, 119, 34);
    rect(this.x - 45 * this.s, this.y + 170 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x - 45 * this.s, this.y + 140 * this.s, 30 * this.s, 30 * this.s);
    rect(this.x + 100 * this.s, this.y + 5 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x, this.y + 230 * this.s, 15 * this.s, 30 * this.s);
    rect(this.x + 25 * this.s, this.y + 215 * this.s, 30 * this.s, 15 * this.s);
    rect(this.x + 45 * this.s, this.y + 240 * this.s, 15 * this.s, 15 * this.s);
    rect(this.x + 90 * this.s, this.y + 210 * this.s, 20 * this.s, 30 * this.s);
    rect(this.x + 10 * this.s, this.y + 289 * this.s, 15 * this.s, 20 * this.s);
    rect(this.x + 85 * this.s, this.y + 265 * this.s, 15 * this.s, 30 * this.s);
    rect(this.x + 80 * this.s, this.y + 175 * this.s, 15 * this.s, 20 * this.s);
    rect(this.x + 70 * this.s, this.y + 130 * this.s, 15 * this.s, 30 * this.s);
    rect(this.x + 80 * this.s, this.y + 50 * this.s, 20 * this.s, 15 * this.s);

    fill(255, 255, 255);
    rect(this.x + 120 * this.s, this.y + 70 * this.s, 12 * this.s, 12 * this.s);
  }
  update(platforms) {
    if (this.x + this.width < 0) this.x = 550; // add this screen wrapping
    if (this.x > 520) this.x = 150;
    if (this.x < 150) this.x = 520;
    if (this.velocity < -9) this.velocity = -9;

    this.velocity += this.gravity;
    this.y += this.velocity;

    if (keyIsDown(37)) {
      this.x -= 8;
    }
    if (keyIsDown(39)) {
      this.x += 8;
    }

    for (let platform of platforms) {
      if (
        this.y + this.height >= platform.y &&
        this.y + this.height <= platform.y + platform.height
      ) {
        let minX = platform.x - this.width;
        let maxX = platform.x + platform.width;

        if (this.x >= minX && this.x <= maxX) {
          this.jump();
        }
      }
    }

    for (let platformBlack of platformsBlack) {
      if (
        this.y + this.height >= platformBlack.y &&
        this.y + this.height <= platformBlack.y + platformBlack.height
      ) {
        let minX = platformBlack.x - this.width;
        let maxX = platformBlack.x + platformBlack.width;

        if (this.x >= minX && this.x <= maxX) {
          this.jump();
          platformsBlack.splice(0, 1);
        }
      }
    }
  }

  jump() {
    this.velocity -= this.jumpForce;
  }
}

let benny = new Benny(0, 0);

let gap;
let gapBlack;
let platforms = [];
let platformsBlack = [];

function setup() {
  createCanvas(700, 500);
  platforms = [];
  platformsBlack = [];
  score = 0;

  // create the platforms
  let platformCount = 6;
  gap = height / platformCount;
  for (let i = 1; i < platformCount; i++) {
    platforms.push(
      new Platform(random(width / 1.5, width / 2), height - i * gap)
    );
  }

  //broken platforms
  let platformCountBlack = 6;
  gapBlack = height / platformCountBlack;
  for (let i = 1; i < platformCountBlack; i++) {
    platformsBlack.push(
      new PlatformBlack(random(width / 1.5, width / 2), height - i * gapBlack)
    );
  }
}

function startScreen() {
  background(135, 206, 235);
  fill(30, 63, 102);
  rect(150, 25, 400, 450);
  fill(135, 206, 235);
  textSize(43);

  text("JUMPING BENNY", 175, 130);
  textSize(16);
  text("Press space __ to start game.", 250, 180);
  text("Use arrowkeys to make Benny go ", 235, 220);
  text(" left and right", 310, 255);
  text("Jump as high as you can", 260, 290);
  text("Have a nice trip!", 300, 325);

  clouds(535, 70, 0.3);
  clouds(49, 393, 0.43);
  clouds(10, 0, 0.3);
  clouds(620, 230, 0.27);
  clouds(10, 0, 0.3);
  clouds(450, 340, 0.4);
  clouds(-65, 145, 0.4);

  penny(100, 317, 0.41);
  mouse(95, 10, 0.11);
  mouse(569, 363, 0.11);
  mouse(178, 419, 0.12);
  mouse(647, 243, 0.06);

  if (keyIsDown(32)) {
    benny = new Benny(0, 0);
    setup();
    loop();
    score = 0;
    state = "game";
  }
}

function gameScreen() {
  background(137, 206, 235);
  fill(30, 63, 102);
  rect(140, 0, 15, height);
  rect(550, 0, 15, height);
  clouds(580, 70, 0.3);
  clouds(10, 390, 0.3);
  clouds(10, 0, 0.3);

  push();
  fill(255, 255, 255);
  textSize(30);
  textAlign(CENTER);
  text(score, 350, 60);
  pop();

  if (benny.velocity > 20) {
    isGameActive = false;
    state = "lose";
  } else {
    translate(0, width / 3 - benny.y); // Benny följer med upp
  }

  for (let platform of platforms) {
    platform.draw();
  }

  for (let PlatformBlack of platformsBlack) {
    PlatformBlack.draw();
  }

  benny.draw();
  benny.update(platforms);

  //new regular platforms
  if (
    platforms.length > 0 &&
    benny.y < platforms[platforms.length - 1].y + 600
  ) {
    platforms.push(
      new Platform(random(150, 480), platforms[platforms.length - 1].y - gap)
    );
  }

  //new black platforms
  if (
    platformsBlack.length > 0 &&
    benny.y < platformsBlack[platformsBlack.length - 1].y + 600
  ) {
    platformsBlack.push(
      new PlatformBlack(
        random(150, 480),
        platformsBlack[platformsBlack.length - 1].y - gapBlack
      )
    );
  }

  if (platforms.length > 0 && platforms[0].y > benny.y + 400) {
    platforms.splice(0, 1);
    score++;
  }

  if (score === 10) {
    platforms = [];
  }
}

function gameOverScreen() {
  background(135, 206, 235);
  fill(30, 63, 102);
  rect(150, 25, 400, 450);
  fill(135, 206, 235);
  penny(10, 280, 1.5);
  gameOver(210, 70, 0.7);

  fill(255, 255, 255);
  textSize(20);
  text(`YOU SCORED ${score}`, 270, 290);
  textSize(18);
  text("PRESS ENTER TO TRY AGAIN", 220, 320);
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
}
