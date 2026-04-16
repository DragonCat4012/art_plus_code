Canvas.setpenopacity(1);

const circleAccuracy = 360; // min=2 max=360 step=10  Circle accuracy
const gridSize = 30; // min=30 max=100 step=10  Grid size

const startX = -100;
const starY = -100;

const fishX = 30; // min=-100 max=100 step=10  Fish X
const fishY = 30; // min=-100 max=100 step=10  Fish Y
const falloff = 200; // min=10 max=200 step=10 Fish Falloff
const strength = 0.9; // min=0.1 max=1 step=0.1 Fish Strength

// Global code will be evaluated once.
const t = new Turtle();

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    newX = startX + i * 10;
    newY = starY + j * 10;

    // fisheye
    res = deform(newX, newY); //[newX, newY] //
    console.log(res);
    circle(res[0], res[1], 3);
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
  return [nx, ny];
}

function circle(center_x, center_y, r) {
  for (let i = 0; i < circleAccuracy; i++) {
    angle = (2 * Math.PI * i) / circleAccuracy;
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
