import { PARTICLE } from "./PARTICLE";

interface IRENDERER {
  setParameters: () => void;
  setup: () => void;
  reconstructMethods: () => void;
  createParticles: () => void;
  watchWindowSize: () => void;
  clearTimer: () => void;
  jdugeToStopResize: () => void;
  bindEvent: () => void;
  render: () => void;
  init: () => void;
}

export class RENDERER implements IRENDERER {
  BASE_PARTICLE_COUNT: 30;
  WATCH_INTERVAL: 100;
  $window: any;
  $container: any;
  $canvas: any;
  context: any;
  particles: any[];
  watchIds: any[];
  width: number;
  height: number;
  gravity: {
    x: number;
    y: number;
    on: boolean;
    radius: number;
    gravity: boolean;
  };
  distance: number;
  tmpWidth: number;
  tmpHeight: number;

  constructor() {
    this.setParameters();
    this.reconstructMethods();
    this.setup();
    this.bindEvent();
    this.render();
  }

  init = () => {
    this.setParameters();
    this.reconstructMethods();
    this.setup();
    this.bindEvent();
    this.render();
  };

  setParameters = () => {
    this.$window = window;
    this.$container = document.getElementById("jsi-particle-container");
    this.context = this.$container.getContext("2d");
    /*this.context = this.$canvas
      .appendTo(this.$container)
      .get(0)
      .getContext("2d");*/
    this.particles = [];
    this.watchIds = [];
  };

  $(name: any) {
    return document.querySelector(name);
  }

  setup = () => {
    this.particles.length = 0;
    this.watchIds.length = 0;
    this.width = this.$container.width();
    this.height = this.$container.height();
    this.gravity = {
      x: this.width / 2,
      y: this.height / 2,
      on: true,
      radius: 100,
      gravity: true,
    };
    this.$canvas.attr({ width: this.width, height: this.height });
    this.distance = Math.sqrt(
      Math.pow(this.width / 2, 2) + Math.pow(this.height / 2, 2)
    );
    this.createParticles();
  };

  reconstructMethods = () => {
    this.watchWindowSize = this.watchWindowSize.bind(this);
    this.jdugeToStopResize = this.jdugeToStopResize.bind(this);
    this.render = this.render.bind(this);
  };

  createParticles = () => {
    let i: any;
    let count: any;

    for (
      i = 0,
        count =
          (((this.BASE_PARTICLE_COUNT * this.width) / 500) * this.height) /
            500 || 0;
      i < count;
      i++
    ) {
      this.particles.push(new PARTICLE(this));
    }
  };

  watchWindowSize = () => {
    this.clearTimer();
    this.tmpWidth = this.$window.width();
    this.tmpHeight = this.$window.height();
    this.watchIds.push(setTimeout(this.jdugeToStopResize, this.WATCH_INTERVAL));
  };

  clearTimer = () => {
    while (this.watchIds.length > 0) {
      clearTimeout(this.watchIds.pop());
    }
  };

  jdugeToStopResize = () => {
    let width = this.$window.width();
    let height = this.$window.height();
    let stopped = width == this.tmpWidth && height == this.tmpHeight;

    this.tmpWidth = width;
    this.tmpHeight = height;

    if (stopped) {
      this.setup();
    }
  };

  bindEvent = () => {
    this.$window.on("resize", this.watchWindowSize);
    this.$container.on("mousemove", this.controlForce.bind(this, true));
    this.$container.on("mouseleave", this.controlForce.bind(this, false));
  };

  controlForce = (on: any, event: any) => {
    this.gravity.on = on;

    if (!on) {
      return;
    }

    let offset = this.$container.offset();
    this.gravity.x = event.clientX - offset.left + this.$window.scrollLeft();
    this.gravity.y = event.clientY - offset.top + this.$window.scrollTop();
  };

  render = () => {
    requestAnimationFrame(this.render);

    let context = this.context;
    context.save();
    context.fillStyle = "hsla(0, 0%, 0%, 0.3)";
    context.fillRect(0, 0, this.width, this.height);
    context.globalCompositeOperation = "lighter";

    let particles: any;
    let gravity: any;
    let count: any;
    let i: any;
    for (
      i = 0,
        particles = this.particles,
        gravity = this.gravity,
        count = particles.length;
      i < count;
      i++
    ) {
      let particle = particles[i];

      for (let j = i + 1; j < count; j++) {
        particle.checkForce(context, particles[j]);
      }
      particle.checkForce(context, gravity);
      particle.render(context);
    }
    context.restore();
  };
}
