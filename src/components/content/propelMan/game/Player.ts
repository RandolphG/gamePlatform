import { Explosion } from './Explosion'

const Math_TO_RAD = Math.PI / 180

interface IPlayer {
  skin: any
  img: HTMLImageElement
  gun: HTMLImageElement
  x: number
  y: number
  vx: number
  vy: number
  degree: number
  counter: number
  width: number
  height: number
  gunDegree: number
  currentGunDegree: number
  isRunning: boolean
  isJumping: boolean
  isLanding: boolean

  /* class methods */
  jump: () => void
  onJumping: () => void
  inWallBoundaries: () => void
  setGunDegree: (module: any) => void
}

export class Player implements IPlayer {
  skin: any

  img: HTMLImageElement

  gun: HTMLImageElement

  x: number

  y: number

  vx: number

  vy: number

  degree: number

  counter: number

  width: number

  height: number

  gunDegree: number

  currentGunDegree: number

  isRunning: boolean

  isJumping: boolean

  isLanding: boolean

  engine: any

  localY: number

  constructor(p: { x: number; y: number }, engine: any) {
    this.engine = engine
    this.skin = this
    this.img = new Image()
    this.gun = new Image()
    // this.x = 100;
    this.x = p.x
    // this.localY = 100;
    this.localY = p.y
    this.vx = 0
    this.vy = 0
    this.degree = 0
    this.counter = 0
    this.width = 7
    this.height = 7
    this.gunDegree = 0
    this.currentGunDegree = 0
    this.isRunning = true
    this.isJumping = false
    this.isLanding = false

    this.img.onload = () => {
      this.skin.width = this.width
      this.skin.height = this.height
      this.img.src = '../assets/razor.png'
      this.gun.src = '../assets/nader.png'
    }
    this.img.src = '../assets/razor.png'
    this.gun.src = '../assets/nader.png'
    return this
  }

  update = (delta: any) => {
    console.log(`updated players`)
    this.counter += 1 * delta

    if (this.currentGunDegree !== this.gunDegree) {
      this.currentGunDegree += 0.1 * (this.gunDegree - this.currentGunDegree)
    }

    if (this.isJumping) {
      this.degree += 0.5
      if (this.degree > 30) {
        this.degree = 30
      }
      if (this.vy > 0 && this.y >= this.engine.HEIGHT - 70) {
        this.onLanding()
        this.setGunDegree(0)
        this.isLanding = true
        this.isJumping = false
      }
    }

    if (this.isLanding) {
      this.degree += 10
      if (this.degree >= 355) {
        this.onLandingEnd()
        this.degree = 0
        this.isLanding = false
        this.isRunning = true
      }
    }

    this.vy += this.engine.GRAVITY
    this.y += this.vy * delta

    if (this.y > this.localY) {
      this.y = this.localY
    }
  }

  draw = (ctx: any) => {
    const { width } = this
    const { height } = this
    const { x } = this
    const y = this.y + 2.5 * Math.sin(8 * this.counter)

    if (y - height / 2 <= 0) {
      this.y = height / 2
      this.vy = 0
    }

    this.img.onload = () => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(this.degree * Math_TO_RAD)
      ctx.drawImage(this.img, -width / 2, -height / 2, width, height)
      console.log(`IMAGE Context`, ctx)
      ctx.restore()
      ctx.save()
      if (this.gunDegree === 180) {
        ctx.translate(x + 8, y + 15)
      } else {
        ctx.translate(x - 13, y + 5)
      }
      ctx.rotate(this.currentGunDegree * Math_TO_RAD)
      ctx.drawImage(this.gun, -5, -5)
      ctx.restore()
    }
  }

  jump = () => {
    if (!this.isLanding) {
      if (this.isRunning) {
        this.onJumping()
        this.setGunDegree(100)
        this.vy = -650
        this.isJumping = true
        this.isRunning = false
      } else if (this.isJumping && this.inWallBoundaries()) {
        this.onLanding()
        this.setGunDegree(180)
        this.vy = -450
      }
    }
  }

  onJumping = () => {
    this.engine.setSpeed(this.engine.JUMP_INCREASE, 1)
    this.engine.addToWorld(
      new Explosion(
        {
          x: this.x,
          y: this.y,
        },
        this.engine
      )
    )
  }

  setGunDegree = (module: any) => {
    this.gunDegree = module
  }

  inWallBoundaries = () => {
    const x = this.engine.distance + this.x
    const countRep = this.engine.walls.length

    for (let i = 0; i < countRep; i += 1) {
      if (
        this.y < this.engine.WALL_HEIGHT &&
        x > this.engine.walls[i].x - this.engine.walls[i].width / 2 &&
        x < this.engine.walls[i].x + this.engine.walls[i].width / 2
      ) {
        return true
      }
    }
    return false
  }

  onLanding = () => {
    this.engine.addToWorld(
      new Explosion(
        {
          x: this.x,
          y: this.y,
        },
        this.engine
      )
    )
    this.engine.setSpeed(this.engine.speed + this.engine.NADE_INCREASE, 1)
    this.engine.setScore(this.engine.score + 100)
    this.engine.setJumps(this.engine.jumps + 1)
  }

  onLandingEnd = () => {
    if (this.engine.score > this.engine.highscore) {
      this.engine.setHighscore(this.engine.score)
    }
    this.engine.setSpeed(this.engine.MIN_SPEED, 0.1)
    this.engine.setScore(0)
    this.engine.setJumps(0)
  }
}
