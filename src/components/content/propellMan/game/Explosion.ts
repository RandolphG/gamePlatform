declare global {
  interface Math {
    randMinMax: (a: number, b: number, c: number | undefined) => number;
  }
}

const Math_TO_RAD = Math.PI / 180;

if (!Math.randMinMax) {
  Math.randMinMax = (a, b, c) => {
    let d = a + Math.random() * (b - a);
    if (c) {
      d = Math.round(d);
      return d;
    }
    return d;
  };
}

interface IExplosion {
  life: number;
  x: number;
  y: number;
  particles: any[];
  val: number;
}

export class Explosion implements IExplosion {
  life: number;
  particles: any[];
  val: number;
  x: number;
  y: number;
  engine: any;

  constructor(_config: { x: number; y: number }, engine: any) {
    this.engine = engine;
    this.life = 0;
    this.x = _config.x;
    this.y = _config.y;
    this.particles = [];

    for (this.val = 0; this.val < 40; this.val += 1) {
      this.particles.push({
        parent: this,
        x: this.x,
        y: this.y,
        color: "rgba(255,255,255," + Math.random() + ")",
        speed: Math.randMinMax(100, 300, undefined),
        size: Math.randMinMax(2, 10, undefined),
        degree: Math.randMinMax(0, 360, undefined),
        vd: Math.randMinMax(-30, 0, undefined),
        vs: Math.randMinMax(-12, -6, undefined),
      });
    }
  }

  getAngle = (a: any, b: any, c: any, d: any) => {
    let e = a - c,
      f = b - d;
    return Math.atan2(f, e);
  };

  getDegree = (a: any, b: any, c: any, d: any) => {
    let e = this.getAngle(a, b, c, d);
    return e / Math_TO_RAD;
  };

  update = (delta: any) => {
    if ((this.life += delta) && !(this.life > 0.5)) {
      let p;

      for (let i = 0; i < 40; i += 1) {
        p = this.particles[i];
        p.degree += p.vd * delta;
        p.speed += p.vs;

        if (p.speed < 0) {
          p.speed = 0;
        }

        p.x += Math.cos(p.degree * Math_TO_RAD) * p.speed * delta;
        p.y += Math.sin(p.degree * Math_TO_RAD) * p.speed * delta;
        p.x -= delta * this.engine.speed;
        if (p.y > p.parent.y + 20) {
          p.degree *= -1;
        }
      }
    }
  };

  draw = (ctx: any) => {
    if (this.life < 0.5) {
      let d;

      for (let i = 0; i < 40; i += 1) {
        d = this.particles[i];
        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(d.degree * Math_TO_RAD);
        ctx.fillStyle = d.color;
        ctx.fillRect(-d.size, -d.size, 2 * d.size, 2 * d.size);
        ctx.restore();
      }
    }
  };
}
