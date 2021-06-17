import * as THREE from "three";
import { IMaterials, Materials } from "./Materials";
import { TweenMax, Power4 } from "gsap/all";
import { Main } from "./Main";

export interface IBonusParticles {
  mesh: THREE.Group;
  parts: any[];
  explose: () => void;
}

export class BonusParticles implements IBonusParticles {
  mesh: THREE.Group;
  parts: any[];
  material: IMaterials;

  constructor() {
    this.material = new Materials();
    this.init();
  }

  init() {
    this.mesh = new THREE.Group();
    let bigParticleGeom = new THREE.BoxGeometry(10, 10, 10, 1);
    let smallParticleGeom = new THREE.BoxGeometry(5, 5, 5, 1);
    this.parts = [];

    for (let i = 0; i < 10; i++) {
      let partPink = new THREE.Mesh(bigParticleGeom, this.material.pinkMat);
      let partGreen = new THREE.Mesh(smallParticleGeom, this.material.greenMat);
      partGreen.scale.set(0.5, 0.5, 0.5);
      this.parts.push(partPink);
      this.parts.push(partGreen);
      this.mesh.add(partPink);
      this.mesh.add(partGreen);
    }
  }

  explose() {
    let _this = this;
    let explosionSpeed = 0.5;
    for (let i = 0; i < this.parts.length; i++) {
      let tx = -50 + Math.random() * 100;
      let ty = -50 + Math.random() * 100;
      let tz = -50 + Math.random() * 100;
      let p = this.parts[i];
      p.position.set(0, 0, 0);
      p.scale.set(1, 1, 1);
      p.visible = true;
      let s = explosionSpeed + Math.random() * 0.5;
      TweenMax.to(p.position, s, { x: tx, y: ty, z: tz, ease: Power4.easeOut });
      TweenMax.to(p.scale, s, {
        x: 0.01,
        y: 0.01,
        z: 0.01,
        ease: Power4.easeOut,
        onComplete: Main.removeParticle,
        onCompleteParams: [p],
      });
    }
  }
}
