interface IBackground {
  result: any
  n: any
  tw: any
  image: any
}

export class Background implements IBackground {
  n: any

  result: any

  tw: any

  image: any

  gameEngine: any

  constructor(gameEngine: any) {
    this.gameEngine = gameEngine
    this.tw = this.gameEngine.WIDTH / 12
    this.result = this.gameEngine.renderToCanvas(
      this.tw,
      this.gameEngine.HEIGHT,
      this.firstRender
    )

    this.n = this.gameEngine.renderToCanvas(
      2 * this.gameEngine.WIDTH,
      this.gameEngine.HEIGHT,
      this.secondRender
    )
    this.image = this.n
  }

  update = () => {}

  firstRender = (ctx: any) => {
    ctx.fillStyle = '#383933'
    ctx.fillRect(0, 0, this.tw, this.gameEngine.HEIGHT)
    ctx.fillStyle = '#2a2b26'
    ctx.fillRect(0, 0, 10, this.gameEngine.HEIGHT)
    ctx.fillStyle = '#484235'
    ctx.fillRect(0, this.gameEngine.HEIGHT - 150, this.tw, 10)
    ctx.fillStyle = '#747362'
    ctx.fillRect(0, this.gameEngine.HEIGHT - 140, this.tw, 140)
  }

  secondRender = (ctx: any) => {
    const ptrn = ctx.createPattern(this.result, 'repeat')
    ctx.fillStyle = ptrn
    ctx.fillRect(0, 0, 2 * this.gameEngine.WIDTH, this.gameEngine.HEIGHT)
  }

  draw = (context: any) => {
    const startX = (this.gameEngine.distance % this.gameEngine.WIDTH) / 2
    context.save()
    context.translate(-startX, 0)
    context.drawImage(this.image, 0, 0)
    context.fill()
    context.restore()
  }
}
