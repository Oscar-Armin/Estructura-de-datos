class Node{
  constructor(_value){
    this.value = _value;
    this.next = null;
    this.before = null;
  }
}

class ListaDoble{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insert(_value){
    var newNode = new Node(_value);
    if( this.head != null){
      newNode.before = this.tail
      this.tail.next = newNode;
      this.tail = newNode;
    }else{
      this.head = newNode;
      this.tail = newNode;
    }
  }

  burbuja(){
    let change = true;
    if(this.head == null){
      return
    }

    while(change){
        var temporal = this.head;
        change= false;

        while(temporal.next != null){
          
            if(temporal.value > temporal.next.value){
              
              var tempValue = temporal.value
              change = true
              temporal.value = temporal.next.value;
              temporal.next.value = tempValue

            }
          temporal = temporal.next;
        }
    }
  }

  delete(_value){
    var temporal = this.head;
    if(temporal.value == _value){
      this.head = temporal.next;
      if(this.head != null){
        this.head.before = null;
      }
    }else{
      while(temporal != null){
        if(temporal.value == _value){
          var anterior = temporal.before;
          anterior.next = temporal.next
          if(temporal.next != null){
            temporal.next.before = anterior; 
          }
          if(this.tail == temporal){
            this.tail = temporal.before 
          }
          break;
        }
        temporal = temporal.next;
      }
    }
  }

  print(){
    var temporal = this.head;
    while(temporal != null){
      console.log(temporal.value);
      temporal = temporal.next;
    }
  }

  print2(){
    var temporal = this.tail;
    while(temporal != null){
      console.log(temporal.value);
      temporal = temporal.before;
    }
  }
}

var lista = new ListaDoble();
lista.insert(58)
lista.insert(35)
lista.insert(15)
lista.insert(68)
lista.insert(46)
console.log("desorden")
lista.print();
lista.burbuja();
console.log("orden")
lista.print();