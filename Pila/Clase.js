class Amigo{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}


class Nodo{
  constructor(_value){
    this.value=_value;
    this.next=null
  }
}

class Pila{
  constructor(){
    this.top=null;
    this.size=0
  }

  push(_value){
    var newNode = new Nodo(_value);
    this.size++;
    newNode.next = this.top;
    this.top= newNode;
  }

  pop(){
    if(this.top != null){
      var temp = this.top;
      this.top = temp.next;
      this.size--;
      return temp
    }
  }
  
  getSize(){
    return this.size;
  }

  print(){
    var temp = this.top;
    while(temp != null){
      console.log(temp.value)
      temp = temp.next;
    }
  }
}

var pila = new Pila();
var amigo = new Amigo("Joel",5)
pila.push(amigo);
pila.print();