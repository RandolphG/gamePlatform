import * as THREE from "three";
import { IMaterials, Materials } from "./Materials";

export interface ICarrot {
  testLeafGeom: THREE.BoxBufferGeometry;
  testBodyGeom: THREE.CylinderBufferGeometry;

  angle: number;
  mesh: THREE.Group;
  body: THREE.Mesh;
  leaf1: THREE.Mesh;
  leaf2: any;
  init: () => void;
}

export class Carrot implements ICarrot {
  testLeafGeom: THREE.BoxBufferGeometry;
  testBodyGeom: THREE.CylinderBufferGeometry;

  angle: number;
  mesh: THREE.Group;
  body: THREE.Mesh;
  leaf1: THREE.Mesh;
  leaf2: any;
  material: IMaterials;

  constructor() {
    this.material = new Materials();
    this.init();
  }

  init(): void {
    this.angle = 0;
    this.mesh = new THREE.Group();

    /* testGeometry*/
    let cylinderGeom = new THREE.CylinderGeometry(5, 3, 10, 4, 1);
    let cylinderBodyBufferGeom = new THREE.CylinderBufferGeometry();

    cylinderBodyBufferGeom.merge(cylinderGeom);
    cylinderBodyBufferGeom.attributes.position.setXYZ(8, 0, 2, 0);
    cylinderBodyBufferGeom.attributes.position.setXYZ(9, 0, -3, 0);

    this.body = new THREE.Mesh(cylinderBodyBufferGeom, this.material.pinkMat);

    let boxGeom = new THREE.BoxGeometry(5, 3, 10, 4, 1);
    let boxLeafBufferGeom = new THREE.BoxBufferGeometry();

    boxLeafBufferGeom.merge(boxGeom);
    boxLeafBufferGeom.applyMatrix4(
      new THREE.Matrix4().makeTranslation(0, 5, 0)
    );
    boxLeafBufferGeom.attributes.position.setXYZ(2, -1, 0, 0);
    boxLeafBufferGeom.attributes.position.setXYZ(3, -1, 0, 0);
    boxLeafBufferGeom.attributes.position.setXYZ(6, 1, 0, 0);
    boxLeafBufferGeom.attributes.position.setXYZ(7, 1, 0, 0);

    /*
    var bodyGeom = new THREE.CylinderGeometry(5, 3, 10, 4, 1);
    bodyGeom.vertices[8].y += 2;
    bodyGeom.vertices[9].y -= 3;

    this.body = new THREE.Mesh(bodyGeom, this.material.pinkMat);

    var leafGeom = new THREE.BoxGeometry(5, 10, 1, 1);
    leafGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 5, 0));
    leafGeom.vertices[2].x -= 1;
    leafGeom.vertices[3].x -= 1;
    leafGeom.vertices[6].x += 1;
    leafGeom.vertices[7].x += 1;

    this.leaf1 = new THREE.Mesh(leafGeom, this.material.greenMat);
    */

    this.leaf1 = new THREE.Mesh(boxLeafBufferGeom, this.material.greenMat);
    this.leaf1.position.y = 7;
    this.leaf1.rotation.z = 0.3;
    this.leaf1.rotation.x = 0.2;

    this.leaf2 = this.leaf1.clone();
    this.leaf2.scale.set(1, 1.3, 1);
    this.leaf2.position.y = 7;
    this.leaf2.rotation.z = -0.3;
    this.leaf2.rotation.x = -0.2;

    this.mesh.add(this.body);
    this.mesh.add(this.leaf1);
    this.mesh.add(this.leaf2);

    this.body.traverse(function (object) {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }
}
