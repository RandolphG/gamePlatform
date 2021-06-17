interface ICliffHanger {
  /* Game data */
  highScore: number;
  phase: string;
  lastTimestamp: number | undefined;
  heroX: number;
  heroY: number;
  sceneOffset: number;
  platforms: any[];
  sticks: any[];
  trees: any[];
  /* highScore for localStorage*/
  score: number;

  /* configuration */
  canvasWidth: number;
  canvasHeight: number;
  platformHeight: number;
  heroDistanceFromEdge: number;
  paddingX: number;
  perfectAreaSize: number;

  /* The background moves slower than the hero */
  backgroundSpeedMultiplier: number;
  hill1BaseHeight: number;
  hill1Amplitude: number;
  hill1Stretch: number;
  hill2BaseHeight: number;
  hill2Amplitude: number;
  hill2Stretch: number;

  stretchingSpeed: number;
  turningSpeed: number;
  walkingSpeed: number;
  transitioningSpeed: number;
  fallingSpeed: number;

  heroWidth: number;
  heroHeight: number;

  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;

  introductionElement: HTMLElement | null;
  perfectElement: HTMLElement | null;
  restartButton: HTMLElement | null;
  scoreElement: HTMLElement | null;
  highScoreElement: HTMLElement | null;
  player: string;

  /* class methods */
  resetGame: () => void;
  generatePlatform: () => void;
  animate: (timestamp: any) => void;
  thePlatformTheStickHits: () => void;
  setScore: any;
}

declare global {
  interface Array<T> {
    last: () => any;
  }

  interface Math {
    sinus: (degree: any) => any;
  }
}

if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
}

if (!Math.sinus) {
  Math.sinus = (degree: any) => {
    return Math.sin((degree / 180) * Math.PI);
  };
}

export class CliffHangerGame implements ICliffHanger {
  highScore: number;
  canvasHeight: number;
  canvasWidth: number;
  heroDistanceFromEdge: number;
  heroX: number;
  heroY: number;
  lastTimestamp: number | undefined;
  paddingX: number;
  perfectAreaSize: number;
  phase: string;
  platformHeight: number;
  platforms: any[];
  sceneOffset: number;
  score: number;
  sticks: any[];
  trees: any[];
  backgroundSpeedMultiplier: number;
  fallingSpeed: number;
  heroHeight: number;
  heroWidth: number;
  hill1Amplitude: number;
  hill1BaseHeight: number;
  hill1Stretch: number;
  hill2Amplitude: number;
  hill2BaseHeight: number;
  hill2Stretch: number;
  stretchingSpeed: number;
  transitioningSpeed: number;
  turningSpeed: number;
  walkingSpeed: number;
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  introductionElement: HTMLElement | null;
  perfectElement: HTMLElement | null;
  restartButton: HTMLElement | null;
  scoreElement: HTMLElement | null;
  highScoreElement: HTMLElement | null;
  player: string;
  setScore: any;

  constructor(
    player: string,
    setScore: (
      highScore: number
    ) =>
      | { payload: undefined; type: string }
      | { payload: { highScore: number }; type: string }
  ) {
    this.setScore = setScore;
    this.player = player;
    this.phase = "waiting";
    this.platforms = [];
    this.sticks = [];
    this.trees = [];
    this.score = 0;
    this.highScore = 0;

    this.canvasWidth = 375;
    this.canvasHeight = 375;
    this.platformHeight = 100;
    this.heroDistanceFromEdge = 10; // While waiting
    this.paddingX = 100; // The waiting position of the hero in from the original canvas size
    this.perfectAreaSize = 10;
    this.backgroundSpeedMultiplier = 0.2; // The background moves slower than the hero

    this.hill1BaseHeight = 100;
    this.hill1Amplitude = 10;
    this.hill1Stretch = 1;
    this.hill2BaseHeight = 70;
    this.hill2Amplitude = 20;
    this.hill2Stretch = 0.5;

    this.stretchingSpeed = 4; // Milliseconds it takes to draw a pixel
    this.turningSpeed = 4; // Milliseconds it takes to turn a degree
    this.walkingSpeed = 4;
    this.transitioningSpeed = 2;
    this.fallingSpeed = 2;

    this.heroWidth = 17; // 24
    this.heroHeight = 30; // 40

    // @ts-ignore
    this.canvas = document.getElementById("game");

    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    this.ctx = this.canvas!.getContext("2d");
    this.introductionElement = document.getElementById("introduction");
    this.perfectElement = document.getElementById("perfect");
    this.restartButton = document.getElementById("restart");
    this.scoreElement = document.getElementById("score");
    this.highScoreElement = document.getElementById("highScore");

    /* Initialize layout */
    this.resetGame();

    window.addEventListener("keydown", this.keyDown);
    window.addEventListener("mousedown", this.mouseDown);
    window.addEventListener("mouseup", this.mouseUp);
    window.addEventListener("resize", this.resize);
    window.requestAnimationFrame(this.animate);

    this.restartButton!.addEventListener("click", this.click);
  }

  click = (event: Event) => {
    event.preventDefault();
    this.resetGame();
    this.restartButton!.style.display = "none";
  };

  /*
    keyDown :  If space was pressed restart the game
    */
  keyDown = (event: KeyboardEvent) => {
    if (event.key == " ") {
      event.preventDefault();
      this.resetGame();
      return;
    }
  };

  /* mouseDown */
  mouseDown = (event: MouseEvent) => {
    if (this.phase === "waiting") {
      this.lastTimestamp = undefined;
      const introductionOpacity = 0;
      this.introductionElement!.style.opacity = introductionOpacity.toString();
      this.phase = "stretching";
      window.requestAnimationFrame(this.animate);
    }
  };

  /* mouseUp */
  mouseUp = (event: MouseEvent) => {
    if (this.phase === "stretching") {
      this.phase = "turning";
    }
  };

  /* resize */
  resize = (event: Event) => {
    this.canvas!.width = window.innerWidth;
    this.canvas!.height = window.innerHeight;
    this.draw();
  };

  resetGame = () => {
    // Reset game progress
    this.phase = "waiting";
    this.lastTimestamp = undefined;
    this.sceneOffset = 0;
    this.score = 0;

    const introductionOpacity: number = 1;
    const perfectOpacity: number = 0;
    this.introductionElement!.style.opacity = introductionOpacity.toString();
    this.perfectElement!.style.opacity = perfectOpacity.toString();
    this.restartButton!.style.display = "none";
    this.scoreElement!.innerText = this.score.toString();
    this.highScoreElement!.innerText = this.highScore.toString();

    // The first platform is always the same
    // x + w has to match paddingX
    this.platforms = [{ x: 50, w: 50 }];
    this.generatePlatform();
    this.generatePlatform();
    this.generatePlatform();
    this.generatePlatform();

    this.sticks = [
      { x: this.platforms[0].x + this.platforms[0].w, length: 0, rotation: 0 },
    ];

    this.trees = [];
    this.generateTree();
    this.generateTree();
    this.generateTree();
    this.generateTree();
    this.generateTree();
    this.generateTree();
    this.generateTree();
    this.generateTree();
    this.generateTree();
    this.generateTree();

    this.heroX =
      this.platforms[0].x + this.platforms[0].w - this.heroDistanceFromEdge;
    this.heroY = 0;

    this.draw();
  };

  generateTree = () => {
    const minimumGap = 30;
    const maximumGap = 150;

    // X coordinate of the right edge of the furthest tree
    const lastTree = this.trees[this.trees.length - 1];
    let furthestX = lastTree ? lastTree.x : 0;

    const x =
      furthestX +
      minimumGap +
      Math.floor(Math.random() * (maximumGap - minimumGap));

    const treeColors = ["#6D8821", "#8FAC34", "#98B333"];
    const color = treeColors[Math.floor(Math.random() * 3)];

    this.trees.push({ x, color });
  };

  generatePlatform = () => {
    const minimumGap = 40;
    const maximumGap = 200;
    const minimumWidth = 20;
    const maximumWidth = 100;

    // X coordinate of the right edge of the furthest platform
    const lastPlatform = this.platforms[this.platforms.length - 1];
    let furthestX = lastPlatform.x + lastPlatform.w;

    const x =
      furthestX +
      minimumGap +
      Math.floor(Math.random() * (maximumGap - minimumGap));
    const w =
      minimumWidth + Math.floor(Math.random() * (maximumWidth - minimumWidth));

    this.platforms.push({ x, w });
  };

  draw = () => {
    if (this.ctx) {
      this.ctx.save();
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      this.drawBackground();

      // Center main canvas area to the middle of the screen
      this.ctx.translate(
        (window.innerWidth - this.canvasWidth) / 2 - this.sceneOffset,
        (window.innerHeight - this.canvasHeight) / 2
      );

      // Draw scene
      this.drawPlatforms();
      this.drawHero();
      this.drawSticks();

      // Restore transformation
      this.ctx.restore();
    }
  };

  thePlatformTheStickHits = () => {
    if (this.sticks.last().rotation != 90)
      throw Error(`Stick is ${this.sticks.last().rotation}°`);
    const stickFarX = this.sticks.last().x + this.sticks.last().length;

    const platformTheStickHits = this.platforms.find(
      (platform) =>
        platform.x < stickFarX && stickFarX < platform.x + platform.w
    );

    // If the stick hits the perfect area
    if (
      platformTheStickHits &&
      platformTheStickHits.x +
        platformTheStickHits.w / 2 -
        this.perfectAreaSize / 2 <
        stickFarX &&
      stickFarX <
        platformTheStickHits.x +
          platformTheStickHits.w / 2 +
          this.perfectAreaSize / 2
    )
      return [platformTheStickHits, true];

    return [platformTheStickHits, false];
  };

  animate = (timestamp: any) => {
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
      window.requestAnimationFrame(this.animate);
      return;
    }

    switch (this.phase) {
      case "waiting":
        return; // Stop the loop
      case "stretching": {
        this.sticks.last().length +=
          (timestamp - this.lastTimestamp) / this.stretchingSpeed;
        break;
      }
      case "turning": {
        this.sticks.last().rotation +=
          (timestamp - this.lastTimestamp) / this.turningSpeed;

        if (this.sticks.last().rotation > 90) {
          this.sticks.last().rotation = 90;

          const [nextPlatform, perfectHit] = this.thePlatformTheStickHits();
          if (nextPlatform) {
            // Increase score
            this.score += perfectHit ? 2 : 1;
            this.scoreElement!.innerText = this.score.toString();

            if (perfectHit) {
              let perfectOpacity = 1;
              this.perfectElement!.style.opacity = perfectOpacity.toString();
              perfectOpacity = 0;
              setTimeout(
                () =>
                  (this.perfectElement!.style.opacity =
                    perfectOpacity.toString()),
                1000
              );
            }

            this.generatePlatform();
            this.generateTree();
            this.generateTree();
          }

          this.phase = "walking";
        }
        break;
      }
      case "walking": {
        this.heroX += (timestamp - this.lastTimestamp) / this.walkingSpeed;

        const [nextPlatform] = this.thePlatformTheStickHits();
        if (nextPlatform) {
          // If hero will reach another platform then limit it's position at it's edge
          const maxHeroX =
            nextPlatform.x + nextPlatform.w - this.heroDistanceFromEdge;
          if (this.heroX > maxHeroX) {
            this.heroX = maxHeroX;
            this.phase = "transitioning";
          }
        } else {
          // If hero won't reach another platform then limit it's position at the end of the pole
          const maxHeroX =
            this.sticks.last().x + this.sticks.last().length + this.heroWidth;
          if (this.heroX > maxHeroX) {
            this.heroX = maxHeroX;
            this.phase = "falling";
          }
        }
        break;
      }
      case "transitioning": {
        this.sceneOffset +=
          (timestamp - this.lastTimestamp) / this.transitioningSpeed;

        const [nextPlatform] = this.thePlatformTheStickHits();
        if (
          this.sceneOffset >
          nextPlatform.x + nextPlatform.w - this.paddingX
        ) {
          // Add the next step
          this.sticks.push({
            x: nextPlatform.x + nextPlatform.w,
            length: 0,
            rotation: 0,
          });
          this.phase = "waiting";
        }
        break;
      }
      case "falling": {
        if (this.sticks.last().rotation < 180)
          this.sticks.last().rotation +=
            (timestamp - this.lastTimestamp) / this.turningSpeed;

        this.heroY += (timestamp - this.lastTimestamp) / this.fallingSpeed;
        const maxHeroY =
          this.platformHeight +
          100 +
          (window.innerHeight - this.canvasHeight) / 2;
        if (this.heroY > maxHeroY) {
          this.restartButton!.style.display = "block";

          /* set the high score */
          if (this.score > this.highScore) {
            this.highScore = this.score;

            console.log(`highScore --> `, this.score);
            console.log(`data : `, this.player);

            this.highScoreElement!.innerText = this.highScore.toString();
            this.setScore({ player: this.player, score: this.highScore });
          }
          return;
        }
        break;
      }
      default:
        throw Error("Wrong phase");
    }

    this.draw();
    window.requestAnimationFrame(this.animate);

    this.lastTimestamp = timestamp;
  };

  /*
    drawHill - A hill is a shape under a stretched out sinus wave
    */
  drawHill = (
    baseHeight: number,
    amplitude: number,
    stretch: number,
    color: string
  ) => {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, window.innerHeight);
      this.ctx.lineTo(0, this.getHillY(0, baseHeight, amplitude, stretch));
      for (let i = 0; i < window.innerWidth; i++) {
        this.ctx.lineTo(i, this.getHillY(i, baseHeight, amplitude, stretch));
      }
      this.ctx.lineTo(window.innerWidth, window.innerHeight);
      this.ctx.fillStyle = color;
      this.ctx.fill();
    }
  };

  drawPlatforms = () => {
    this.platforms.forEach(({ x, w }) => {
      // Draw platform
      if (this.ctx) {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(
          x,
          this.canvasHeight - this.platformHeight,
          w,
          this.platformHeight + (window.innerHeight - this.canvasHeight) / 2
        );

        // Draw perfect area only if hero did not yet reach the platform
        if (this.sticks.last().x < x) {
          this.ctx.fillStyle = "red";
          this.ctx.fillRect(
            x + w / 2 - this.perfectAreaSize / 2,
            this.canvasHeight - this.platformHeight,
            this.perfectAreaSize,
            this.perfectAreaSize
          );
        }
      }
    });
  };

  drawHero = () => {
    if (this.ctx) {
      this.ctx.save();
      this.ctx.fillStyle = "black";
      this.ctx.translate(
        this.heroX - this.heroWidth / 2,
        this.heroY +
          this.canvasHeight -
          this.platformHeight -
          this.heroHeight / 2
      );

      // Body
      this.drawRoundedRect(
        -this.heroWidth / 2,
        -this.heroHeight / 2,
        this.heroWidth,
        this.heroHeight - 4,
        5
      );

      // Legs
      const legDistance = 5;
      this.ctx.beginPath();
      this.ctx.arc(legDistance, 11.5, 3, 0, Math.PI * 2, false);
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.arc(-legDistance, 11.5, 3, 0, Math.PI * 2, false);
      this.ctx.fill();

      // Eye
      this.ctx.beginPath();
      this.ctx.fillStyle = "white";
      this.ctx.arc(5, -7, 3, 0, Math.PI * 2, false);
      this.ctx.fill();

      // Band
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(-this.heroWidth / 2 - 1, -12, this.heroWidth + 2, 4.5);
      this.ctx.beginPath();
      this.ctx.moveTo(-9, -14.5);
      this.ctx.lineTo(-17, -18.5);
      this.ctx.lineTo(-14, -8.5);
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.moveTo(-10, -10.5);
      this.ctx.lineTo(-15, -3.5);
      this.ctx.lineTo(-5, -7);
      this.ctx.fill();

      this.ctx.restore();
    }
  };

  drawRoundedRect = (
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ) => {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y + radius);
      this.ctx.lineTo(x, y + height - radius);
      this.ctx.arcTo(x, y + height, x + radius, y + height, radius);
      this.ctx.lineTo(x + width - radius, y + height);
      this.ctx.arcTo(
        x + width,
        y + height,
        x + width,
        y + height - radius,
        radius
      );
      this.ctx.lineTo(x + width, y + radius);
      this.ctx.arcTo(x + width, y, x + width - radius, y, radius);
      this.ctx.lineTo(x + radius, y);
      this.ctx.arcTo(x, y, x, y + radius, radius);
      this.ctx.fill();
    }
  };

  drawSticks = () => {
    this.sticks.forEach((stick) => {
      if (this.ctx) {
        this.ctx.save();

        // Move the anchor point to the start of the stick and rotate
        this.ctx.translate(stick.x, this.canvasHeight - this.platformHeight);
        this.ctx.rotate((Math.PI / 180) * stick.rotation);

        // Draw stick
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, -stick.length);
        this.ctx.stroke();

        // Restore transformations
        this.ctx.restore();
      }
    });
  };

  drawBackground = () => {
    // Draw sky
    if (this.ctx) {
      let gradient = this.ctx.createLinearGradient(0, 0, 0, window.innerHeight);
      gradient.addColorStop(0, "#BBD691");
      gradient.addColorStop(1, "#FEF1E1");
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw hills
      this.drawHill(
        this.hill1BaseHeight,
        this.hill1Amplitude,
        this.hill1Stretch,
        "#95C629"
      );
      this.drawHill(
        this.hill2BaseHeight,
        this.hill2Amplitude,
        this.hill2Stretch,
        "#659F1C"
      );

      // Draw trees
      this.trees.forEach((tree) => this.drawTree(tree.x, tree.color));
    }
  };

  drawTree = (x: number, color: any) => {
    this.ctx!.save();
    this.ctx!.translate(
      (-this.sceneOffset * this.backgroundSpeedMultiplier + x) *
        this.hill1Stretch,
      this.getTreeY(x, this.hill1BaseHeight, this.hill1Amplitude)
    );

    const treeTrunkHeight = 5;
    const treeTrunkWidth = 2;
    const treeCrownHeight = 25;
    const treeCrownWidth = 10;

    /* Draw trunk */
    this.ctx!.fillStyle = "#7D833C";
    this.ctx!.fillRect(
      -treeTrunkWidth / 2,
      -treeTrunkHeight,
      treeTrunkWidth,
      treeTrunkHeight
    );

    /* Draw crown */
    this.ctx!.beginPath();
    this.ctx!.moveTo(-treeCrownWidth / 2, -treeTrunkHeight);
    this.ctx!.lineTo(0, -(treeTrunkHeight + treeCrownHeight));
    this.ctx!.lineTo(treeCrownWidth / 2, -treeTrunkHeight);
    this.ctx!.fillStyle = color;
    this.ctx!.fill();

    this.ctx!.restore();
  };

  getHillY = (
    windowX: number,
    baseHeight: number,
    amplitude: number,
    stretch: number
  ) => {
    const sineBaseY = window.innerHeight - baseHeight;
    return (
      Math.sinus(
        (this.sceneOffset * this.backgroundSpeedMultiplier + windowX) * stretch
      ) *
        amplitude +
      sineBaseY
    );
  };

  getTreeY = (x: number, baseHeight: number, amplitude: number) => {
    const sineBaseY = window.innerHeight - baseHeight;
    return Math.sinus(x) * amplitude + sineBaseY;
  };
}
