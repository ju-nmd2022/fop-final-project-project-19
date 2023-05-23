let velocity = 1;
let acceleration = 0.2;
let speed = 0;
let isGameActive = false;
let score = 0;

let bennyY = 100;
let bennyX = 100;

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
    if (this.x > 550) this.x = 150;
    if (this.x < 150) this.x = 550;
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
  }

  jump() {
    this.velocity -= this.jumpForce;
  }
}

let benny = new Benny(160, 160);

let gap;

let platforms = []; // create the empty platform array
function setup() {
  createCanvas(700, 500);

  // create the platforms
  let platformCount = 7;
  gap = height / platformCount;
  for (let i = 1; i < platformCount; i++) {
    platforms.push(new Platform(random(150, 480), 470 - i * gap));
  }
}

function startScreen() {
  background(135, 206, 235);
  fill(30, 63, 102);
  rect(150, 25, 400, 450);
  fill(135, 206, 235);
  textSize(16);
  text("Press space __ to start game.", 250, 180);
  text("Use arrowkeys to make Benny go ", 235, 220);
  text(" left and right", 310, 255);
  text("Jump as high as you can", 260, 290);
  text("Have a nice trip!", 300, 325);
  clouds(550, 70, 0.3);
  clouds(40, 390, 0.3);
  clouds(10, 0, 0.3);

  if (keyIsDown(32)) {
    bennyX = 100;
    velocity = 1;
    benny.y = 100;
    state = "game";
  }
}

function gameScreen() {
  /*   stroke(30, 63, 102);
  strokeWeight(12);
  background(137, 206, 235);
  fill(137, 206, 235);
  rect(150, 25, 400, 450); */
  background(137, 206, 235);
  fill(30, 63, 102);
  rect(140, 0, 15, height);
  rect(550, 0, 15, height);
  clouds(580, 70, 0.3);
  clouds(10, 390, 0.3);
  clouds(10, 0, 0.3);

  translate(0, width / 2 - benny.y);

  for (let platform of platforms) {
    platform.draw();
  }

  benny.draw();
  benny.update(platforms);

  if (benny.y < platforms[platforms.length - 1].y + 200) {
    platforms.push(
      new Platform(random(150, 480), platforms[platforms.length - 1].y - gap)
    );
  }

  if (platforms[0].y > benny.y + 400) {
    platforms.splice(0, 1);
    score++;
  }

  if (keyIsDown(32)) {
    benny.jump();
  }

  if (benny.y > 500) {
    isGameActive = false;
    state = "lose";
  }

  //   if (bennyY > 500) {
  //     isGameActive = false;
  //     state = "lose";
  //   }

  //   if (keyIsDown(38)) {
  //     velocity = velocity - 0.5;
  //   } else if (keyIsDown(39)) {
  //     speed = 5;
  //   } else if (keyIsDown(37)) {
  //     speed = -5;
  //   } else {
  //     speed = 0;
  //   }
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
