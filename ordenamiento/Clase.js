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
    this.size = 0;
  }

  getSize(){
    return this.size;
  }

  insert(_value){
    var newNode = new Node(_value);
    this.size++;
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

  getNodo(pos){
		let temp = this.head;
		for(let i = 0; i<pos;i++){
			temp = temp.next;
		}
		return temp;
	}

  quicksort(){
    this.ordenar(0,this.size-1)
  }

  ordenar(min,max) {
    if (min < max) {
  
      let pos = this.partir(min, max);
      console.log("pos", pos)
      this.ordenar(min, pos - 1);
      this.ordenar(pos + 1, max);
    }}

	change(pos1,pos2){
		let valor = this.getNodo(pos1).value;
		this.getNodo(pos1).value  = this.getNodo(pos2).value;
		this.getNodo(pos2).value = valor;
	}

	partir(min,max){
		let pivote = this.getNodo(max).value;
    
		let i = (min - 1);
    
		for(let j = min; j <= max - 1; j++){
			if(this.getNodo(j).value > pivote){
				i++;
				this.change(i,j);
			}
		}
		this.change(i + 1, max);
		return (i + 1);
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
console.log("orden")
lista.quicksort();
lista.print();