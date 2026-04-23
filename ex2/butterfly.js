const scale = 5; //min=0,max=1,step=0.1
const a1 = 4; //min=0,max=100,step=1 // wingdetail
const a2 = 4; //min=0,max=100,step=1 //wingnumber
const a3 = 2; //min=0,max=100,step=1 // expansion?

Canvas.setpenopacity(1);
const t = new Turtle();

// The walk function will be called until it returns false.
function walk(i) {
  return i < 4;
}

function butterfly_curve(points) {
  for (let i = 0; i < points; i++) {
    t1 = (i / points) * 12 * Math.PI;

    r = Math.exp(Math.cos(a1 * t1)) - a3 * Math.cos(a2 * t1);

    x = 100 * r * Math.cos(t1);
    y = 100 * r * Math.sin(t1);

    if (i == 0) {
      t.penup();
      t.goto(x * scale, y * scale);
      t.pendown();
    } else {
      //  t.pencolor("red")
      t.goto(x * scale, y * scale);
    }
  }
}
butterfly_curve(2000);
