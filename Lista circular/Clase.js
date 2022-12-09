class Nodo{
  constructor(_value){
    this.value = _value;
    this.next = null;
  }
}

class ListaCircular{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = null;
  }

  agregar(_value){
    var temporal = new Nodo(_value);
    this.size++;
    if(this.head == null){
      temporal.next = temporal
      this.head = temporal;
      this.tail = temporal;
    }else{
      temporal.next = this.head;
      this.head= temporal;
      this.tail.next = temporal;
    }
  }

  print(){
    var temporal = this.head;
    if(this.head != null){
      console.log(temporal.value);
      while(temporal.next != this.head){
        temporal = temporal.next;
        console.log(temporal.value);
      }
    }
  }
}

var lista = new ListaCircular();
lista.agregar(1)
lista.agregar(2)
lista.agregar(3)
lista.agregar(4)
lista.print();