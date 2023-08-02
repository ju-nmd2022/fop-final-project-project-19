let velocity = 1;
let acceleration = 0.2;
let speed = 0;
let isGameActive = false;
let score;
bennyX = 0;
bennyY = 0;

class Platform {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.s = 0.4;
    this.height = 15;
    this.width = 150;
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

class MovingPlatform {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.s = 0.4;
    this.height = 15;
    this.width = 120;
  }

  draw() {
    fill(255, 0, 0);
    noStroke();
    fill(155, 118, 83);
    rect(
      this.x,
      this.y + 96 * this.s,
      this.width * this.s,
      this.height * 2 * this.s,
      10 * this.s
    );
    fill(255, 0, 0);
    rect(
      this.x,
      this.y + 90 * this.s,
      this.width * this.s,
      this.height * this.s
    );
    fill(255, 0, 0);
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
  update() {
    // Update the platform's position based on its speed
    this.x += this.speed;

    // Check if the platform has moved off the screen, and reset its position
    /*  if (this.x + this.width < 0) {
      this.resetPosition();
    } */
    if (this.x < 150 || this.x > 500) {
      this.speed *= -1;
    }
  }
  /*  resetPosition() {
    // Reset the platform's position when it moves off the screen
    // You can modify this logic based on your game's requirements
    this.x = width; // Set the platform's x position to the right edge of the screen
    this.y = random(height); // Set the platform's y position randomly
  } */
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
    this.extraJumpForce = 180;
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

    for (let movingPlatform of movingPlatforms) {
      if (
        this.y + this.height >= movingPlatform.y &&
        this.y + this.height <= movingPlatform.y + movingPlatform.height
      ) {
        let minX = movingPlatform.x - this.width;
        let maxX = movingPlatform.x + movingPlatform.width;

        if (this.x >= minX && this.x <= maxX) {
          this.jump(5, 5);
        }
      }
    }
  }

  jump() {
    this.velocity -= this.jumpForce;
  }

  extraJump() {
    this.velocity -= this.jumpForce * 2;
  }
}

class Ball {
  constructor(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
  }

  draw() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.radius * 2);
  }

  update() {
    this.y += this.speed;
    if (this.y - this.radius > height) {
      this.y = -this.radius;
      this.x = random(150, 480);
    }
  }

  checkCollision(benny) {
    const distance = dist(this.x, this.y, benny.x, benny.y + benny.height);
    return distance < this.radius + benny.width / 2;
  }
}

let benny = new Benny(0, 0);

let gap;
let movingGap;
let platforms = [];
let movingPlatforms = [];
let balls = [];
const ballSpawnRate = 100;

function setup() {
  createCanvas(700, 500);
  platforms = [];
  movingPlatforms = [];
  balls = [];
  score = 0;
  movingPlatform = new MovingPlatform((width, random(height), -2));

  // create the platforms
  let platformCount = 5;
  gap = height / platformCount;
  for (let i = 1; i < platformCount; i++) {
    platforms.push(
      new Platform(random(width / 1.5, width / 2), height - i * gap)
    );
  }

  //moving platforms
  let movingPlatformCount = 2;
  movingGap = height / movingPlatformCount;
  for (let i = 1; i < movingPlatformCount; i++) {
    movingPlatforms.push(
      new MovingPlatform(random(width / 1.5, width / 2), height - i * movingGap)
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
    translate(0, width / 3 - benny.y);
  }

  for (let platform of platforms) {
    platform.draw();
  }

  for (let movingPlatform of movingPlatforms) {
    movingPlatform.update();
    movingPlatform.draw();
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

  // new moving platforms
  if (
    movingPlatforms.length > 0 &&
    benny.y < movingPlatforms[movingPlatforms.length - 1].y + 600
  ) {
    movingPlatforms.push(
      new MovingPlatform(
        random(150, 480),
        movingPlatforms[movingPlatforms.length - 1].y - movingGap
      )
    );
  }

  if (platforms.length > 0 && platforms[0].y > benny.y + 600) {
    platforms.splice(0, 1);
    score++;
  }

  // Draw and update balls
  for (let i = balls.length - 1; i >= 0; i--) {
    const ball = balls[i];
    ball.draw();
    ball.update();

    if (ball.y > height) {
      balls.splice(i, 1);
    } else if (ball.checkCollision(benny)) {
      isGameActive = false;
      state = "lose";
    }
  }
  // Create new balls periodically
  if (frameCount % ballSpawnRate === 0) {
    const ballX = random(150, 480);
    const ballY = random(-10000, -50);
    const ballRadius = 15;
    const ballSpeed = random(2, 5);
    balls.push(new Ball(ballX, ballY, ballRadius, ballSpeed));
  }
}

function gameOverScreen() {
  background(135, 206, 235);
  fill(30, 63, 102);
  rect(150, 25, 400, 450);
  fill(135, 206, 235);

  fill(255, 255, 255);
  textSize(19);
  text("PRESS ENTER TO TRY AGAIN", 215, 290);

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
