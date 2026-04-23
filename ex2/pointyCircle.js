const a1 = 3.2; //min=1,max=10,step=0.1
const a2 = 3.4; //min=1,max=10,step=0.1
const a3 = 1.4; //min=1,max=10,step=0.1
const a4 = 1.0; //min=1,max=10,step=0.1

const f1 = 5; //min=-50,max=50,step=1
const f2 = 13; //min=-50,max=50,step=1
const f3 = -43; //min=-50,max=50,step=1
const f4 = -3; //min=-50,max=50,step=1

const scale = 5; //min=5,max=100,step=1

Canvas.setpenopacity(1);

const turtle = new Turtle();
turtle.penup();
turtle.goto(-50, -20);
turtle.pendown();

function walk(i) {
  a = getCoordinates(i);
  turtle.goto(a["x"] * scale, a["y"] * scale);
  return i < 100;
}

function getCoordinates(t) {
  /*
const terms = [
  { amp: 3.2, freq: 5 },
  { amp: 3.4, freq: 13 },
  { amp: 1.4, freq: -43 },
  { amp: 1.0, freq: -3 },
];
*/
  const terms = [
    { amp: a1, freq: f1 },
    { amp: a2, freq: f2 },
    { amp: a3, freq: f3 },
    { amp: a4, freq: f4 },
  ];

  let realSum = 0;
  let imagSum = 0;

  // Sum each term: amp * e^(i*freq*t) = amp * (cos(freq*t) + i*sin(freq*t))
  for (let term of terms) {
    const angle = term.freq * t;
    realSum += term.amp * Math.cos(angle);
    imagSum += term.amp * Math.sin(angle);
  }

  return {
    x: realSum,
    y: imagSum,
    t: t,
  };
}
