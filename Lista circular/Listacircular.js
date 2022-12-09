class Nodo{
    constructor(_value){
        this.value = _value
        this.next = null
    }
}

class Lista{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    //metodos de una lista circular
    //insertar
    agregar(_value){
        var temporal = new Nodo(_value);
        //si la lista esta vacia
        if (this.head == null){
            this.head = temporal;
            this.tail = this.head;
            this.size++;
        }else{
            this.tail.next = temporal
            //temporal.next = tail
            this.tail = temporal;
            this.tail.next = this.head.next
            this.size++;
        }
    }
    //mostrar la lista circular
    mostrar(){
        var temporal = this.head
        var cont =0;
        while(cont<this.size){
            console.log(temporal.value)
            temporal = temporal.next
            cont++;
        }
    }
}

var lista = new Lista();
lista.agregar("Ike");
lista.agregar("Math");
lista.agregar("Incineroar");
lista.agregar("Link");
lista.agregar("Bowser");

lista.mostrar();