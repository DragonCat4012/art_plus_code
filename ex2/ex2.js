/*
Adapting
Find 3 inspiring artworks based on mathematical functions (web, Pinterest),
add them to your portfolio, then pick one complex enough to be worth rebuilding
and reprogram it in Turtloy. Tune its parameters to create variations
and select your 2 favourites.

Upload: 3 reference images · 2 SVG variations · 1 .js source file

Selecting
From all your work so far, pick your 2 favourite pieces, tweak them slightly, and add them to your portfolio.
*/

// e.g 1: Shape https://turtletoy.net/turtle/4e020c6f4b
// e.g 2: Tan(ArcCos(x) + ArcSin(y)) = 1 https://mzrg.com/math/graphs.shtml
// e.g. 3: Flower https://bestflowersite.co/flower-function-math/

// v1, -0.6/5.0/11.0
// v2 -0.8/4.0/3.0

const scale = -0.5; //min=-0.9,max=0.1,step=0.1
const a1 = 4; //min=1,max=5,step=1 // layers
const a2 = 7; //min=2,max=15,step=1 // petals

Canvas.setpenopacity(1);
const t = new Turtle();

function rose_curve(petals = 5, sc) {
  let points = 5000;
  // rose curve: r = cos(n*θ)"""

  for (let i = 0; i < points; i++) {
    angle = (i / points) * 2 * Math.PI;
    radius = 300 * Math.cos(petals * angle);

    if (radius < 0) {
      radius = 0;
    }

    x = radius * Math.cos(angle);
    y = radius * Math.sin(angle);

    if (i == 0) {
      t.penup();
      t.goto((x * sc) / 5, (y * sc) / 5);
      t.pendown();
    } else {
      t.goto((x * sc) / 5, (y * sc) / 5);
    }
  }
}

for (let l = 0; l <= a1; l++) {
  let r = Math.floor(Math.random() * 10) + 2; // Return a random integer from 0 to 9 (both included):

  if (l < 3) {
    rose_curve(r, scale + l);
  } else {
    rose_curve(a2 * l ** 1.3, scale - r / 10);
  }
}
