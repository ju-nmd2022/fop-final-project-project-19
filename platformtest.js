let velocity = 1;
let acceleration = 0.2;
let speed = 0;
let isGameActive = false;

let x = 100;
let y = 100;
let s = 1;
let bennyY = 100;
let bennyX = 100;

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

class Platform {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.height = 15;
    this.width = 120;
  }

  draw() {
    fill(100, 255, 100);
    // rect(this.x, this.y, this.width, this.height);
    noStroke();
    fill(155, 118, 83);
    rect(this.x, this.y + 96, this.width, this.height * 2, 10);
    fill(65, 180, 92);
    rect(this.x, this.y + 90, this.width, this.height);
    fill(65, 140, 0);
    rect(this.x, this.y + 90, this.width / 8, this.height);
    rect(this.x + 30, this.y + 90, this.width / 8, this.height);
    rect(this.x + 60, this.y + 90, this.width / 8, this.height);
    rect(this.x + 90, this.y + 90, this.width / 8, this.height);
  }
}

let gap;
let platforms = []; // create the empty platform array
function setup() {
  createCanvas(700, 600);

  // create the platforms
  let platformCount = 6;
  gap = height / platformCount;
  for (let i = 1; i < platformCount; i++) {
    platforms.push(new Platform(random(width), height - i * gap));
  }
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
  benny(bennyX, bennyY, 0.4);

  for (let platform of platforms) {
    platform.draw();
  }
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
}
