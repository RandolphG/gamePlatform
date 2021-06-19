import * as THREE from 'three'
import { TweenMax, Power4 } from 'gsap/all'
import { Hero, IHero } from './Hero'
import { IMaterials, Materials } from './Materials'
import { IMonster, Monster } from './Monster'
import { Carrot, ICarrot } from './Carrot'
import { Hedgehog, IHedgehog } from './Hedgehog'
import { Tree } from './Tree'
import { BonusParticles, IBonusParticles } from './BonusParticles'

interface IMain {
  highScore: number
  aspectRatio: number
  audio: HTMLAudioElement
  button: HTMLElement | null
  camera: THREE.PerspectiveCamera
  cameraPosGame: number
  cameraPosGameOver: number
  collisionBonus: number
  collisionObstacle: number
  container: HTMLElement | null
  distance: number
  farPlane: number
  fieldOfView: number
  floor: THREE.Group
  floorGrass: THREE.Mesh
  floorRadius: number
  floorRotation: number
  floorShadow: THREE.Mesh
  globalLight: THREE.AmbientLight
  initSpeed: number
  level: number
  levelInterval: any
  levelUpdateFreq: number
  malusClearAlpha: number
  malusClearColor: number
  monsterAcceleration: number
  monsterPos: number
  monsterPosTarget: number
  nearPlane: number
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  shadowLight: THREE.DirectionalLight
  window: Window
  HEIGHT: number
  WIDTH: number
  windowHalfX: number
  windowHalfY: number
  mousePos: {
    x: number
    y: number
  }
  fieldGameOver: HTMLElement | null
  fieldHighScore: HTMLElement | null
  fieldDistance: any
  /* characters */
  hero: IHero
  monster: IMonster
  PI: Number
  carrot: ICarrot
  obstacle: IHedgehog
  bonusParticles: IBonusParticles
  /* class methods */
  init: (event: Event) => void
  initScreenAnd3D: () => void
  handleWindowResize: () => void
  handleMouseDown: (event: Event) => void
  initUI: () => void
  createLights: () => void
  createFloor: () => void
  createHero: () => void
  createCarrot: () => void
  createMonster: () => void
  createObstacle: () => void
  createBonusParticles: () => void
  checkCollision: () => void
  gameOver: () => void
  replay: () => void
  resetGame: () => void
  updateMonsterPosition: () => void
  updateCarrotPosition: () => void
  updateObstaclePosition: () => void
  updateFloorRotation: () => void
  getBonus: () => void
  getMalus: () => void
  updateDistance: () => void
  updateLevel: () => void
  render: () => void
  pauseOrPlay: () => void
  createCamera: () => void
  createFir: () => void
}

export class Main implements IMain {
  /* SCREEN & MOUSE VARIABLES */
  HEIGHT: number

  WIDTH: number

  windowHalfX: number

  windowHalfY: number

  mousePos: {
    x: number
    y: number
  }

  /* 3D OBJECTS VARIABLES */
  hero: IHero

  monster: IMonster

  carrot: ICarrot

  obstacle: IHedgehog

  bonusParticles: IBonusParticles

  /* OTHER VARIABLES */
  button: HTMLElement | null

  fieldGameOver: HTMLElement | null

  fieldDistance: any

  fieldHighScore: any

  PI: Number

  window: Window

  material: IMaterials

  aspectRatio: number

  audio: HTMLAudioElement

  camera: THREE.PerspectiveCamera

  cameraPosGame: number

  cameraPosGameOver: number

  collisionBonus: number

  collisionObstacle: number

  container: HTMLElement | null

  distance: number

  farPlane: number

  fieldOfView: number

  floor: THREE.Group

  floorGrass: THREE.Mesh

  floorRadius: number

  floorRotation: number

  floorShadow: THREE.Mesh

  globalLight: THREE.AmbientLight

  initSpeed: number

  level: number

  levelInterval: any

  levelUpdateFreq: number

  malusClearAlpha: number

  malusClearColor: number

  monsterAcceleration: number

  monsterPos: number

  monsterPosTarget: number

  nearPlane: number

  renderer: THREE.WebGLRenderer

  scene: THREE.Scene

  shadowLight: THREE.DirectionalLight

  /* static variables */
  static delta: number

  static gameStatus: string

  static clock: THREE.Clock

  static speed: number

  static maxSpeed: number

  polyCountValue: HTMLElement | null

  drawCallsValue: HTMLElement | null

  texturesInMemoryValue: HTMLElement | null

  geometriesInMemoryValue: HTMLElement | null

  highScore: any

  constructor() {
    this.material = new Materials()
    Main.delta = 0
    Main.maxSpeed = 48
    Main.speed = 6
    Main.gameStatus = 'play'
    Main.clock = new THREE.Clock()
    this.highScore = localStorage.getItem('highScore')
    this.fieldHighScore = localStorage.getItem('highScore')
    this.floorRadius = 200
    this.distance = 0
    this.level = 1
    this.levelUpdateFreq = 3000
    this.initSpeed = 5
    this.monsterPos = 0.65
    this.monsterPosTarget = 0.65
    this.floorRotation = 0
    this.collisionObstacle = 10
    this.collisionBonus = 20
    this.cameraPosGame = 160
    this.cameraPosGameOver = 260
    this.monsterAcceleration = 0.004
    this.malusClearColor = 0xb44b39
    this.malusClearAlpha = 0
    window.addEventListener('load', this.init, false)
  }

  static getWorldVerticesPos = (mesh: any) => {
    if (mesh.isMesh) {
      const { position } = mesh.geometry.attributes
      const vector = new THREE.Vector3()

      for (let i = 0, l = position.count; i < l; i++) {
        vector.fromBufferAttribute(position, i)
        vector.applyMatrix4(mesh.matrixWorld)
        // console.log(`vector`, vector);
      }
    }
  }

  pauseOrPlay = (): void => {
    // console.log(`pauseOrPlay()`, this.audio);
    if (this.audio) {
      // console.log`audio`;
      if (!this.audio.paused) {
        this.audio.pause()
      } else {
        // this.audio.play().then((r) => console.log`audio play`);
      }
    }
  }

  init = () => {
    // console.log(`fun _> init`);
    this.initScreenAnd3D()
    this.createLights()
    this.createFloor()
    this.createHero()
    this.createMonster()
    this.createFir()
    this.createCarrot()
    this.createBonusParticles()
    this.createObstacle()
    this.initUI()
    this.resetGame()
    this.loop()
  }

  /* INIT THREE JS, SCREEN AND MOUSE EVENTS */
  initScreenAnd3D = () => {
    // console.log(`fun _> initScreenAnd3D`);
    this.HEIGHT = window.innerHeight
    this.WIDTH = window.innerWidth
    this.windowHalfX = this.WIDTH / 2
    this.windowHalfY = this.HEIGHT / 2
    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.Fog(0xd6eae6, 160, 350)

    this.createCamera()
    this.createRenderer()

    this.container = document.getElementById('world')
    this.button = document.getElementById('button')
    this.container!.appendChild(this.renderer.domElement)
    window.addEventListener('resize', this.handleWindowResize, false)
    document.addEventListener('mousedown', this.handleMouseDown, false)
    document.addEventListener('touchend', this.handleMouseDown, false)

    this.button!.addEventListener('click', this.pauseOrPlay)
    this.audio = new Audio(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/264161/Antonio-Vivaldi-Summer_01.mp3'
    )
  }

  handleWindowResize = () => {
    // console.log(`fun _> handleWindowResize`);
    this.HEIGHT = window.innerHeight
    this.WIDTH = window.innerWidth
    this.windowHalfX = this.WIDTH / 2
    this.windowHalfY = this.HEIGHT / 2
    this.renderer.setSize(this.WIDTH, this.HEIGHT)
    this.camera.aspect = this.WIDTH / this.HEIGHT
    this.camera.updateProjectionMatrix()
  }

  handleMouseDown = () => {
    // console.log(`fun _> handleMouseDown`);
    if (Main.gameStatus == 'play') this.hero.jump()
    else if (Main.gameStatus == 'readyToReplay') {
      this.replay()
    }
  }

  createCamera = () => {
    // console.log(`fun _> createCamera`);
    this.aspectRatio = this.WIDTH / this.HEIGHT
    this.fieldOfView = 50
    this.nearPlane = 10
    this.farPlane = 2000

    /* mobile camera */
    if (window.innerWidth <= 768) {
      this.fieldOfView = 50
      this.farPlane = 1200
      /* 769px - 1080px screen width camera */
    } else if (window.innerWidth >= 769 && window.innerWidth <= 1080) {
      this.fieldOfView = 50
      this.farPlane = 1475
      /* > 1080px screen width res camera */
    } else {
      this.fieldOfView = 40
      this.farPlane = 1800
    }

    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      this.aspectRatio,
      this.nearPlane,
      this.farPlane
    )

    this.camera.position.x = 0
    this.camera.position.z = this.cameraPosGame
    this.camera.position.y = 30
    this.camera.lookAt(new THREE.Vector3(0, 30, 0))
  }

  createRenderer = () => {
    // console.log(`fun _> createRenderer`);
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setClearColor(this.malusClearColor, this.malusClearAlpha)

    this.renderer.setSize(this.WIDTH, this.HEIGHT)
    this.renderer.shadowMap.enabled = true
  }

  createLights = () => {
    // console.log(`fun _> createLights`);
    this.globalLight = new THREE.AmbientLight(0xffffff, 0.9)
    this.shadowLight = new THREE.DirectionalLight(0xffffff, 1)
    this.shadowLight.position.set(-30, 40, 20)
    this.shadowLight.castShadow = true
    this.shadowLight.shadow.camera.left = -400
    this.shadowLight.shadow.camera.right = 400
    this.shadowLight.shadow.camera.top = 400
    this.shadowLight.shadow.camera.bottom = -400
    this.shadowLight.shadow.camera.near = 1
    this.shadowLight.shadow.camera.far = 2000
    this.shadowLight.shadow.mapSize.width =
      this.shadowLight.shadow.mapSize.height = 2048
    this.scene.add(this.globalLight)
    this.scene.add(this.shadowLight)
  }

  createFloor = () => {
    // console.log(`fun _> createFloor`);
    this.floorShadow = new THREE.Mesh(
      new THREE.SphereGeometry(this.floorRadius, 50, 50),
      new THREE.MeshPhongMaterial({
        color: 0x7abf8e,
        specular: 0x000000,
        shininess: 1,
        transparent: true,
        opacity: 0.5,
      })
    )
    this.floorShadow.receiveShadow = true

    this.floorGrass = new THREE.Mesh(
      new THREE.SphereGeometry(this.floorRadius - 0.5, 50, 50),
      new THREE.MeshBasicMaterial({
        color: 0x7abf8e,
      })
    )
    this.floorGrass.receiveShadow = false

    this.floor = new THREE.Group()
    this.floor.position.y = -this.floorRadius

    this.floor.add(this.floorShadow)
    this.floor.add(this.floorGrass)
    this.scene.add(this.floor)
  }

  static removeParticle(p: any) {
    // console.log(`fun _> removeParticle`);
    p.visible = false
  }

  createHero = () => {
    // console.log(`fun _> createHero`);
    this.hero = new Hero()
    this.hero.mesh.rotation.y = Math.PI / 2
    this.scene.add(this.hero.mesh)
    this.hero.nod()
  }

  createMonster = () => {
    // console.log(`fun _> createMonster`);
    this.monster = new Monster()
    this.monster.mesh.position.z = 20
    this.scene.add(this.monster.mesh)
    this.updateMonsterPosition()
  }

  updateMonsterPosition = () => {
    // console.log(`fun _> updateMonsterPosition`);
    this.monster.run()
    this.monsterPosTarget -= Main.delta * this.monsterAcceleration
    this.monsterPos += (this.monsterPosTarget - this.monsterPos) * Main.delta
    if (this.monsterPos < 0.56) {
      this.gameOver()
    }

    const angle = Math.PI * this.monsterPos
    this.monster.mesh.position.y =
      -this.floorRadius + Math.sin(angle) * (this.floorRadius + 12)
    this.monster.mesh.position.x = Math.cos(angle) * (this.floorRadius + 15)
    this.monster.mesh.rotation.z = -Math.PI / 2 + angle
  }

  gameOver = () => {
    console.log(`fun _> gameOver`)
    this.fieldGameOver!.className = 'show'
    Main.gameStatus = 'gameOver'
    this.monster.sit()
    this.hero.hang()
    this.monster.heroHolder.add(this.hero.mesh)
    TweenMax.to(this, 1, { speed: 0 })
    TweenMax.to(this.camera.position, 3, {
      z: this.cameraPosGameOver,
      y: 60,
      x: -30,
    })
    this.carrot.mesh.visible = false
    this.obstacle.mesh.visible = false
    clearInterval(this.levelInterval)
  }

  replay = () => {
    Main.gameStatus = 'preparingToReplay'
    this.fieldGameOver!.className = ''

    // @ts-ignore
    TweenMax.killTweensOf(this.monster.pawFL.position)
    // @ts-ignore
    TweenMax.killTweensOf(this.monster.pawFR.position)
    // @ts-ignore
    TweenMax.killTweensOf(this.monster.pawBL.position)
    // @ts-ignore
    TweenMax.killTweensOf(this.monster.pawBR.position)
    // @ts-ignore
    TweenMax.killTweensOf(this.monster.tail.rotation)
    // @ts-ignore
    TweenMax.killTweensOf(this.monster.head.rotation)
    // @ts-ignore
    TweenMax.killTweensOf(this.monster.eyeL.scale)
    // @ts-ignore
    TweenMax.killTweensOf(this.monster.eyeR.scale)

    this.monster.tail.rotation.y = 0

    TweenMax.to(this.camera.position, 3, {
      z: this.cameraPosGame,
      x: 0,
      y: 30,
      ease: Power4.easeInOut,
    })
    TweenMax.to(this.monster.torso.rotation, 2, {
      x: 0,
      ease: Power4.easeInOut,
    })
    TweenMax.to(this.monster.torso.position, 2, {
      y: 0,
      ease: Power4.easeInOut,
    })
    TweenMax.to(this.monster.pawFL.rotation, 2, {
      x: 0,
      ease: Power4.easeInOut,
    })
    TweenMax.to(this.monster.pawFR.rotation, 2, {
      x: 0,
      ease: Power4.easeInOut,
    })
    TweenMax.to(this.monster.mouth.rotation, 2, {
      x: 0.5,
      ease: Power4.easeInOut,
    })

    TweenMax.to(this.monster.head.rotation, 2, {
      y: 0,
      x: -0.3,
      ease: Power4.easeInOut,
    })

    TweenMax.to(this.hero.mesh.position, 2, { x: 20, ease: Power4.easeInOut })
    TweenMax.to(this.hero.head.rotation, 2, {
      x: 0,
      y: 0,
      ease: Power4.easeInOut,
    })
    TweenMax.to(this.monster.mouth.rotation, 2, {
      x: 0.2,
      ease: Power4.easeInOut,
    })
    TweenMax.to(this.monster.mouth.rotation, 1, {
      x: 0.4,
      ease: Power4.easeIn,
      delay: 1,
      onComplete: this.resetGame,
    })
  }

  createFir = () => {
    // console.log(`fun _> createFirs`);
    const nTrees = 100
    for (let i = 0; i < nTrees; i++) {
      const phi = (i * (Math.PI * 2)) / nTrees
      let theta = Math.PI / 2

      theta +=
        Math.random() > 0.05
          ? 0.25 + Math.random() * 0.3
          : -0.35 - Math.random() * 0.1

      const fir = new Tree()

      fir.mesh.position.x = Math.sin(theta) * Math.cos(phi) * this.floorRadius
      fir.mesh.position.y =
        Math.sin(theta) * Math.sin(phi) * (this.floorRadius - 10)
      fir.mesh.position.z = Math.cos(theta) * this.floorRadius

      const vec = fir.mesh.position.clone()
      const axis = new THREE.Vector3(0, 1, 0)
      fir.mesh.quaternion.setFromUnitVectors(axis, vec.clone().normalize())
      this.floor.add(fir.mesh)
    }
  }

  createCarrot = () => {
    // console.log(`fun _> createCarrot`);
    this.carrot = new Carrot()
    this.scene.add(this.carrot.mesh)
  }

  updateCarrotPosition = () => {
    // console.log(`fun _> updateCarrotPosition`);
    this.carrot.mesh.rotation.y += Main.delta * 6
    this.carrot.mesh.rotation.z =
      Math.PI / 2 - (this.floorRotation + this.carrot.angle)
    this.carrot.mesh.position.y =
      -this.floorRadius +
      Math.sin(this.floorRotation + this.carrot.angle) * (this.floorRadius + 50)
    this.carrot.mesh.position.x =
      Math.cos(this.floorRotation + this.carrot.angle) * (this.floorRadius + 50)
  }

  updateObstaclePosition = () => {
    // console.log(`fun _> updateObstaclePosition`);
    if (this.obstacle.status == 'flying') return

    // TODO fix this,
    if (this.floorRotation + this.obstacle.angle > 2.5) {
      this.obstacle.angle = -this.floorRotation + Math.random() * 0.3
      this.obstacle.body.rotation.y = Math.random() * Math.PI * 2
    }

    this.obstacle.mesh.rotation.z =
      this.floorRotation + this.obstacle.angle - Math.PI / 2
    this.obstacle.mesh.position.y =
      -this.floorRadius +
      Math.sin(this.floorRotation + this.obstacle.angle) *
        (this.floorRadius + 3)
    this.obstacle.mesh.position.x =
      Math.cos(this.floorRotation + this.obstacle.angle) *
      (this.floorRadius + 3)
  }

  updateFloorRotation = () => {
    // console.log(`fun _> updateFloorRotation`);
    this.floorRotation += Main.delta * 0.03 * Main.speed
    this.floorRotation %= Math.PI * 2
    this.floor.rotation.z = this.floorRotation
  }

  createObstacle = () => {
    // console.log(`fun _> createObstacle`);
    this.obstacle = new Hedgehog()
    this.obstacle.body.rotation.y = -Math.PI / 2
    this.obstacle.mesh.scale.set(1.1, 1.1, 1.1)
    this.obstacle.mesh.position.y = this.floorRadius + 4
    this.obstacle.nod()
    this.scene.add(this.obstacle.mesh)
  }

  createBonusParticles = () => {
    // console.log(`fun _> createBonusParticles`);
    this.bonusParticles = new BonusParticles()
    this.bonusParticles.mesh.visible = false
    this.scene.add(this.bonusParticles.mesh)
  }

  checkCollision = () => {
    // console.log(`fun _> checkCollision`);
    const db = this.hero.mesh.position
      .clone()
      .sub(this.carrot.mesh.position.clone())
    const dm = this.hero.mesh.position
      .clone()
      .sub(this.obstacle.mesh.position.clone())

    if (db.length() < this.collisionBonus) {
      this.getBonus()
    }

    if (
      dm.length() < this.collisionObstacle &&
      this.obstacle.status != 'flying'
    ) {
      this.getMalus()
    }
  }

  getBonus = () => {
    // console.log(`fun _> getBonus`);
    this.bonusParticles.mesh.position.copy(this.carrot.mesh.position)
    this.bonusParticles.mesh.visible = true
    this.bonusParticles.explose()
    this.carrot.angle += Math.PI / 2
    this.monsterPosTarget += 0.025
  }

  getMalus = () => {
    // console.log(`fun _> getMalus`);
    this.obstacle.status = 'flying'
    const tx =
      Math.random() > 0.5 ? -20 - Math.random() * 10 : 20 + Math.random() * 5
    TweenMax.to(this.obstacle.mesh.position, 4, {
      x: tx,
      y: Math.random() * 50,
      z: 350,
      ease: Power4.easeOut,
    })
    TweenMax.to(this.obstacle.mesh.rotation, 4, {
      x: Math.PI * 3,
      z: Math.PI * 3,
      y: Math.PI * 6,
      ease: Power4.easeOut,
      onComplete: () => {
        this.obstacle.status = 'ready'
        this.obstacle.body.rotation.y = Math.random() * Math.PI * 2
        this.obstacle.angle = -this.floorRotation - Math.random() * 0.4
        this.obstacle.angle = this.obstacle.angle % (Math.PI * 2)
        this.obstacle.mesh.rotation.x = 0
        this.obstacle.mesh.rotation.y = 0
        this.obstacle.mesh.rotation.z = 0
        this.obstacle.mesh.position.z = 0
      },
    })

    this.monsterPosTarget -= 0.04
    TweenMax.from(this, 0.5, {
      malusClearAlpha: 0.5,
      onUpdate: () => {
        this.renderer.setClearColor(this.malusClearColor, this.malusClearAlpha)
      },
    })
  }

  /* update UI values */
  updateDistance = () => {
    // console.log(`fun _> updateDistance`);
    this.distance += Main.delta * Main.speed
    const d = this.distance / 2

    this.fieldDistance.innerHTML = Math.floor(d)

    this.updateStats()

    if (this.fieldHighScore > this.highScore) {
      this.fieldHighScore.innerHTML = Math.floor(d)
    } else {
      this.fieldHighScore = this.highScore
    }
    localStorage.setItem('highScore', Math.floor(d).toLocaleString())
  }

  /* update stats */
  updateStats = () => {
    this.polyCountValue!.innerHTML =
      this.renderer.info.render.triangles.toLocaleString()
    this.drawCallsValue!.innerHTML =
      this.renderer.info.render.calls.toLocaleString()
    this.texturesInMemoryValue!.innerHTML =
      this.renderer.info.memory.textures.toLocaleString()
    this.geometriesInMemoryValue!.innerHTML =
      this.renderer.info.memory.geometries.toLocaleString()
  }

  updateLevel = () => {
    // console.log(`fun _> updateLevel`);
    if (Main.speed >= Main.maxSpeed) return
    this.level++
    Main.speed += 2
  }

  loop = () => {
    // console.log(`fun _> loop`);
    Main.delta = Main.clock.getDelta()
    this.updateFloorRotation()

    if (Main.gameStatus == 'play') {
      if (this.hero.status == 'running') {
        this.hero.run()
      }
      this.updateDistance()
      this.updateMonsterPosition()
      this.updateCarrotPosition()
      this.updateObstaclePosition()
      this.checkCollision()
    }

    this.render()
    requestAnimationFrame(this.loop)
  }

  render = () => {
    this.renderer.render(this.scene, this.camera)
  }

  resetGame = () => {
    console.log(`fun _> resetGame`)
    this.scene.add(this.hero.mesh)
    this.hero.mesh.rotation.y = Math.PI / 2
    this.hero.mesh.position.y = 0
    this.hero.mesh.position.z = 0
    this.hero.mesh.position.x = 0
    this.monsterPos = 0.56
    this.monsterPosTarget = 0.65
    Main.speed = this.initSpeed
    this.level = 0
    this.distance = 0
    this.carrot.mesh.visible = true
    this.obstacle.mesh.visible = true
    Main.gameStatus = 'play'
    this.hero.status = 'running'
    this.hero.nod()
    // this.audio.play();
    this.updateLevel()
    this.levelInterval = setInterval(this.updateLevel, this.levelUpdateFreq)
  }

  initUI = () => {
    // console.log(`fun _> initUI`);
    this.fieldDistance = document.getElementById('distValue')
    this.fieldGameOver = document.getElementById('gameoverInstructions')
    this.fieldHighScore = document.getElementById('highScoreValue')
    this.polyCountValue = document.getElementById('polyCountValue')
    this.drawCallsValue = document.getElementById('drawCallsValue')
    this.texturesInMemoryValue = document.getElementById(
      'texturesInMemoryValue'
    )
    this.geometriesInMemoryValue = document.getElementById(
      'geometriesInMemoryValue'
    )
  }
}
