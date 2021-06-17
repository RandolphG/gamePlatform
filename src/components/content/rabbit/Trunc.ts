import * as THREE from "three";
import { IMaterials, Materials } from "./Materials";

export interface ITrunc {
  mesh: any;
  init: () => void;
}

export class Trunc implements ITrunc {
  mesh: any;
  material: IMaterials;

  constructor() {
    this.material = new Materials();
    this.init();
  }

  init() {
    let truncHeight = 50 + Math.random() * 150;
    let topRadius = 1 + Math.random() * 5;
    let bottomRadius = 5 + Math.random() * 5;

    let mats = [
      this.material.blackMat,
      this.material.brownMat,
      this.material.pinkMat,
      this.material.whiteMat,
      this.material.greenMat,
      this.material.lightBrownMat,
      this.material.pinkMat,
    ];

    let matTrunc = this.material.blackMat;
    let nhSegments = 3;
    let nvSegments = 3;

    let geom = new THREE.CylinderGeometry(
      topRadius,
      bottomRadius,
      truncHeight,
      nhSegments,
      nvSegments
    );

    geom.applyMatrix4(
      new THREE.Matrix4().makeTranslation(0, truncHeight / 2, 0)
    );

    this.mesh = new THREE.Mesh(geom, matTrunc);

    /*
    for (let i = 0; i < geom.attributes.position.count; i++) {
      let noise = Math.random();
      let v = geom.attributes.position.array[i];

      geom.attributes.position.setXYZ(
        i,
        1 - noise + Math.random() * noise * 2,
        1 - noise + Math.random() * noise * 2,
        1 - noise + Math.random() * noise * 2
      );

      /!*
      v.x += -noise + Math.random() * noise * 2;
      v.y += -noise + Math.random() * noise * 2;
      v.z += -noise + Math.random() * noise * 2;
      *!/

      geom.computeVertexNormals();

      /!* FRUITS *!/

      if (Math.random() > 0.7) {
        let size = Math.random() * 3;
        let fruitGeometry = new THREE.BoxGeometry(size, size, size, 1);
        let matFruit = mats[Math.floor(Math.random() * mats.length)];
        let fruit = new THREE.Mesh(fruitGeometry, matFruit);
        fruit.position.x = v.x;
        fruit.position.y = v.y + 3;
        fruit.position.z = v.z;
        fruit.rotation.x = Math.random() * Math.PI;
        fruit.rotation.y = Math.random() * Math.PI;

        this.mesh.add(fruit);
      }

      /!* BRANCHES *!/

      if (Math.random() > 0.5 && v.y > 10 && v.y < truncHeight - 10) {
        let h = 3 + Math.random() * 5;
        let thickness = 0.2 + Math.random();

        let branchGeometry = new THREE.CylinderGeometry(
          thickness / 2,
          thickness,
          h,
          3,
          1
        );
        branchGeometry.applyMatrix4(
          new THREE.Matrix4().makeTranslation(0, h / 2, 0)
        );

        let branch = new THREE.Mesh(branchGeometry, matTrunc);
        branch.position.x = v.x;
        branch.position.y = v.y;
        branch.position.z = v.z;

        let vec = new THREE.Vector3(v.x, 2, v.z);
        let axis = new THREE.Vector3(0, 1, 0);
        branch.quaternion.setFromUnitVectors(axis, vec.clone().normalize());

        this.mesh.add(branch);
      }
    }
    */

    // for (let i = 0; i < geom.vertices.length; i++) {
    const position = this.mesh.geometry.attributes.position;
    const vector = new THREE.Vector3();

    for (let i = 0; i < position.count; i++) {
      vector.fromBufferAttribute(position, i);
      vector.applyMatrix4(this.mesh.matrixWorld);

      let noise = Math.random();

      // let v = geom.vertices[i];
      let v = vector;

      v.x += -noise + Math.random() * noise * 2;
      v.y += -noise + Math.random() * noise * 2;
      v.z += -noise + Math.random() * noise * 2;

      geom.computeVertexNormals();

      /* FRUITS */

      if (Math.random() > 0.7) {
        let size = Math.random() * 3;
        let fruitGeometry = new THREE.BoxGeometry(size, size, size, 1);
        let matFruit = mats[Math.floor(Math.random() * mats.length)];
        let fruit = new THREE.Mesh(fruitGeometry, matFruit);
        fruit.position.x = v.x;
        fruit.position.y = v.y + 3;
        fruit.position.z = v.z;
        fruit.rotation.x = Math.random() * Math.PI;
        fruit.rotation.y = Math.random() * Math.PI;

        this.mesh.add(fruit);
      }

      /* BRANCHES */

      if (Math.random() > 0.5 && v.y > 10 && v.y < truncHeight - 10) {
        let h = 3 + Math.random() * 5;
        let thickness = 0.2 + Math.random();

        let branchGeometry = new THREE.CylinderGeometry(
          thickness / 2,
          thickness,
          h,
          3,
          1
        );
        branchGeometry.applyMatrix4(
          new THREE.Matrix4().makeTranslation(0, h / 2, 0)
        );

        let branch = new THREE.Mesh(branchGeometry, matTrunc);
        branch.position.x = v.x;
        branch.position.y = v.y;
        branch.position.z = v.z;

        let vec = new THREE.Vector3(v.x, 2, v.z);
        let axis = new THREE.Vector3(0, 1, 0);
        branch.quaternion.setFromUnitVectors(axis, vec.clone().normalize());

        this.mesh.add(branch);
      }
    }

    this.mesh.castShadow = true;
  }
}
