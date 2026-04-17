/*
Write functions for two basic shapes and place them in a grid.
Vary position, rotation, scale, or the grid structure itself (irregularities, circle grid, etc.) t
o make it compelling. Export 3 compositions,
give them a matching title and note what parameters you can manipulate.
*/

Canvas.setpenopacity(1);

const starAccuraccy = 6; // min=2 max=48 step=10  Circle accuracy
const circleAccuracy = 12;
const gridSize = 60; // grr

const gridType = 0; // min=0, max=2, step=1, (1D-Grid, 2D-Grid, Circular)

const startX = -100;
const starY = -100;

// Fisheye
const fishX = 30; // min=-100 max=100 step=10 Fish X
const fishY = 30; // min=-100 max=100 step=10 Fish Y
const fishFalloff = 58; // min=10 max=120 step=10 Fish Falloff
const fishStrength = 0.9; // min=0.1 max=1 step=0.1 Fish Strength

// Circular Grid
const circlegridNum = 11; // min=8 max=25 step=1 Circle Grid number of Circles
const circlegridSpokes = 34; // min=24 max=48 step=1 Circle Grid number of Spokes
const circlegridMaxRadius = 200; // min=90 max=120 step=10 Circle Grid radius
const center = (0, 0);

// Global code will be evaluated once.
const t = new Turtle();

createGrid();

function createGrid() {
  if (gridType == 0) {
    i = 20;
    for (let j = 0; j < gridSize; j++) {
      placeEntity(startX + i * 6, starY + j * 6);
    }
  } else if (gridType == 1) {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        placeEntity(startX + i * 6, starY + j * 6);
      }
    }
  } else {
    circleGrid();
  }
}

// Place entities with fisheye Deform
function placeEntity(newX, newY) {
  // fisheye
  res = deform(newX, newY); //[newX, newY] //
  scale = (1 - res[2]) * 1.4;

  if (Math.random() < 0.3) {
    star(res[0], res[1], 2 + scale);
  } else {
    circle(res[0], res[1], 1.3 + scale);
  }
}

// Deform with Fisheye effect
function deform(x, y) {
  dx = x - fishX;
  dy = y - fishY;

  const r = Math.hypot(dx, dy);
  if (r == 0) {
    return [x, y];
  }
  // normalize
  norm = Math.min(r / fishFalloff, 1.0);

  factor = 1 + fishStrength * (1 - norm) * (1 - norm);
  nx = fishX + dx * factor;
  ny = fishY + dy * factor;
  return [nx, ny, norm];
}

// Draw circle with given accuracy, only used for circle grid! DONT USE
function _circle(center_x, center_y, r, accuracy) {
  t.penup();
  t.goto(center_x, center_y);

  for (let i = 0; i <= accuracy; i++) {
    angle = (2 * Math.PI * i) / accuracy;
    x = center_x + r * Math.cos(angle);
    y = center_y + r * Math.sin(angle);

    t.goto(x, y);
    t.pendown();

    //  t.penup();
  }
}

// draw circle Entity
function circle(center_x, center_y, r) {
  _circle(center_x, center_y, r, circleAccuracy);
}

// draw star Entity
function star(center_x, center_y, r) {
  for (let i = 0; i <= starAccuraccy; i++) {
    angle = (2 * Math.PI * i) / starAccuraccy;
    x = center_x + r * Math.cos(angle);
    y = center_y + r * Math.sin(angle);
    t.penup();
    t.goto(center_x, center_y);
    t.pendown();
    t.goto(x, y);
  }
}

// Create circular Grid
function circleGrid() {
  //circles
  for (let i = 0; i <= circlegridNum; i++) {
    r = (circlegridMaxRadius * i) / circlegridNum;
    t.penup();
    t.goto(center[0], center[1] - r);
    t.setheading(0);
    t.pendown();
    // _circle(t.pos()[0], t.pos()[1], r, 300);
  }

  // spokes
  for (let j = 0; j <= circlegridSpokes; j++) {
    angle = (360 * j) / circlegridSpokes;
    t.penup();
    t.goto(center);
    t.setheading(angle);
    //   t.pendown();
    t.forward(circlegridMaxRadius);
  }

  // Entities
  rot = 360 / circlegridSpokes;
  for (k = 1; k <= circlegridNum; k++) {
    r = (circlegridMaxRadius * k) / circlegridNum;
    for (l = 0; l <= circlegridSpokes; l++) {
      angle = (2 * Math.PI * l) / circlegridSpokes;
      x = r * Math.cos(angle);
      y = r * Math.sin(angle);
      t.penup();
      placeEntity(x, y);
    }
  }
  t.pendown();
}

function walk(i) {
  return false;
}
