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

const gridType = 0; // min=0, max=2, step=1, (1D-Grid, 2D-Grid, 3D-Grid)

const startX = -100;
const starY = -100;

const fishX = 30; // min=-100 max=100 step=10  Fish X
const fishY = 30; // min=-100 max=100 step=10  Fish Y
const falloff = 58; // min=10 max=120 step=10 Fish Falloff
const strength = 0.9; // min=0.1 max=1 step=0.1 Fish Strength

// Global code will be evaluated once.
const t = new Turtle();

/*
function createGrid() {
  if (gridType == 0) {
    draw(i, 20);
  } else if (gridType == 1) {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        draw(i, j);
      }
    }
  }
}
*/

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    newX = startX + i * 6;
    newY = starY + j * 6;

    // fisheye
    res = deform(newX, newY); //[newX, newY] //
    console.log(1 - res[2]);
    scale = (1 - res[2]) * 1.4;

    if (Math.random() < 0.3) {
      star(res[0], res[1], 2 + scale);
    } else {
      circle(res[0], res[1], 1.3 + scale);
    }
  }
}

function deform(x, y) {
  dx = x - fishX;
  dy = y - fishY;

  r = Math.hypot(dx, dy);
  if (r == 0) {
    return [x, y];
  }
  // normalize
  norm = Math.min(r / falloff, 1.0);

  factor = 1 + strength * (1 - norm) * (1 - norm);
  nx = fishX + dx * factor;
  ny = fishY + dy * factor;
  return [nx, ny, norm];
}

function circle(center_x, center_y, r) {
  t.penup();
  t.goto(center_x, center_y);

  for (let i = 0; i <= circleAccuracy; i++) {
    angle = (2 * Math.PI * i) / circleAccuracy;
    x = center_x + r * Math.cos(angle);
    y = center_y + r * Math.sin(angle);

    t.goto(x, y);
    t.pendown();

    //  t.penup();
  }
}

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

function walk(i) {
  return false;
}
