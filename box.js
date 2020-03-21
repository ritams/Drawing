class Box {
  constructor(x, y, w, h, mass, vx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.mass = mass;
    this.vx = vx;
  }

  move() {
    this.x += this.vx;

    if (this.x <= 0 || this.x + this.w >= canvas.width) {
      this.vx *= -1;
    }
  }

  colide(other) {
    if (this.x + this.w - other.x >= 0) {
      this.vx = other.vx;
      other.vx = 0;
    }
  }

  draw(p) {
    p.push();
    p.fill("white");
    p.rect(this.x, this.y, this.w, this.h);
    p.pop();
  }
}
