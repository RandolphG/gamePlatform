import * as THREE from "three";
import { IMaterials, Materials } from "./Materials";
import { TweenMax, Power4, Power1 } from "gsap/all";
import { Main } from "./Main";

export interface IMonster {
  testGeom: THREE.BoxBufferGeometry;
  testEarGeom: THREE.BoxBufferGeometry;

  body: any;
  runningCycle: number;
  mesh: THREE.Group;
  torso: THREE.Mesh;
  head: THREE.Mesh;
  mouth: THREE.Mesh;
  heroHolder: THREE.Group;
  tongue: THREE.Mesh;
  pawFR: any;
  pawFL: any;
  pawBL: any;
  pawBR: any;
  tail: any;
  earR: any;
  nose: THREE.Mesh;
  eyeL: any;
  earL: any;
  iris: any;
  eyeR: any;
  init: () => void;
  run: () => void;
  nod: () => void;
  sit: () => void;
}

export class Monster implements IMonster {
  body: any;
  runningCycle: number;
  mesh: THREE.Group;
  torso: THREE.Mesh;
  head: THREE.Mesh;
  mouth: THREE.Mesh;
  heroHolder: THREE.Group;
  tongue: THREE.Mesh;
  pawFR: any;
  pawFL: any;
  pawBL: any;
  pawBR: any;
  tail: any;
  earR: any;
  nose: THREE.Mesh;
  eyeL: any;
  earL: any;
  iris: any;
  eyeR: any;
  material: IMaterials;

  testGeom: THREE.BoxBufferGeometry;
  testEarGeom: THREE.BoxBufferGeometry;

  constructor() {
    this.material = new Materials();
    this.init();
  }

  createHead() {}

  init() {
    this.runningCycle = 0;

    this.mesh = new THREE.Group();
    this.body = new THREE.Group();

    let torsoGeom = new THREE.BoxGeometry(15, 15, 20, 1);
    this.torso = new THREE.Mesh(torsoGeom, this.material.blackMat);

    let headGeom = new THREE.BoxGeometry(20, 20, 40, 1);
    headGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, 20));
    this.head = new THREE.Mesh(headGeom, this.material.blackMat);
    this.head.position.z = 12;
    this.head.position.y = 2;

    let mouthGeom = new THREE.BoxGeometry(10, 4, 20, 1);
    mouthGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, -2, 10));
    this.mouth = new THREE.Mesh(mouthGeom, this.material.blackMat);
    this.mouth.position.y = -8;
    this.mouth.rotation.x = 0.4;
    this.mouth.position.z = 4;

    this.heroHolder = new THREE.Group();
    this.heroHolder.position.z = 20;
    this.mouth.add(this.heroHolder);

    /* testGeometry*/
    this.testGeom = new THREE.BoxBufferGeometry();
    const testBoxGeometry = new THREE.BoxGeometry(2, 2, 1, 1);

    /*
    console.log(`\ntestBoxGeometry >`, testBoxGeometry);
    console.log(`testBoxBufferGeometry >`, testBoxBufferGeometry);
    */

    this.testGeom.merge(testBoxGeometry);
    this.testGeom.attributes.position.setXYZ(4, 1, 0, 0);
    this.testGeom.attributes.position.setXYZ(5, 1, 0, 0);
    this.testGeom.attributes.position.setXYZ(0, -1, 0, 0);

    /*
      let toothGeom = new THREE.BoxGeometry(2, 2, 1, 1);
      toothGeom.vertices[1].x -= 1;
      toothGeom.vertices[4].x += 1;
      toothGeom.vertices[5].x += 1;
      toothGeom.vertices[0].x -= 1;
    */

    for (let i = 0; i < 3; i++) {
      // let toothf = new THREE.Mesh(toothGeom, this.material.whiteMat);
      let toothf = new THREE.Mesh(this.testGeom, this.material.whiteMat);
      toothf.position.x = -2.8 + i * 2.5;
      toothf.position.y = 1;
      toothf.position.z = 19;

      let toothl = new THREE.Mesh(this.testGeom, this.material.whiteMat);
      toothl.rotation.y = Math.PI / 2;
      toothl.position.z = 12 + i * 2.5;
      toothl.position.y = 1;
      toothl.position.x = 4;

      let toothr = toothl.clone();
      toothl.position.x = -4;

      this.mouth.add(toothf);
      this.mouth.add(toothl);
      this.mouth.add(toothr);
    }

    let tongueGeometry = new THREE.BoxGeometry(6, 1, 14);
    tongueGeometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, 7));

    this.tongue = new THREE.Mesh(tongueGeometry, this.material.pinkMat);
    this.tongue.position.z = 2;
    this.tongue.rotation.x = -0.2;
    this.mouth.add(this.tongue);

    let noseGeom = new THREE.BoxGeometry(4, 4, 4, 1);
    this.nose = new THREE.Mesh(noseGeom, this.material.pinkMat);
    this.nose.position.z = 39.5;
    this.nose.position.y = 9;
    this.head.add(this.nose);

    this.head.add(this.mouth);

    var eyeGeom = new THREE.BoxGeometry(2, 3, 3);

    this.eyeL = new THREE.Mesh(eyeGeom, this.material.whiteMat);
    this.eyeL.position.x = 10;
    this.eyeL.position.z = 5;
    this.eyeL.position.y = 5;
    this.eyeL.castShadow = true;
    this.head.add(this.eyeL);

    let irisGeom = new THREE.BoxGeometry(0.6, 1, 1);
    this.iris = new THREE.Mesh(irisGeom, this.material.blackMat);
    this.iris.position.x = 1.2;
    this.iris.position.y = -1;
    this.iris.position.z = 1;
    this.eyeL.add(this.iris);

    this.eyeR = this.eyeL.clone();
    this.eyeR.children[0].position.x = -this.iris.position.x;
    this.eyeR.position.x = -this.eyeL.position.x;
    this.head.add(this.eyeR);

    /* testGeometry*/
    this.testEarGeom = new THREE.BoxBufferGeometry();
    const testEarBoxGeometry = new THREE.BoxGeometry(8, 6, 2, 1);

    /*
    console.log(`\ntestBoxGeometry >`, testBoxGeometry);
    console.log(`testBoxBufferGeometry >`, testBoxBufferGeometry);
    */

    this.testEarGeom.merge(testEarBoxGeometry);
    this.testEarGeom.attributes.position.setXYZ(1, -4, 0, 0);
    this.testEarGeom.attributes.position.setXYZ(4, 4, 0, 0);
    this.testEarGeom.attributes.position.setXYZ(5, 4, 0, -2);
    this.testEarGeom.attributes.position.setXYZ(0, -4, 0, -2);
    this.testEarGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 3, 0));

    /*let earGeom = new THREE.BoxGeometry(8, 6, 2, 1);
      earGeom.vertices[1].x -= 4;
      earGeom.vertices[4].x += 4;
      earGeom.vertices[5].x += 4;
      earGeom.vertices[5].z -= 2;
      earGeom.vertices[0].x -= 4;
      earGeom.vertices[0].z -= 2;

      earGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 3, 0));
    */

    this.earL = new THREE.Mesh(this.testEarGeom, this.material.blackMat);
    this.earL.position.x = 6;
    this.earL.position.z = 1;
    this.earL.position.y = 10;
    this.earL.castShadow = true;
    this.head.add(this.earL);

    this.earR = this.earL.clone();
    this.earR.position.x = -this.earL.position.x;
    this.earR.rotation.z = -this.earL.rotation.z;
    this.head.add(this.earR);

    var eyeGeom = new THREE.BoxGeometry(2, 4, 4);

    let tailGeom = new THREE.CylinderGeometry(5, 2, 20, 4, 1);
    tailGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 10, 0));
    tailGeom.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    tailGeom.applyMatrix4(new THREE.Matrix4().makeRotationZ(Math.PI / 4));

    this.tail = new THREE.Mesh(tailGeom, this.material.blackMat);
    this.tail.position.z = -10;
    this.tail.position.y = 4;
    this.torso.add(this.tail);

    let pawGeom = new THREE.CylinderGeometry(1.5, 0, 10);
    pawGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, -5, 0));
    this.pawFL = new THREE.Mesh(pawGeom, this.material.blackMat);
    this.pawFL.position.y = -7.5;
    this.pawFL.position.z = 8.5;
    this.pawFL.position.x = 5.5;
    this.torso.add(this.pawFL);

    this.pawFR = this.pawFL.clone();
    this.pawFR.position.x = -this.pawFL.position.x;
    this.torso.add(this.pawFR);

    this.pawBR = this.pawFR.clone();
    this.pawBR.position.z = -this.pawFL.position.z;
    this.torso.add(this.pawBR);

    this.pawBL = this.pawBR.clone();
    this.pawBL.position.x = this.pawFL.position.x;
    this.torso.add(this.pawBL);

    this.mesh.add(this.body);
    this.torso.add(this.head);
    this.body.add(this.torso);

    this.torso.castShadow = true;
    this.head.castShadow = true;
    this.pawFL.castShadow = true;
    this.pawFR.castShadow = true;
    this.pawBL.castShadow = true;
    this.pawBR.castShadow = true;

    this.body.rotation.y = Math.PI / 2;
  }

  run() {
    let s = Math.min(Main.speed, Main.maxSpeed);
    this.runningCycle += Main.delta * s * 0.7;
    this.runningCycle = this.runningCycle % (Math.PI * 2);
    let t = this.runningCycle;

    /* pawFrontRight animation */
    this.pawFR.rotation.x = (Math.sin(t) * Math.PI) / 4;
    this.pawFR.position.y = -5.5 - Math.sin(t);
    this.pawFR.position.z = 7.5 + Math.cos(t);

    /* pawFrontLeft animation */
    this.pawFL.rotation.x = (Math.sin(t + 0.4) * Math.PI) / 4;
    this.pawFL.position.y = -5.5 - Math.sin(t + 0.4);
    this.pawFL.position.z = 7.5 + Math.cos(t + 0.4);

    /* pawBackLeft animation */
    this.pawBL.rotation.x = (Math.sin(t + 2) * Math.PI) / 4;
    this.pawBL.position.y = -5.5 - Math.sin(t + 3.8);
    this.pawBL.position.z = -7.5 + Math.cos(t + 3.8);

    /* pawBackRight animation */
    this.pawBR.rotation.x = (Math.sin(t + 2.4) * Math.PI) / 4;
    this.pawBR.position.y = -5.5 - Math.sin(t + 3.4);
    this.pawBR.position.z = -7.5 + Math.cos(t + 3.4);

    /* torso animation */
    this.torso.rotation.x = (Math.sin(t) * Math.PI) / 8;
    this.torso.position.y = 3 - Math.sin(t + Math.PI / 2) * 3;

    this.head.rotation.x = -0.1 + Math.sin(-t - 1) * 0.4;
    this.mouth.rotation.x = 0.2 + Math.sin(t + Math.PI + 0.3) * 0.4;
    this.tail.rotation.x = 0.2 + Math.sin(t - Math.PI / 2);
    this.eyeR.scale.y = 0.5 + Math.sin(t + Math.PI) * 0.5;
  }

  nod() {
    let _this = this;
    let sp = 1 + Math.random() * 2;

    // HEAD
    let tHeadRotY = -Math.PI / 3 + Math.random() * 0.5;
    let tHeadRotX = Math.PI / 3 - 0.2 + Math.random() * 0.4;
    TweenMax.to(this.head.rotation, sp, {
      x: tHeadRotX,
      y: tHeadRotY,
      ease: Power4.easeInOut,
      onComplete: function () {
        _this.nod();
      },
    });

    // TAIL

    let tTailRotY = -Math.PI / 4;
    TweenMax.to(this.tail.rotation, sp / 8, {
      y: tTailRotY,
      ease: Power1.easeInOut,
      yoyo: true,
      repeat: 8,
    });

    // EYES

    TweenMax.to([this.eyeR.scale, this.eyeL.scale], sp / 20, {
      y: 0,
      ease: Power1.easeInOut,
      yoyo: true,
      repeat: 1,
    });
  }

  sit() {
    let sp = 1.2;
    let ease = Power4.easeOut;
    let _this = this;
    TweenMax.to(this.torso.rotation, sp, { x: -1.3, ease: ease });
    TweenMax.to(this.torso.position, sp, {
      y: -5,
      ease: ease,
      onComplete: function () {
        _this.nod();
        /*TODO global game status */
        // gameStatus = "readyToReplay";
      },
    });

    TweenMax.to(this.head.rotation, sp, {
      x: Math.PI / 3,
      y: -Math.PI / 3,
      ease: ease,
    });
    TweenMax.to(this.tail.rotation, sp, { x: 2, y: Math.PI / 4, ease: ease });
    TweenMax.to(this.pawBL.rotation, sp, { x: -0.1, ease: ease });
    TweenMax.to(this.pawBR.rotation, sp, { x: -0.1, ease: ease });
    TweenMax.to(this.pawFL.rotation, sp, { x: 1, ease: ease });
    TweenMax.to(this.pawFR.rotation, sp, { x: 1, ease: ease });
    TweenMax.to(this.mouth.rotation, sp, { x: 0.3, ease: ease });
    TweenMax.to(this.eyeL.scale, sp, { y: 1, ease: ease });
    TweenMax.to(this.eyeR.scale, sp, { y: 1, ease: ease });
  }
}
