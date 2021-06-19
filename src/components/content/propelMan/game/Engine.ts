import { Background } from './Background'
import { Light } from './Light'
import { Player } from './Player'
import { Wall } from './Wall'

declare global {
  interface Window {
    requestAnimationFrame: (
      callback: any | FrameRequestCallback
    ) => void | number
  }
}

interface IEngine {
  ctx: any
  init: () => void
  canvas: any
  d0: Date
  particles: any[]
  requestAnimationFrame: (callback: any | FrameRequestCallback) => void | number
}

export class Engine implements IEngine {
  ctx: any

  canvas: any

  d0: any

  particles: any[]

  gradients:
    | {
        shadow: any
        wall: any
      }
    | {}

  WIDTH: number

  HEIGHT: number

  WALL_HEIGHT: number

  GRAVITY: number

  MIN_SPEED: number

  MAX_SPEED: number

  MIN_WALL_WIDTH: number

  MAX_WALL_WIDTH: number

  MAX_JUMPS: number

  NADE_INCREASE: number

  JUMP_INCREASE: number

  score: number

  highscore: number

  jumps: number

  distance: number

  speed: number

  targetSpeed: number

  acceleration: number

  walls: any

  lastWallX: number

  player: Player

  constructor() {
    this.canvas = document.getElementById('game')
    this.ctx = this.canvas.getContext('2d')
    this.d0 = new Date()
    this.particles = []

    /* initialization */
    this.WIDTH = this.canvas.width
    this.HEIGHT = this.canvas.height
    this.WALL_HEIGHT = this.HEIGHT - 75
    this.GRAVITY = 25
    this.MIN_SPEED = 100
    this.MAX_SPEED = 1100
    this.MIN_WALL_WIDTH = 60
    this.MAX_WALL_WIDTH = this.WIDTH
    this.MAX_JUMPS = 12
    this.NADE_INCREASE = 100
    this.JUMP_INCREASE = 300
    this.score = 0
    this.highscore = 0
    this.jumps = 0
    this.distance = 0
    this.speed = 0
    this.targetSpeed = 0
    this.acceleration = 0.05
    this.walls = []
    this.gradients = {}
    this.lastWallX = 0
    this.$('#title').addEventListener('mousedown', this.mouseDown)
  }

  $(name: any) {
    return document.querySelector(name)
  }

  mouseDown = () => {
    this.$('#title').classList.add('hidden')
    this.update()
  }

  init = () => {
    const shadow = this.ctx.createLinearGradient(
      0,
      this.WALL_HEIGHT,
      0,
      this.HEIGHT
    )
    const now = this.ctx.createLinearGradient(0, 0, 0, this.WALL_HEIGHT)
    shadow.addColorStop(0, '#5d5c4f')
    shadow.addColorStop(1, '#747362')
    now.addColorStop(0, '#838678')
    now.addColorStop(0.33, '#929585')
    now.addColorStop(0.33, '#676b52')
    now.addColorStop(0.66, '#676b52')
    now.addColorStop(0.66, '#545743')
    now.addColorStop(0.68, '#929585')
    now.addColorStop(1, '#838678')
    this.gradients = {
      shadow,
      wall: now,
    }
  }

  update = () => {
    this.init()
    this.setSpeed(this.MIN_SPEED, 0)
    this.addToWorld(new Background(this))

    const indexOfRequirement = 3

    for (let i = 0; i < indexOfRequirement; i += 1) {
      this.walls[i] = new Wall(
        {
          x: this.WIDTH + this.WIDTH * i,
          width: this.WIDTH,
        },
        this
      )

      this.addToWorld(this.walls[i])
      this.lastWallX = this.walls[i].x
    }
    this.addToWorld(new Light(this))
    this.player = new Player(
      {
        x: 100,
        y: this.HEIGHT - 60,
      },
      this
    )
    this.addToWorld(this.player)
    this.$('#game').addEventListener('mousedown', this.playerJump)
    this.step()
  }

  playerJump = () => {
    this.player.jump()
  }

  step = () => {
    const d: any = new Date()
    const delta = (d - this.d0) / 1000
    const l = this.particles.length

    this.distance += delta * this.speed

    if (this.speed !== this.targetSpeed) {
      this.speed += (this.targetSpeed - this.speed) * this.acceleration
    }

    this.canvas.width = this.WIDTH

    for (let i = 0; i < l; i += 1) {
      // console.log(`\nthis.particles[${i}]`, this.particles[i]);
      this.particles[i].update(delta)
      this.particles[i].draw(this.ctx)
    }

    this.d0 = d
    this.requestAnimationFrame(this.step)
  }

  addToWorld = (i: any) => {
    this.particles.push(i)
  }

  setSpeed = (speed: number, delay: number) => {
    if (speed > this.MAX_SPEED) {
      speed = this.MAX_SPEED
    }
    this.targetSpeed = speed
    this.acceleration = delay || this.acceleration
  }

  setScore = (val: any) => {
    let sub: any = val - this.score
    if (sub > 0) {
      sub = `+${sub}`
    }
    this.score = val
    this.$('#score').innerHTML = val
    this.$('#increase').style.top = `${this.player.y - 80}px`
    this.$('#increase').innerHTML = `<div class="ding">${sub}</div>`
  }

  setHighscore = (score: any) => {
    this.highscore = score
    this.$('#highscore').innerHTML = score
    this.$('#newhighscore').classList.add('visible')
    window.setTimeout(this.removeHighScore, 1500)
  }

  removeHighScore = () => {
    this.$('#newhighscore').classList.remove('visible')
  }

  resizeWalls = () => {
    const normalWidth =
      this.MIN_WALL_WIDTH +
      (1 - this.jumps / this.MAX_JUMPS) *
        (this.MAX_WALL_WIDTH - this.MIN_WALL_WIDTH)

    const countRep = this.walls.length
    for (let i = 0; i < countRep; i += 1) {
      this.walls[i].resize(normalWidth)
    }
  }

  renderToCanvas = (
    width: number,
    height: number,
    render: any,
    context: any
  ) => {
    const scaleCanvas = document.createElement('canvas')

    if (!context) {
      context = {}
    }

    scaleCanvas.width = width
    scaleCanvas.height = height
    render.call(context, scaleCanvas.getContext('2d'))
    return scaleCanvas

    /*
    return (
      "undefined" == typeof context && (context = {}),
      (scaleCanvas.width = width),
      (scaleCanvas.height = height),
      render.call(context, scaleCanvas.getContext("2d")),
      scaleCanvas
    );
    */
  }

  requestAnimationFrame = (callback: any) => {
    window.setTimeout(callback, 1000 / 60)
  }
}
