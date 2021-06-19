interface IWall {
  x: number
  width: number
  targetWidth: number
}

export class Wall implements IWall {
  targetWidth: number

  width: number

  x: number

  engine: any

  constructor(options: any, engine: any) {
    this.x = options.x
    this.width = options.width
    this.targetWidth = options.width
    this.engine = engine
  }

  spawn = () => {
    this.x = this.engine.lastWallX + this.engine.WIDTH
    if (this.engine.speed === this.engine.MAX_SPEED) {
      this.x -= this.engine.Math.randMinMax(0, 200, undefined)
    }
    this.engine.lastWallX = this.x
  }

  resize = (width: any) => {
    this.targetWidth = width
  }

  update = () => {
    if (this.width !== this.targetWidth) {
      this.width += 0.1 * (this.targetWidth - this.width)
    }
    if (this.engine.distance > this.x + this.width / 2) {
      this.spawn()
    }
  }

  draw = (ctx: any) => {
    const legendWidth = this.width
    const dimension = this.engine.WALL_HEIGHT
    ctx.save()
    ctx.translate(this.x - this.engine.distance, 0)
    ctx.fillStyle = this.engine.gradients.wall
    ctx.fillRect(-legendWidth / 2, 0, legendWidth, dimension)
    ctx.restore()
  }
}
