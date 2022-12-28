// MIT License
// Copyright (c) 2021 Luis Espino

class DataNode {
	constructor(value) {
		this.value 	= value
	}
}

class HashNode {
  constructor(hash) {
    this.hash  = hash
    this.left  = null
    this.right = null
  }
}

class Merkle {
  constructor() {
    this.tophash = null

    this.datablock = []    
    this.dot = ''
  }

  add(value) {
    this.datablock.push(new DataNode(value))
  }

  createTree(exp) {
    this.tophash = new HashNode(0)
    this._createTree(this.tophash, exp )
  }

  _createTree(tmp, exp) {
    if (exp > 0) {
      tmp.left = new HashNode(0)
      tmp.right = new HashNode(0)
      this._createTree(tmp.left, exp - 1)
      this._createTree(tmp.right, exp - 1)
    }
  }

  genHash(tmp, n) { // postorder
    if (tmp != null) {
      this.genHash(tmp.left, n)
      this.genHash(tmp.right, n)  
      
      if (tmp.left == null && tmp.right == null) {
        tmp.left = this.datablock[n-index--]
        tmp.hash =sha256(tmp.left.value+"")
      } else {
        tmp.hash = sha256(tmp.left.value+""+tmp.right.value)
      }      
    }
  }


  auth() {
    var exp = 1
    while (Math.pow(2, exp) < this.datablock.length) {
      exp += 1
    }
    for (var i = this.datablock.length; i < Math.pow(2, exp); i++) {
      this.datablock.push(1)
    }
    index = Math.pow(2, exp)
    this.createTree(exp)
    this.genHash(this.tophash, Math.pow(2, exp))
  }

}

var index = 0


var merkle = new Merkle()
merkle.add(4)
merkle.add(5)
merkle.add(6)
merkle.add(7)
merkle.add(8)



