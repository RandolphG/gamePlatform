import { TweenMax } from "gsap";

interface IDot {
  index: number;
  anglespeed: number;
  x: number;
  y: number;
  scale: number;
  range: number;
  limit: number;
  element: HTMLSpanElement;
  lockX: number;
  lockY: number;
  angleX: number;
  angleY: number;
}

export class Dot implements IDot {
  anglespeed: number;
  element: HTMLSpanElement;
  index: number;
  limit: number;
  range: number;
  scale: number;
  x: number;
  y: number;
  angleX: number;
  angleY: number;
  lockX: number;
  lockY: number;
  idle: boolean;
  sineDots: number;

  constructor(
    index = 0,
    width: number,
    cursor: HTMLElement | null,
    idle: boolean,
    sineDots: number
  ) {
    this.idle = idle;
    this.sineDots = sineDots;
    this.index = index;
    this.anglespeed = 0.05;
    this.x = 0;
    this.y = 0;
    this.scale = 1 - 0.05 * index;
    this.range = width / 2 - (width / 2) * this.scale + 2;
    this.limit = width * 0.75 * this.scale;
    this.element = document.createElement("span");
    TweenMax.set(this.element, { scale: this.scale });
    cursor?.appendChild(this.element);
  }

  lock() {
    this.lockX = this.x;
    this.lockY = this.y;
    this.angleX = Math.PI * 2 * Math.random();
    this.angleY = Math.PI * 2 * Math.random();
  }

  draw(delta: number) {
    if (!this.idle || this.index <= this.sineDots) {
      TweenMax.set(this.element, { x: this.x, y: this.y });
    } else {
      this.angleX += this.anglespeed;
      this.angleY += this.anglespeed;
      this.y = this.lockY + Math.sin(this.angleY) * this.range;
      this.x = this.lockX + Math.sin(this.angleX) * this.range;
      TweenMax.set(this.element, { x: this.x, y: this.y });
    }
  }
}
