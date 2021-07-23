interface IPARTICLE {}

export class PARTICLE implements IPARTICLE {
  renderer: any;
  THRESHOLD: 300;
  SPRING_AMOUNT: 0.001;
  LIMIT_RATE: 0.2;
  radius: any;
  x: any;
  y: any;
  vx: any;
  vy: any;
  maxVelocity: any;
  ax: any;
  ay: any;
  gravity: any;
  scale: any;
  hue: any;

  constructor(renderer: any) {
    this.renderer = renderer;
    this.init();
  }

  init = () => {
    this.radius = this.getRandomValue(10, 20);
    this.x =
      this.getRandomValue(
        -this.renderer.width * this.LIMIT_RATE,
        this.renderer.width * (1 + this.LIMIT_RATE)
      ) || 0;
    this.y =
      this.getRandomValue(
        -this.renderer.width * this.LIMIT_RATE,
        this.renderer.height * (1 + this.LIMIT_RATE)
      ) || 0;
    this.vx = this.getRandomValue(-3, 3);
    this.vy = this.getRandomValue(-3, 3);
    this.maxVelocity = this.getRandomValue(5, 10);
    this.ax = 0;
    this.ay = 0;
    this.gravity = false;
    this.transformShape();
  };

  getRandomValue = (min: any, max: any) => {
    return min + (max - min) * Math.random();
  };

  transformShape = () => {
    let velocity = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    this.scale = 1 - velocity / 15;
    this.hue = (180 + velocity * 12) % 360 || 0;
  };

  checkForce = (context: any, particle: any) => {
    if (particle.gravity && !particle.on) {
      return;
    }
    let dx = particle.x - this.x;
    let dy = particle.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > this.THRESHOLD * (particle.gravity ? 10 : 1)) {
      return;
    }
    let rate = this.SPRING_AMOUNT / (this.radius + particle.radius);

    if (particle.gravity) {
      let accelaration = Math.min(0.3, 50 / distance);
      this.ax = dx > 0 ? accelaration : -accelaration;
      this.ay = dy > 0 ? accelaration : -accelaration;
    } else {
      this.ax = dx * rate * particle.radius;
      this.ay = dy * rate * particle.radius;
      particle.ax = -dx * rate * this.radius;
      particle.ay = -dy * rate * this.radius;
    }
  };

  render = (context: any) => {
    context.save();
    context.fillStyle = "hsl(" + this.hue + ", 70%, 40%)";
    context.translate(this.x, this.y);
    context.rotate(Math.atan2(this.vy, this.vx) + Math.PI / 2);
    context.scale(this.scale, 1);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2, false);
    context.fill();
    context.restore();

    this.x += this.vx;
    this.y += this.vy;
    this.vx += this.ax;
    this.vy += this.ay;
    this.vx = Math.min(Math.max(this.vx, -this.maxVelocity), this.maxVelocity);
    this.vy = Math.min(Math.max(this.vy, -this.maxVelocity), this.maxVelocity);

    if (
      (this.x < -this.radius && this.vx < 0) ||
      (this.x > this.renderer.width + this.radius && this.vx > 0) ||
      (this.y < -this.radius && this.vy < 0) ||
      (this.y > this.renderer.height + this.radius && this.vy > 0)
    ) {
      let theta = this.getRandomValue(0, Math.PI * 2);
      let sin = Math.sin(theta);
      let cos = Math.cos(theta);
      let velocity = this.getRandomValue(-3, 3);

      this.x =
        -(this.renderer.distance + this.radius) * cos + this.renderer.width / 2;
      this.y =
        -(this.renderer.distance + this.radius) * sin +
        this.renderer.height / 2;
      this.vx = velocity * cos;
      this.vy = velocity * sin;
    }
    this.transformShape();
  };
}
