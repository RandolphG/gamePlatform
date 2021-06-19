import * as THREE from 'three'
import { TweenMax, Back, Power4, Power2, Power1 } from 'gsap/all'
import { IMaterials, Materials } from './Materials'
import { Main } from './Main'

export interface IHero {
  /* geometry */
  earGeom: THREE.BoxGeometry
  testGeom: THREE.BoxBufferGeometry

  status: string
  runningCycle: number
  mesh: THREE.Group
  body: THREE.Group
  torso: THREE.Mesh
  pants: THREE.Mesh
  tail: THREE.Mesh
  head: THREE.Mesh
  cheekR: THREE.Mesh
  cheekL: THREE.Mesh
  nose: THREE.Mesh
  mouth: THREE.Mesh
  iris: THREE.Mesh
  eyeR: any
  eyeL: any
  earR: any
  pawFR: any
  earL: any
  pawBR: any
  pawBL: any
  pawFL: any

  /* class methods */
  hang: () => void
  init: () => void
  run: () => void
  nod: () => void
  jump: () => void
}

export class Hero implements IHero {
  earGeom: THREE.BoxGeometry

  testGeom: THREE.BoxBufferGeometry

  runningCycle: number

  mesh: THREE.Group

  body: THREE.Group

  torso: THREE.Mesh

  pants: THREE.Mesh

  tail: THREE.Mesh

  head: THREE.Mesh

  cheekR: THREE.Mesh

  cheekL: THREE.Mesh

  nose: THREE.Mesh

  mouth: THREE.Mesh

  iris: THREE.Mesh

  eyeR: any

  eyeL: any

  earR: any

  pawFR: any

  earL: any

  pawBR: any

  pawBL: any

  pawFL: any

  status: string

  material: IMaterials

  constructor() {
    this.material = new Materials()
    this.init()
  }

  init() {
    this.status = 'running'
    this.runningCycle = 0
    this.mesh = new THREE.Group()
    this.body = new THREE.Group()
    this.mesh.add(this.body)

    const torsoGeom = new THREE.BoxGeometry(7, 7, 10, 1)
    this.torso = new THREE.Mesh(torsoGeom, this.material.brownMat)
    this.torso.position.z = 0
    this.torso.position.y = 7
    this.torso.castShadow = true
    this.body.add(this.torso)

    const pantsGeom = new THREE.BoxGeometry(9, 9, 5, 1)
    this.pants = new THREE.Mesh(pantsGeom, this.material.whiteMat)
    this.pants.position.z = -3
    this.pants.position.y = 0
    this.pants.castShadow = true
    this.torso.add(this.pants)

    /* tail geometry */
    const tailGeom = new THREE.BoxGeometry(3, 3, 3, 1)
    tailGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, -2))
    this.tail = new THREE.Mesh(tailGeom, this.material.lightBrownMat)
    this.tail.position.z = -4
    this.tail.position.y = 5
    this.tail.castShadow = true
    this.torso.add(this.tail)

    this.torso.rotation.x = -Math.PI / 8

    /* head geometry */
    const headGeom = new THREE.BoxGeometry(10, 10, 13, 1)
    headGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, 7.5))
    this.head = new THREE.Mesh(headGeom, this.material.brownMat)
    this.head.position.z = 2
    this.head.position.y = 11
    this.head.castShadow = true
    this.body.add(this.head)

    /* cheek geometry */
    const cheekGeom = new THREE.BoxGeometry(1, 4, 4, 1)
    this.cheekR = new THREE.Mesh(cheekGeom, this.material.pinkMat)
    this.cheekR.position.x = -5
    this.cheekR.position.z = 7
    this.cheekR.position.y = -2.5
    this.cheekR.castShadow = true
    this.head.add(this.cheekR)

    this.cheekL = this.cheekR.clone()
    this.cheekL.position.x = -this.cheekR.position.x
    this.head.add(this.cheekL)

    /* nose geometry */
    const noseGeom = new THREE.BoxGeometry(6, 6, 3, 1)
    this.nose = new THREE.Mesh(noseGeom, this.material.lightBrownMat)
    this.nose.position.z = 13.5
    this.nose.position.y = 2.6
    this.nose.castShadow = true
    this.head.add(this.nose)

    /* mouth geometry */
    const mouthGeom = new THREE.BoxGeometry(4, 2, 4, 1)
    mouthGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, 3))
    mouthGeom.applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI / 12))
    this.mouth = new THREE.Mesh(mouthGeom, this.material.brownMat)
    this.mouth.position.z = 8
    this.mouth.position.y = -4
    this.mouth.castShadow = true
    this.head.add(this.mouth)

    /* paw front geometry */
    const pawFGeom = new THREE.BoxGeometry(3, 3, 3, 1)
    this.pawFR = new THREE.Mesh(pawFGeom, this.material.lightBrownMat)
    this.pawFR.position.x = -2
    this.pawFR.position.z = 6
    this.pawFR.position.y = 1.5
    this.pawFR.castShadow = true
    this.body.add(this.pawFR)

    this.pawFL = this.pawFR.clone()
    this.pawFL.position.x = -this.pawFR.position.x
    this.pawFL.castShadow = true
    this.body.add(this.pawFL)

    /* paw back geometry */
    const pawBGeom = new THREE.BoxGeometry(3, 3, 6, 1)
    this.pawBL = new THREE.Mesh(pawBGeom, this.material.lightBrownMat)
    this.pawBL.position.y = 1.5
    this.pawBL.position.z = 0
    this.pawBL.position.x = 5
    this.pawBL.castShadow = true
    this.body.add(this.pawBL)

    this.pawBR = this.pawBL.clone()
    this.pawBR.position.x = -this.pawBL.position.x
    this.pawBR.castShadow = true
    this.body.add(this.pawBR)

    /* testGeometry */
    this.testGeom = new THREE.BoxBufferGeometry()
    const testBoxGeometry = new THREE.BoxGeometry(7, 18, 2, 1)
    const testBoxBufferGeometry = new THREE.BoxBufferGeometry(7, 18, 2, 1)

    /*
    console.log(`\ntestBoxGeometry >`, testBoxGeometry);
    console.log(`testBoxBufferGeometry >`, testBoxBufferGeometry);
    */

    this.testGeom.merge(testBoxGeometry)
    this.testGeom.attributes.position.setXYZ(6, 2, 0, 0.5)
    this.testGeom.attributes.position.setXYZ(7, 2, 0, 0.5)
    this.testGeom.attributes.position.setXYZ(2, 2, 0, 0.5)
    this.testGeom.attributes.position.setXYZ(3, 2, 0, 0.5)
    this.testGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 9, 0))

    /* ear geometry */
    /*
      this.earGeom = new THREE.BoxGeometry(7, 18, 2, 1);
      this.earGeom.verticesNeedUpdate = true;
      this.earGeom.vertices[6].x += 2;
      this.earGeom.vertices[6].z += 0.5;

      this.earGeom.vertices[7].x += 2;
      this.earGeom.vertices[7].z -= 0.5;

      this.earGeom.vertices[2].x -= 2;
      this.earGeom.vertices[2].z -= 0.5;

      this.earGeom.vertices[3].x -= 2;
      this.earGeom.vertices[3].z += 0.5;
      this.earGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 9, 0));
    */

    /* earLeft mesh */
    this.earL = new THREE.Mesh(this.testGeom, this.material.brownMat)
    this.earL.position.x = 2
    this.earL.position.z = 2.5
    this.earL.position.y = 5
    this.earL.rotation.z = -Math.PI / 12
    this.earL.castShadow = true
    this.head.add(this.earL)

    /* earRight mesh */
    this.earR = this.earL.clone()
    this.earR.position.x = -this.earL.position.x
    this.earR.rotation.z = -this.earL.rotation.z
    this.earR.castShadow = true
    this.head.add(this.earR)

    /* eye geometry */
    const eyeGeom = new THREE.BoxGeometry(2, 4, 4)
    this.eyeL = new THREE.Mesh(eyeGeom, this.material.whiteMat)
    this.eyeL.position.x = 5
    this.eyeL.position.z = 5.5
    this.eyeL.position.y = 2.9
    this.eyeL.castShadow = true
    this.head.add(this.eyeL)

    /* iris geometry */
    const irisGeom = new THREE.BoxGeometry(0.6, 2, 2)
    this.iris = new THREE.Mesh(irisGeom, this.material.blackMat)
    this.iris.position.x = 1.2
    this.iris.position.y = 1
    this.iris.position.z = 1
    this.eyeL.add(this.iris)

    this.eyeR = this.eyeL.clone()
    this.eyeR.children[0].position.x = -this.iris.position.x

    this.eyeR.position.x = -this.eyeL.position.x
    this.head.add(this.eyeR)

    this.body.traverse(function (object) {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true
        object.receiveShadow = true
      }
    })
  }

  run() {
    this.status = 'running'

    const s = Math.min(Main.speed, Main.maxSpeed)

    this.runningCycle += Main.delta * s * 0.7
    this.runningCycle %= Math.PI * 2
    const t = this.runningCycle

    const amp = 4
    const disp = 0.2

    // BODY

    this.body.position.y = 6 + Math.sin(t - Math.PI / 2) * amp
    this.body.rotation.x = 0.2 + Math.sin(t - Math.PI / 2) * amp * 0.1

    this.torso.rotation.x = Math.sin(t - Math.PI / 2) * amp * 0.1
    this.torso.position.y = 7 + Math.sin(t - Math.PI / 2) * amp * 0.5

    // MOUTH
    this.mouth.rotation.x = Math.PI / 16 + Math.cos(t) * amp * 0.05

    // HEAD
    this.head.position.z = 2 + Math.sin(t - Math.PI / 2) * amp * 0.5
    this.head.position.y = 8 + Math.cos(t - Math.PI / 2) * amp * 0.7
    this.head.rotation.x = -0.2 + Math.sin(t + Math.PI) * amp * 0.1

    // EARS
    this.earL.rotation.x = Math.cos(-Math.PI / 2 + t) * (amp * 0.2)
    this.earR.rotation.x = Math.cos(-Math.PI / 2 + 0.2 + t) * (amp * 0.3)

    // EYES
    this.eyeR.scale.y = this.eyeL.scale.y =
      0.7 + Math.abs(Math.cos(-Math.PI / 4 + t * 0.5)) * 0.6

    // TAIL
    this.tail.rotation.x = Math.cos(Math.PI / 2 + t) * amp * 0.3

    // FRONT RIGHT PAW
    this.pawFR.position.y = 1.5 + Math.sin(t) * amp
    this.pawFR.rotation.x = (Math.cos(t) * Math.PI) / 4

    this.pawFR.position.z = 6 - Math.cos(t) * amp * 2

    // FRONT LEFT PAW

    this.pawFL.position.y = 1.5 + Math.sin(disp + t) * amp
    this.pawFL.rotation.x = (Math.cos(t) * Math.PI) / 4

    this.pawFL.position.z = 6 - Math.cos(disp + t) * amp * 2

    // BACK RIGHT PAW
    this.pawBR.position.y = 1.5 + Math.sin(Math.PI + t) * amp
    this.pawBR.rotation.x = (Math.cos(t + Math.PI * 1.5) * Math.PI) / 3

    this.pawBR.position.z = -Math.cos(Math.PI + t) * amp

    // BACK LEFT PAW
    this.pawBL.position.y = 1.5 + Math.sin(Math.PI + t) * amp
    this.pawBL.rotation.x = (Math.cos(t + Math.PI * 1.5) * Math.PI) / 3

    this.pawBL.position.z = -Math.cos(Math.PI + t) * amp
  }

  jump() {
    if (this.status == 'jumping') return
    this.status = 'jumping'
    const _this = this
    const totalSpeed = 10 / Main.speed
    const jumpHeight = 45

    TweenMax.to(this.earL.rotation, totalSpeed, {
      x: '+=.3',
      ease: Back.easeOut,
    })
    TweenMax.to(this.earR.rotation, totalSpeed, {
      x: '-=.3',
      ease: Back.easeOut,
    })

    TweenMax.to(this.pawFL.rotation, totalSpeed, {
      x: '+=.7',
      ease: Back.easeOut,
    })
    TweenMax.to(this.pawFR.rotation, totalSpeed, {
      x: '-=.7',
      ease: Back.easeOut,
    })
    TweenMax.to(this.pawBL.rotation, totalSpeed, {
      x: '+=.7',
      ease: Back.easeOut,
    })
    TweenMax.to(this.pawBR.rotation, totalSpeed, {
      x: '-=.7',
      ease: Back.easeOut,
    })

    TweenMax.to(this.tail.rotation, totalSpeed, {
      x: '+=1',
      ease: Back.easeOut,
    })

    TweenMax.to(this.mouth.rotation, totalSpeed, {
      x: 0.5,
      ease: Back.easeOut,
    })

    TweenMax.to(this.mesh.position, totalSpeed / 2, {
      y: jumpHeight,
      ease: Power2.easeOut,
    })
    TweenMax.to(this.mesh.position, totalSpeed / 2, {
      y: 0,
      ease: Power4.easeIn,
      delay: totalSpeed / 2,
      onComplete() {
        // t = 0;
        _this.status = 'running'
      },
    })
  }

  hang() {
    const _this = this
    const sp = 1
    const ease = Power4.easeOut
    // @ts-ignore
    TweenMax.killTweensOf(this.eyeL.scale)
    // @ts-ignore
    TweenMax.killTweensOf(this.eyeR.scale)

    this.body.rotation.x = 0
    this.torso.rotation.x = 0
    this.body.position.y = 0
    this.torso.position.y = 7

    TweenMax.to(this.mesh.rotation, sp, { y: 0, ease })
    TweenMax.to(this.mesh.position, sp, { y: -7, z: 6, ease })
    TweenMax.to(this.head.rotation, sp, {
      x: Math.PI / 6,
      ease,
      onComplete() {
        _this.nod()
      },
    })

    TweenMax.to(this.earL.rotation, sp, { x: Math.PI / 3, ease })
    TweenMax.to(this.earR.rotation, sp, { x: Math.PI / 3, ease })

    TweenMax.to(this.pawFL.position, sp, { y: -1, z: 3, ease })
    TweenMax.to(this.pawFR.position, sp, { y: -1, z: 3, ease })
    TweenMax.to(this.pawBL.position, sp, { y: -2, z: -3, ease })
    TweenMax.to(this.pawBR.position, sp, { y: -2, z: -3, ease })

    TweenMax.to(this.eyeL.scale, sp, { y: 1, ease })
    TweenMax.to(this.eyeR.scale, sp, { y: 1, ease })
  }

  nod() {
    const _this = this
    const sp = 0.5 + Math.random()

    // HEAD
    const tHeadRotY = -Math.PI / 6 + (Math.random() * Math.PI) / 3
    TweenMax.to(this.head.rotation, sp, {
      y: tHeadRotY,
      ease: Power4.easeInOut,
      onComplete() {
        _this.nod()
      },
    })

    // EARS
    const tEarLRotX = Math.PI / 4 + (Math.random() * Math.PI) / 6
    const tEarRRotX = Math.PI / 4 + (Math.random() * Math.PI) / 6

    TweenMax.to(this.earL.rotation, sp, {
      x: tEarLRotX,
      ease: Power4.easeInOut,
    })
    TweenMax.to(this.earR.rotation, sp, {
      x: tEarRRotX,
      ease: Power4.easeInOut,
    })

    // PAWS BACK LEFT

    const tPawBLRot = (Math.random() * Math.PI) / 2
    const tPawBLY = -4 + Math.random() * 8

    TweenMax.to(this.pawBL.rotation, sp / 2, {
      x: tPawBLRot,
      ease: Power1.easeInOut,
      yoyo: true,
      repeat: 2,
    })
    TweenMax.to(this.pawBL.position, sp / 2, {
      y: tPawBLY,
      ease: Power1.easeInOut,
      yoyo: true,
      repeat: 2,
    })

    // PAWS BACK RIGHT

    const tPawBRRot = (Math.random() * Math.PI) / 2
    const tPawBRY = -4 + Math.random() * 8
    TweenMax.to(this.pawBR.rotation, sp / 2, {
      x: tPawBRRot,
      ease: Power1.easeInOut,
      yoyo: true,
      repeat: 2,
    })
    TweenMax.to(this.pawBR.position, sp / 2, {
      y: tPawBRY,
      ease: Power1.easeInOut,
      yoyo: true,
      repeat: 2,
    })

    // PAWS FRONT LEFT

    const tPawFLRot = (Math.random() * Math.PI) / 2
    const tPawFLY = -4 + Math.random() * 8

    TweenMax.to(this.pawFL.rotation, sp / 2, {
      x: tPawFLRot,
      ease: Power1.easeInOut,
      yoyo: true,
      repeat: 2,
    })

    TweenMax.to(this.pawFL.position, sp / 2, {
      y: tPawFLY,
      ease: Power1.easeInOut,
      yoyo: true,
      repeat: 2,
    })

    // PAWS FRONT RIGHT

    const tPawFRRot = (Math.random() * Math.PI) / 2
    const tPawFRY = -4 + Math.random() * 8

    TweenMax.to(this.pawFR.rotation, sp / 2, {
      x: tPawFRRot,
      ease: Power1.easeInOut,
      yoyo: true,
      repeat: 2,
    })

    TweenMax.to(this.pawFR.position, sp / 2, {
      y: tPawFRY,
      ease: Power1.easeInOut,
      yoyo: true,
      repeat: 2,
    })

    // MOUTH
    const tMouthRot = (Math.random() * Math.PI) / 8
    TweenMax.to(this.mouth.rotation, sp, {
      x: tMouthRot,
      ease: Power1.easeInOut,
    })
    // IRIS
    const tIrisY = -1 + Math.random() * 2
    const tIrisZ = -1 + Math.random() * 2
    const iris1 = this.iris
    const iris2 = this.eyeR.children[0]
    TweenMax.to([iris1.position, iris2.position], sp, {
      y: tIrisY,
      z: tIrisZ,
      ease: Power1.easeInOut,
    })

    // EYES
    if (Math.random() > 0.2)
      TweenMax.to([this.eyeR.scale, this.eyeL.scale], sp / 8, {
        y: 0,
        ease: Power1.easeInOut,
        yoyo: true,
        repeat: 1,
      })
  }
}
