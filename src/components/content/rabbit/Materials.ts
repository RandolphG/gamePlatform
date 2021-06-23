import * as THREE from "three";

export interface IMaterials {
  blackMat: THREE.MeshPhongMaterial;
  brownMat: THREE.MeshPhongMaterial;
  greenMat: THREE.MeshPhongMaterial;
  pinkMat: THREE.MeshPhongMaterial;
  lightBrownMat: THREE.MeshPhongMaterial;
  whiteMat: THREE.MeshPhongMaterial;
  skinMat: THREE.MeshPhongMaterial;
}

export class Materials implements IMaterials {
  blackMat: THREE.MeshPhongMaterial;

  brownMat: THREE.MeshPhongMaterial;

  greenMat: THREE.MeshPhongMaterial;

  lightBrownMat: THREE.MeshPhongMaterial;

  pinkMat: THREE.MeshPhongMaterial;

  skinMat: THREE.MeshPhongMaterial;

  whiteMat: THREE.MeshPhongMaterial;

  constructor() {
    this.blackMat = new THREE.MeshPhongMaterial({
      color: 0x100707,
      flatShading: true,
    });

    this.brownMat = new THREE.MeshPhongMaterial({
      color: 0xb44b39,
      shininess: 0,
      flatShading: true,
    });

    this.greenMat = new THREE.MeshPhongMaterial({
      color: 0x7abf8e,
      shininess: 0,
      flatShading: true,
    });

    this.pinkMat = new THREE.MeshPhongMaterial({
      color: 0xdc5f45,
      shininess: 0,
      flatShading: true,
    });

    this.lightBrownMat = new THREE.MeshPhongMaterial({
      color: 0xe07a57,
      flatShading: true,
    });

    this.whiteMat = new THREE.MeshPhongMaterial({
      color: 0xa49789,
      flatShading: true,
    });
    this.skinMat = new THREE.MeshPhongMaterial({
      color: 0xff9ea5,
      flatShading: true,
    });
  }
}
