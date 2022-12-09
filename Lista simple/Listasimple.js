class Nodo{
    constructor(_value){
        this.value = _value
        this.next = null
    }
}

class Lista{
    constructor(){
        this.head = null
    }

    //metodos de la lista
    //insertar
    insert(_value){
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
}

var lista = new Lista();
lista.insert("Pikachu")
lista.insert("Lapras")
lista.insert("Shinx")
lista.insert("Charmander")
lista.insert("Vulpix")
lista.insert("Snorlax")

lista.printList()