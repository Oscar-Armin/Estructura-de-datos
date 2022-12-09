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
lista.insert("user")
lista.insert("user1")
lista.insert("user2")
lista.delete("user2")
lista.print2();