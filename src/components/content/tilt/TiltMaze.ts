export interface ITilt {
  hardMode: boolean;
  previousTimestamp: number | undefined;
  gameInProgress: boolean;
  mouseStartX: number | undefined;
  mouseStartY: number | undefined;
  accelerationX: number | undefined;
  accelerationY: number | undefined;
  frictionX: number | undefined;
  frictionY: number | undefined;
  pathW: number;
  wallW: number;
  walls: any[];
  ballSize: number;
  holeSize: number;
  debugMode: boolean;
  balls: any[];
  ballElements: any[];
  holeElements: any[];
  maxVelocity: number;
  holes: any[];
  mazeElement: HTMLElement | null;
  joystickHeadElement: HTMLElement | null;
  noteElement: HTMLElement | null;
}

export class TiltMaze implements ITilt {
  holes: any[];
  accelerationX: number | undefined;
  accelerationY: number | undefined;
  ballElements: any[];
  ballSize: number;
  balls: any[];
  debugMode: boolean;
  frictionX: number | undefined;
  frictionY: number | undefined;
  gameInProgress: boolean;
  hardMode: boolean;
  holeElements: any[];
  holeSize: number;
  mouseStartX: number | undefined;
  mouseStartY: number | undefined;
  pathW: number;
  previousTimestamp: number | undefined;
  wallW: number;
  walls: any[];
  joystickHeadElement: HTMLElement | null;
  mazeElement: HTMLElement | null;
  noteElement: HTMLElement | null;
  maxVelocity: number;

  constructor() {
    this.mazeElement = document.getElementById("maze");
    this.joystickHeadElement = document.getElementById("joystick-head");
    this.noteElement = document.getElementById("note");
    this.pathW = 25;
    this.wallW = 10;
    this.ballSize = 10;
    this.holeSize = 18;
    this.debugMode = false;
    this.balls = [];
    this.ballElements = [];
    this.holeElements = [];
    this.maxVelocity = 1.5;

    this.resetGame();
    this.drawBallsFirstTime();
    this.setWallData();
    this.drawWalls();
    this.setHole();

    this.joystickHeadElement!.addEventListener("mousedown", this.mouseDown);

    window.addEventListener("mousemove", this.mouseMove);

    window.addEventListener("keydown", this.keyDown);
  }

  // Draw balls for the first time
  minmax = (value: any, limit: any) => {
    return Math.max(Math.min(value, limit), -limit);
  };

  drawBallsFirstTime = () => {
    this.balls.forEach(({ x, y }) => {
      const ball = document.createElement("div");
      ball.setAttribute("class", "ball");
      ball.style.cssText = `left: ${x}px; top: ${y}px; `;

      this.mazeElement!.appendChild(ball);
      this.ballElements.push(ball);
    });
  };

  // Draw walls
  drawWalls = () => {
    this.walls.forEach(({ x, y, horizontal, length }) => {
      const wall = document.createElement("div");
      wall.setAttribute("class", "wall");
      wall.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: ${this.wallW}px;
      height: ${length}px;
      transform: rotate(${horizontal ? -90 : 0}deg);
    `;

      this.mazeElement!.appendChild(wall);
    });
  };

  setHole = () => {
    this.holes = [
      { column: 0, row: 5 },
      { column: 2, row: 0 },
      { column: 2, row: 4 },
      { column: 4, row: 6 },
      { column: 6, row: 2 },
      { column: 6, row: 8 },
      { column: 8, row: 1 },
      { column: 8, row: 2 },
    ].map((hole) => ({
      x:
        hole.column * (this.wallW + this.pathW) +
        (this.wallW / 2 + this.pathW / 2),
      y:
        hole.row * (this.wallW + this.pathW) +
        (this.wallW / 2 + this.pathW / 2),
    }));
  };

  // Wall metadata
  setWallData = () => {
    this.walls = [
      // Border
      { column: 0, row: 0, horizontal: true, length: 10 },
      { column: 0, row: 0, horizontal: false, length: 9 },
      { column: 0, row: 9, horizontal: true, length: 10 },
      { column: 10, row: 0, horizontal: false, length: 9 },

      // Horizontal lines starting in 1st column
      { column: 0, row: 6, horizontal: true, length: 1 },
      { column: 0, row: 8, horizontal: true, length: 1 },

      // Horizontal lines starting in 2nd column
      { column: 1, row: 1, horizontal: true, length: 2 },
      { column: 1, row: 7, horizontal: true, length: 1 },

      // Horizontal lines starting in 3rd column
      { column: 2, row: 2, horizontal: true, length: 2 },
      { column: 2, row: 4, horizontal: true, length: 1 },
      { column: 2, row: 5, horizontal: true, length: 1 },
      { column: 2, row: 6, horizontal: true, length: 1 },

      // Horizontal lines starting in 4th column
      { column: 3, row: 3, horizontal: true, length: 1 },
      { column: 3, row: 8, horizontal: true, length: 3 },

      // Horizontal lines starting in 5th column
      { column: 4, row: 6, horizontal: true, length: 1 },

      // Horizontal lines starting in 6th column
      { column: 5, row: 2, horizontal: true, length: 2 },
      { column: 5, row: 7, horizontal: true, length: 1 },

      // Horizontal lines starting in 7th column
      { column: 6, row: 1, horizontal: true, length: 1 },
      { column: 6, row: 6, horizontal: true, length: 2 },

      // Horizontal lines starting in 8th column
      { column: 7, row: 3, horizontal: true, length: 2 },
      { column: 7, row: 7, horizontal: true, length: 2 },

      // Horizontal lines starting in 9th column
      { column: 8, row: 1, horizontal: true, length: 1 },
      { column: 8, row: 2, horizontal: true, length: 1 },
      { column: 8, row: 3, horizontal: true, length: 1 },
      { column: 8, row: 4, horizontal: true, length: 2 },
      { column: 8, row: 8, horizontal: true, length: 2 },

      // Vertical lines after the 1st column
      { column: 1, row: 1, horizontal: false, length: 2 },
      { column: 1, row: 4, horizontal: false, length: 2 },

      // Vertical lines after the 2nd column
      { column: 2, row: 2, horizontal: false, length: 2 },
      { column: 2, row: 5, horizontal: false, length: 1 },
      { column: 2, row: 7, horizontal: false, length: 2 },

      // Vertical lines after the 3rd column
      { column: 3, row: 0, horizontal: false, length: 1 },
      { column: 3, row: 4, horizontal: false, length: 1 },
      { column: 3, row: 6, horizontal: false, length: 2 },

      // Vertical lines after the 4th column
      { column: 4, row: 1, horizontal: false, length: 2 },
      { column: 4, row: 6, horizontal: false, length: 1 },

      // Vertical lines after the 5th column
      { column: 5, row: 0, horizontal: false, length: 2 },
      { column: 5, row: 6, horizontal: false, length: 1 },
      { column: 5, row: 8, horizontal: false, length: 1 },

      // Vertical lines after the 6th column
      { column: 6, row: 4, horizontal: false, length: 1 },
      { column: 6, row: 6, horizontal: false, length: 1 },

      // Vertical lines after the 7th column
      { column: 7, row: 1, horizontal: false, length: 4 },
      { column: 7, row: 7, horizontal: false, length: 2 },

      // Vertical lines after the 8th column
      { column: 8, row: 2, horizontal: false, length: 1 },
      { column: 8, row: 4, horizontal: false, length: 2 },

      // Vertical lines after the 9th column
      { column: 9, row: 1, horizontal: false, length: 1 },
      { column: 9, row: 5, horizontal: false, length: 2 },
    ].map((wall) => ({
      x: wall.column * (this.pathW + this.wallW),
      y: wall.row * (this.pathW + this.wallW),
      horizontal: wall.horizontal,
      length: wall.length * (this.pathW + this.wallW),
    }));
  };

  keyDown = (event: any) => {
    // If not an arrow key or space or H was pressed then return
    if (![" ", "H", "h", "E", "e"].includes(event.key)) return;

    // If an arrow key was pressed then first prevent default
    event.preventDefault();

    // If space was pressed restart the game
    if (event.key == " ") {
      this.resetGame();
      return;
    }

    // Set Hard mode
    if (event.key == "H" || event.key == "h") {
      this.hardMode = true;
      this.resetGame();
      return;
    }

    // Set Easy mode
    if (event.key == "E" || event.key == "e") {
      this.hardMode = false;
      this.resetGame();
      return;
    }
  };

  mouseMove = (event: any) => {
    if (this.gameInProgress && this.mouseStartX && this.mouseStartY) {
      const mouseDeltaX = -this.minmax(this.mouseStartX - event.clientX, 15);

      const mouseDeltaY = -this.minmax(this.mouseStartY - event.clientY, 15);

      this.joystickHeadElement!.style.cssText = `
        left: ${mouseDeltaX}px;
        top: ${mouseDeltaY}px;
        animation: none;
        cursor: grabbing;
      `;

      const rotationY = mouseDeltaX * 0.8; // Max rotation = 12
      const rotationX = mouseDeltaY * 0.8;

      this.mazeElement!.style.cssText = `
        transform: rotateY(${rotationY}deg) rotateX(${-rotationX}deg)
      `;

      const gravity = 2;
      const friction = 0.01; // Coefficients of friction

      this.accelerationX = gravity * Math.sin((rotationY / 180) * Math.PI);
      this.accelerationY = gravity * Math.sin((rotationX / 180) * Math.PI);
      this.frictionX =
        gravity * Math.cos((rotationY / 180) * Math.PI) * friction;
      this.frictionY =
        gravity * Math.cos((rotationX / 180) * Math.PI) * friction;
    }
  };

  mouseDown = (event: any) => {
    if (!this.gameInProgress) {
      this.mouseStartX = event.clientX;
      this.mouseStartY = event.clientY;
      this.gameInProgress = true;
      window.requestAnimationFrame(this.main);
      const opacity = 0;
      this.noteElement!.style.opacity = opacity.toString();
      this.joystickHeadElement!.style.cssText = `
        animation: none;
        cursor: grabbing;
      `;
    }
  };

  distance2D = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  };

  // Angle between the two points
  getAngle = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
    let angle = Math.atan((p2.y - p1.y) / (p2.x - p1.x));
    if (p2.x - p1.x < 0) angle += Math.PI;
    return angle;
  };

  // The closest a ball and a wall cap can be
  closestItCanBe = (cap: { x: number; y: number }, ball: any) => {
    let angle = this.getAngle(cap, ball);

    const deltaX = Math.cos(angle) * (this.wallW / 2 + this.ballSize / 2);
    const deltaY = Math.sin(angle) * (this.wallW / 2 + this.ballSize / 2);

    return { x: cap.x + deltaX, y: cap.y + deltaY };
  };

  // Roll the ball around the wall cap
  rollAroundCap = (cap: any, ball: any) => {
    // The direction the ball can't move any further because the wall holds it back
    let impactAngle = this.getAngle(ball, cap);

    // The direction the ball wants to move based on it's velocity
    let heading = this.getAngle(
      { x: 0, y: 0 },
      { x: ball.velocityX, y: ball.velocityY }
    );

    // The angle between the impact direction and the ball's desired direction
    // The smaller this angle is, the bigger the impact
    // The closer it is to 90 degrees the smoother it gets (at 90 there would be no collision)
    let impactHeadingAngle = impactAngle - heading;

    // Velocity distance if not hit would have occurred
    const velocityMagnitude = this.distance2D(
      { x: 0, y: 0 },
      { x: ball.velocityX, y: ball.velocityY }
    );
    // Velocity component diagonal to the impact
    const velocityMagnitudeDiagonalToTheImpact =
      Math.sin(impactHeadingAngle) * velocityMagnitude;

    // How far should the ball be from the wall cap
    const closestDistance = this.wallW / 2 + this.ballSize / 2;

    const rotationAngle = Math.atan(
      velocityMagnitudeDiagonalToTheImpact / closestDistance
    );

    const deltaFromCap = {
      x: Math.cos(impactAngle + Math.PI - rotationAngle) * closestDistance,
      y: Math.sin(impactAngle + Math.PI - rotationAngle) * closestDistance,
    };

    const x = ball.x;
    const y = ball.y;
    const velocityX = ball.x - (cap.x + deltaFromCap.x);
    const velocityY = ball.y - (cap.y + deltaFromCap.y);
    const nextX = x + velocityX;
    const nextY = y + velocityY;

    return { x, y, velocityX, velocityY, nextX, nextY };
  };

  // Decreases the absolute value of a number but keeps it's sign, doesn't go below abs 0
  slow = (number: any, difference: any) => {
    if (Math.abs(number) <= difference) return 0;
    if (number > difference) return number - difference;
    return number + difference;
  };

  resetGame = () => {
    console.log(`resetGame`);
    this.previousTimestamp = undefined;
    this.gameInProgress = false;
    this.mouseStartX = undefined;
    this.mouseStartY = undefined;
    this.accelerationX = undefined;
    this.accelerationY = undefined;
    this.frictionX = undefined;
    this.frictionY = undefined;

    this.mazeElement!.style.cssText = `
      transform: rotateY(0deg) rotateX(0deg)
    `;

    this.joystickHeadElement!.style.cssText = `
      left: 0;
      top: 0;
      animation: glow;
      cursor: grab;
    `;

    if (this.hardMode) {
      this.noteElement!.innerHTML = `Click the joystick to start!
        <p>Hard mode, Avoid black holes. Back to easy mode? Press E</p>`;
    } else {
      this.noteElement!.innerHTML = `Click the joystick to start!
        <p>Move every ball to the center. Ready for hard mode? Press H</p>`;
    }
    const opacity = 1;
    this.noteElement!.style!.opacity = opacity.toString();

    this.balls = [
      { column: 0, row: 0 },
      { column: 9, row: 0 },
      { column: 0, row: 8 },
      { column: 9, row: 8 },
    ].map((ball) => ({
      x:
        ball.column * (this.wallW + this.pathW) +
        (this.wallW / 2 + this.pathW / 2),
      y:
        ball.row * (this.wallW + this.pathW) +
        (this.wallW / 2 + this.pathW / 2),
      velocityX: 0,
      velocityY: 0,
    }));

    if (this.ballElements.length) {
      this.balls.forEach(({ x, y }, index) => {
        this.ballElements[index].style.cssText = `left: ${x}px; top: ${y}px; `;
      });
    }

    // Remove previous hole elements
    this.holeElements.forEach((holeElement) => {
      this.mazeElement!.removeChild(holeElement);
    });
    this.holeElements = [];

    // Reset hole elements if hard mode
    if (this.hardMode) {
      this.holes.forEach((x: any, y: any) => {
        const ball = document.createElement("div");
        ball.setAttribute("class", "black-hole");
        ball.style.cssText = `left: ${x}px; top: ${y}px; `;

        this.mazeElement!.appendChild(ball);
        this.holeElements.push(ball);
      });
    }
  };

  main = (timestamp: any) => {
    // It is possible to reset the game mid-game. This case the look should stop
    if (!this.gameInProgress) return;

    if (this.previousTimestamp === undefined) {
      this.previousTimestamp = timestamp;
      window.requestAnimationFrame(this.main);
      return;
    }

    // Time passed since last cycle divided by 16
    // This function gets called every 16 ms on average so dividing by 16 will result in 1
    const timeElapsed = (timestamp - this.previousTimestamp) / 16;

    try {
      // If mouse didn't move yet don't do anything
      if (
        this.accelerationX != undefined &&
        this.accelerationY != undefined &&
        this.frictionX != undefined &&
        this.frictionY != undefined
      ) {
        const velocityChangeX = this.accelerationX * timeElapsed;
        const velocityChangeY = this.accelerationY * timeElapsed;
        const frictionDeltaX = this.frictionX * timeElapsed;
        const frictionDeltaY = this.frictionY * timeElapsed;

        this.balls.forEach((ball) => {
          if (velocityChangeX == 0) {
            // No rotation, the plane is flat
            // On flat surface friction can only slow down, but not reverse movement
            ball.velocityX = this.slow(ball.velocityX, frictionDeltaX);
          } else {
            ball.velocityX = ball.velocityX + velocityChangeX;
            ball.velocityX = Math.max(Math.min(ball.velocityX, 1.5), -1.5);
            ball.velocityX =
              ball.velocityX - Math.sign(velocityChangeX) * frictionDeltaX;
            ball.velocityX = this.minmax(ball.velocityX, this.maxVelocity);
          }

          if (velocityChangeY === 0) {
            // No rotation, the plane is flat
            // On flat surface friction can only slow down, but not reverse movement
            ball.velocityY = this.slow(ball.velocityY, frictionDeltaY);
          } else {
            ball.velocityY = ball.velocityY + velocityChangeY;
            ball.velocityY =
              ball.velocityY - Math.sign(velocityChangeY) * frictionDeltaY;
            //@ts-ignore
            ball.velocityY = this.minmax(ball.velocityY, this.maxVelocity);
          }

          // Preliminary next ball position, only becomes true if no hit occurs
          // Used only for hit testing, does not mean that the ball will reach this position
          ball.nextX = ball.x + ball.velocityX;
          ball.nextY = ball.y + ball.velocityY;

          if (this.debugMode) console.log("tick", ball);

          this.walls.forEach((wall, wi) => {
            if (wall.horizontal) {
              // Horizontal wall

              if (
                ball.nextY + this.ballSize / 2 >= wall.y - this.wallW / 2 &&
                ball.nextY - this.ballSize / 2 <= wall.y + this.wallW / 2
              ) {
                // Ball got within the strip of the wall
                // (not necessarily hit it, could be before or after)

                const wallStart = {
                  x: wall.x,
                  y: wall.y,
                };
                const wallEnd = {
                  x: wall.x + wall.length,
                  y: wall.y,
                };

                if (
                  ball.nextX + this.ballSize / 2 >=
                    wallStart.x - this.wallW / 2 &&
                  ball.nextX < wallStart.x
                ) {
                  // Ball might hit the left cap of a horizontal wall
                  const distance = this.distance2D(wallStart, {
                    x: ball.nextX,
                    y: ball.nextY,
                  });
                  if (distance < this.ballSize / 2 + this.wallW / 2) {
                    if (this.debugMode && wi > 4)
                      console.warn("too close h head", distance, ball);

                    // Ball hits the left cap of a horizontal wall
                    const closest = this.closestItCanBe(wallStart, {
                      x: ball.nextX,
                      y: ball.nextY,
                    });
                    const rolled = this.rollAroundCap(wallStart, {
                      x: closest.x,
                      y: closest.y,
                      velocityX: ball.velocityX,
                      velocityY: ball.velocityY,
                    });

                    Object.assign(ball, rolled);
                  }
                }

                if (
                  ball.nextX - this.ballSize / 2 <=
                    wallEnd.x + this.wallW / 2 &&
                  ball.nextX > wallEnd.x
                ) {
                  // Ball might hit the right cap of a horizontal wall
                  const distance = this.distance2D(wallEnd, {
                    x: ball.nextX,
                    y: ball.nextY,
                  });
                  if (distance < this.ballSize / 2 + this.wallW / 2) {
                    if (this.debugMode && wi > 4)
                      console.warn("too close h tail", distance, ball);

                    // Ball hits the right cap of a horizontal wall
                    const closest = this.closestItCanBe(wallEnd, {
                      x: ball.nextX,
                      y: ball.nextY,
                    });
                    const rolled = this.rollAroundCap(wallEnd, {
                      x: closest.x,
                      y: closest.y,
                      velocityX: ball.velocityX,
                      velocityY: ball.velocityY,
                    });

                    Object.assign(ball, rolled);
                  }
                }

                if (ball.nextX >= wallStart.x && ball.nextX <= wallEnd.x) {
                  // The ball got inside the main body of the wall
                  if (ball.nextY < wall.y) {
                    // Hit horizontal wall from top
                    ball.nextY = wall.y - this.wallW / 2 - this.ballSize / 2;
                  } else {
                    // Hit horizontal wall from bottom
                    ball.nextY = wall.y + this.wallW / 2 + this.ballSize / 2;
                  }
                  ball.y = ball.nextY;
                  ball.velocityY = -ball.velocityY / 3;

                  if (this.debugMode && wi > 4)
                    console.error("crossing h line, HIT", ball);
                }
              }
            } else {
              // Vertical wall

              if (
                ball.nextX + this.ballSize / 2 >= wall.x - this.wallW / 2 &&
                ball.nextX - this.ballSize / 2 <= wall.x + this.wallW / 2
              ) {
                // Ball got within the strip of the wall
                // (not necessarily hit it, could be before or after)

                const wallStart = {
                  x: wall.x,
                  y: wall.y,
                };
                const wallEnd = {
                  x: wall.x,
                  y: wall.y + wall.length,
                };

                if (
                  ball.nextY + this.ballSize / 2 >=
                    wallStart.y - this.wallW / 2 &&
                  ball.nextY < wallStart.y
                ) {
                  // Ball might hit the top cap of a horizontal wall
                  const distance = this.distance2D(wallStart, {
                    x: ball.nextX,
                    y: ball.nextY,
                  });
                  if (distance < this.ballSize / 2 + this.wallW / 2) {
                    if (this.debugMode && wi > 4)
                      console.warn("too close v head", distance, ball);

                    // Ball hits the left cap of a horizontal wall
                    const closest = this.closestItCanBe(wallStart, {
                      x: ball.nextX,
                      y: ball.nextY,
                    });
                    const rolled = this.rollAroundCap(wallStart, {
                      x: closest.x,
                      y: closest.y,
                      velocityX: ball.velocityX,
                      velocityY: ball.velocityY,
                    });

                    Object.assign(ball, rolled);
                  }
                }

                if (
                  ball.nextY - this.ballSize / 2 <=
                    wallEnd.y + this.wallW / 2 &&
                  ball.nextY > wallEnd.y
                ) {
                  // Ball might hit the bottom cap of a horizontal wall
                  const distance = this.distance2D(wallEnd, {
                    x: ball.nextX,
                    y: ball.nextY,
                  });
                  if (distance < this.ballSize / 2 + this.wallW / 2) {
                    if (this.debugMode && wi > 4)
                      console.warn("too close v tail", distance, ball);

                    // Ball hits the right cap of a horizontal wall
                    const closest = this.closestItCanBe(wallEnd, {
                      x: ball.nextX,
                      y: ball.nextY,
                    });
                    const rolled = this.rollAroundCap(wallEnd, {
                      x: closest.x,
                      y: closest.y,
                      velocityX: ball.velocityX,
                      velocityY: ball.velocityY,
                    });

                    Object.assign(ball, rolled);
                  }
                }

                if (ball.nextY >= wallStart.y && ball.nextY <= wallEnd.y) {
                  // The ball got inside the main body of the wall
                  if (ball.nextX < wall.x) {
                    // Hit vertical wall from left
                    ball.nextX = wall.x - this.wallW / 2 - this.ballSize / 2;
                  } else {
                    // Hit vertical wall from right
                    ball.nextX = wall.x + this.wallW / 2 + this.ballSize / 2;
                  }
                  ball.x = ball.nextX;
                  ball.velocityX = -ball.velocityX / 3;

                  if (this.debugMode && wi > 4)
                    console.error("crossing v line, HIT", ball);
                }
              }
            }
          });

          // Detect is a ball fell into a hole
          if (this.hardMode) {
            this.holes.forEach((hole: any, hi: any) => {
              const distance = this.distance2D(hole, {
                x: ball.nextX,
                y: ball.nextY,
              });

              if (distance <= this.holeSize / 2) {
                // The ball fell into a hole
                this.holeElements[hi].style.backgroundColor = "red";
                throw Error("The ball fell into a hole");
              }
            });
          }

          // Adjust ball metadata
          ball.x = ball.x + ball.velocityX;
          ball.y = ball.y + ball.velocityY;
        });

        // Move balls to their new position on the UI
        this.balls.forEach(({ x, y }, index) => {
          this.ballElements[
            index
          ].style.cssText = `left: ${x}px; top: ${y}px; `;
        });
      }

      const point = { x: 350 / 2, y: 315 / 2 };

      // Win detection
      if (this.balls.every((ball) => this.distance2D(ball, point) < 65 / 2)) {
        this.noteElement!.innerHTML = `Congrats, you did it!
        ${!this.hardMode ? "<p>Press H for hard mode</p>" : ""}
        <p>
          Follow me
          <a href="#" , target="_blank">
            @poplogics</a>
        </p>`;
        const opacity = 1;
        this.noteElement!.style.opacity = opacity.toString();
        this.gameInProgress = false;
      } else {
        this.previousTimestamp = timestamp;
        window.requestAnimationFrame(this.main);
      }
    } catch (error) {
      if (error.message == "The ball fell into a hole") {
        this.noteElement!.innerHTML = `A ball fell into a black hole! Press space to reset the game.
        <p>
          Back to easy? Press E
        </p>`;
        const opacity = 1;
        this.noteElement!.style.opacity = opacity.toString();
        this.gameInProgress = false;
      } else throw error;
    }
  };
}
