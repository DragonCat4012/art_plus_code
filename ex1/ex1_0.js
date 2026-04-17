/*
Build a system for regularly positioned lines (horizontal, vertical, diagonal, fixed angle, crossing, etc.).
Find 3 variables that change the composition,
export your 3 most interesting results, note what parameters you can manipulate and give them a matching title.
Record a ~10 sec screencapture showing them in action.
*/

Canvas.setpenopacity(1);

const gridRot = 45; // min=45 max=90 step=5  Shape Placing
const stepSize = 2; // min=1 max=8 step=1  Shape Placing
const gridLenght = 400;
const lineLength = 3;

const chaosLevel = 0; // min=0, max=2, step=1, (Zero, Some, All)
const chaosValues = [45, 30, 25, 45, 5, 60, 88]; // ordered chaos Angle values

const t = new Turtle();

// draw two angled lines to create a slanted grid
// both do the same just different startpoints and left/right switched, could be moved into one singular func
gridOne();
gridTwo();

function gridTwo() {
  t.penup();
  t.goto(-300, 100);
  t.setheading(0);
  t.pendown();
  t.forward(20);

  for (let i = 0; i < 30; i++) {
    t.left(gridRot);

    for (let j = 0; j < gridLenght / stepSize; j++) {
      t.penup();
      t.forward(stepSize);
      t.pendown();
      drawGridLines(t.pos()[0], t.pos()[1]);
    }

    t.penup();
    t.backward(gridLenght);
    t.right(gridRot);
    t.forward(20);
    t.pendown();
  }
}

function gridOne() {
  t.penup();

  t.goto(-350, -150);
  t.setheading(0);
  t.pendown();
  for (let i = 0; i < 30; i++) {
    t.right(gridRot);

    for (let j = 0; j < gridLenght / stepSize; j++) {
      t.penup();
      t.forward(stepSize);
      t.pendown();
      drawGridLines(t.pos()[0], t.pos()[1]);
    }

    t.penup();
    t.backward(gridLenght);
    t.left(gridRot);
    t.forward(20);
    t.pendown();
  }
}

// return the placed lines rotation based on selected chaos level
function getChaos() {
  if (chaosLevel > 1) {
    return Math.floor(Math.random() * 361);
  } else if (chaosLevel > 0) {
    var random_boolean = Math.random() < 0.5;

    if (Math.random() < 0.5) {
      return chaosValues[Math.floor(Math.random() * chaosValues.length)];
    }
    return chaosValues[chaosLevel];
  }
  return chaosValues[chaosLevel];
}

// Draw the lines on the grid
function drawGridLines(x, y) {
  const angle = getChaos();
  const prevHeading = t.heading();

  t.right(angle);
  t.backward(5);
  t.forward(10);
  t.penup();
  t.backward(5);
  t.setheading(prevHeading);
  t.pendown();
}

// The walk function will be called until it returns false.
function walk(i) {
  return i < 20;
}
