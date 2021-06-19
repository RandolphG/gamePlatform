import * as THREE from 'three'
import { ITrunc, Trunc } from './Trunc'

interface ITree {
  mesh: THREE.Object3D
  trunc: ITrunc
  init: () => void
}

export class Tree implements ITree {
  mesh: THREE.Object3D

  trunc: ITrunc

  constructor() {
    this.init()
  }

  init() {
    this.mesh = new THREE.Object3D()
    this.trunc = new Trunc()
    this.mesh.add(this.trunc.mesh)
  }
}
