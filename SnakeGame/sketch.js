//Caleb Burridge
//Refrence Coding Train
//url https://www.youtube.com/watch?v=AaGK-fj-BAM
var button;

var score = 0;
var s;
var scl = 15;

var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
  score = 0;
  isdead = false;

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  //deathScreen(isdead);


  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  scoreBoard(score);
}

function scoreBoard(x){
  fill(255);
  text(x, 10, 20);
}

// function deathScreen(dead){
//   if (dead){
//     createCanvas(600, 600);
//     background(51);
//     fill(255, 0, 100);
//     text("You Loose!", 200, 200);
//     fill(255, 0, 100);
//     text("Your Score Was " + Score, 300, 200);
//     button = createButton("Retry");
//     button.position(400, 200);
//     button.mousePressed(setup);
//   }
// }


function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
