class Nodo{
  constructor(_value){
      this.value = _value;
      this.next=null;
  }
}

class Pila{
  constructor(){
      this.size = 0;
      this.top = null;
  }

  push(_value){
    var newNode = new Nodo(_value);
    this.size++;

    if(this.top){
      newNode.next = this.top
      this.top = newNode
    }else{
      this.top = newNode
    }
  }

  pop(){
    if(this.top != null){
      this.size--;
      var temp = this.top;
      this.top = temp.next;
      return temp.value;
    }else{
      console.log("Esta vacia");
      return null;
    }

  }

  printPila(){
    var temporal = this.top;
    while(temporal != null){
      console.log(temporal.value);
      temporal = temporal.next;
    }
  }

}

var pila = new Pila();
pila.push("Hola1");
pila.push("Hola2");
pila.printPila(); 
console.log(pila.pop())
pila.printPila(); 
