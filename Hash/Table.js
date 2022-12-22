class Nodo{
  constructor(_value){
      this.value = _value
      this.next = null
  }
}

class Lista{
  constructor(){
      this.head = null
      this.size = 0;
  }

  //metodos de la lista
  //insertar
  insert(_value){
    this.size++;
    var tempo = new Nodo(_value)
    tempo.next = this.head
    this.head = tempo
  }
  //mostrar 
  printList(){
    var temporal = this.head
    while(temporal!=null){
        console.log(temporal.value)
        temporal = temporal.next
    }
  }

  getSize(){
    return this.size;
  }

  isEmpty(){
    return this.head === null ; 
  }
}

class TableHash{
  constructor(size){
    this.amount =0;
    this.size =  size
    this.table = [];
    for(let i = 0;i < size ; i++){
      this.table.push(new Lista())
    }
  }

  insert(data){
    var index = this.functionHash(data);
    if(this.table[index].isEmpty()){
      this.amount++;
    }
    this.table[index].insert(data);
    this.rehashing()
  }

  functionHash(data){
    return data % this.size;
  }

  rehashing(){
    var porcentaje =this.amount/this.size
    if(porcentaje>0.75){
      var temp =this.table;
      var tempSize = this.size
      this.size = this.amount*5
      this.table = []
      for(let i = 0;i < this.size ; i++){
        this.table.push(new Lista())
      }

      for(let i = 0;i < tempSize ; i++){
        if(!temp[i].isEmpty()){
          var nodo = temp[i].head;
          while(nodo!=null){
            this.insert(nodo.value);
            nodo = nodo.next
        }
        }
      }

      console.log(this.table,porcentaje);
    }else{
      console.log(this.table,porcentaje)
    }

  }

}

var tabla = new TableHash(20);
tabla.insert(20);
tabla.insert(21);
tabla.insert(22);
tabla.insert(23);
tabla.insert(24);
tabla.insert(25);
tabla.insert(26);
tabla.insert(27);
tabla.insert(28);
tabla.insert(29);
tabla.insert(30);