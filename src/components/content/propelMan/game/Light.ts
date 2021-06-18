/*
declare global {
  interface Math {
    randMinMax: (a: any, b: any, c: any) => number;
  }
}
*/

const Math_TO_RAD = Math.PI / 180;
/*
if (!Math.randMinMax) {
  Math.randMinMax = (a, b, c) => {
    let d = a + Math.random() * (b - a);
    return c && (d = Math.round(d)), d;
  };
}*/

interface ILight {
  node: {
    x: number;
    y: number;
  };
}

export class Light implements ILight {
  node: { x: number; y: number };
  engine: any;

  constructor(engine: any) {
    this.engine = engine;
    this.node = {
      x: this.engine.WIDTH / 2,
      y: this.engine.HEIGHT / 4,
    };
  }

  getAngle = (a: any, b: any, c: any, d: any) => {
    let e = a - c;
    let f = b - d;
    return Math.atan2(f, e);
  };

  getDegree = (a: any, b: any, c: any, d: any) => {
    let e = this.getAngle(a, b, c, d);
    return e / Math_TO_RAD;
  };

  update = () => {};

  draw = (context: any) => {
    let a;
    let b;
    let value;
    let angle;
    let countRep = this.engine.walls.length;
    for (let i = 0; i < countRep; i += 1) {
      a = {
        x: this.engine.walls[i].x - this.engine.walls[i].width / 2,
        y: this.engine.WALL_HEIGHT,
      };
      b = {
        x: this.engine.walls[i].x + this.engine.walls[i].width / 2,
        y: this.engine.WALL_HEIGHT,
      };
      value = this.getDegree(
        a.x - this.engine.distance,
        a.y,
        this.node.x,
        this.node.y
      );
      angle = this.getDegree(
        b.x - this.engine.distance,
        b.y,
        this.node.x,
        this.node.y
      );
      context.save();
      context.translate(-this.engine.distance, 0);
      context.beginPath();
      context.moveTo(a.x, a.y);
      context.lineTo(b.x, b.y);
      context.lineTo(
        b.x + 200 * Math.cos(angle * Math_TO_RAD),
        b.y + 200 * Math.sin(angle * Math_TO_RAD)
      );
      context.lineTo(
        a.x + 200 * Math.cos(value * Math_TO_RAD),
        a.y + 200 * Math.sin(value * Math_TO_RAD)
      );
      context.closePath();
      context.fillStyle = this.engine.gradients.shadow;
      context.fill();
      context.restore();
    }
  };
}
