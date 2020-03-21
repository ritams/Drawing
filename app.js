let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
let origin = { x: canvas.width / 2, y: canvas.height / 2 };
let p = new Pen(ctx, origin);

// let start = 0;
// let end = 0;
// p.setStrokeWeight(2);

// var alpha = 0;
// p.stroke(`rgba(0, 200, 255, ${1 - alpha})`);
// function animate() {
//   window.requestAnimationFrame(animate);
//   p.clear();

//   p.arc(0, 0, 100, start, end);
//   if (end < 360) {
//     end += 3;
//   }
//   if (end >= 360) {
//     p.fill(`rgba(0, 200, 255, ${alpha})`);
//     p.stroke(`rgba(0, 200, 255, ${1 - alpha})`);
//     // p.noStroke();
//     if (alpha < 1) {
//       alpha += 0.01;
//     }
//   }
// }

// animate();

// let v1 = new V2d(100, 100);
// let v2 = new V2d(200, 200);
// let v3 = new V2d(200, 100);

// p.fill();
// p.circle(v1.x, v1.y, 5);
// p.circle(v2.x, v2.y, 5);
// p.circle(v3.x, v3.y, 5);

// p.trace(200, [v1, v2, v3]);

// let v = [];
// let x = -7.5;
// for (let i = 0; i < 100; i++) {
//   v.push(new V2d(x * 100, Math.sin(x) * 100));
//   x += 0.15;
// }

// let xbar = [new V2d(-canvas.width / 2, 0), new V2d(canvas.width / 2, 0)];
// let ybar = [new V2d(0, canvas.height / 2), new V2d(0, -canvas.height / 2)];
// let dr = 0;
// let dx = 0;
// let dy = 0;

// p.setStrokeWeight(4);
// p.stroke("rgba(0, 0, 255, 0.5)");
// function animate() {
//   window.requestAnimationFrame(animate);
//   p.clear();
//   p.push();
//   p.stroke("black");
//   p.trace(dx, xbar);
//   p.trace(dy, ybar);
//   p.pop();
//   if (dx >= canvas.width) {
//     p.trace(dr, v);
//     dr += 10;
//   }
//   dx += 10;
//   dy += 10;
// }

// animate();

p.push();
p.stroke("red");
p.setStrokeWeight(2);
p.line(0, 0, 100, 100);
// p.push();
// p.stroke("black");
// p.line(0, 0, -100, 100);
// p.pop();
p.pop();

p.line(0, 0, 100, -100);
