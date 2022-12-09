class NodoCabeza{
    constructor(_value){
        this.value = _value;
        this.next = null;
        this.down = null;
    }
}

class NodoValor{
    constructor(_value){
        this.value = _value;
        this.next = null;
    }
}


class Listadelistas{
    constructor(){
        this.head = null
    }
    //metodos de insertar
    InsertarCabeceras(_value){
        var temporal = new NodoCabeza(_value);
        temporal.next = this.head
        this.head = temporal;
    }

    InsertarValores(_cabeza, _value){
        var temporalcabeza = this.head
        //recorrer toda la lista de cabezas 
        while(temporalcabeza != null){
            if(temporalcabeza.value == _cabeza){
                var nuevacancion = new NodoValor(_value)
                var iniciocanciones = temporalcabeza.down
                temporalcabeza.down = nuevacancion
                nuevacancion.next = iniciocanciones
                break
            }
            temporalcabeza= temporalcabeza.next
        }
        if(temporalcabeza == null){
            console.log("No se encontro el cabecera en la lista "+_cabeza)
        }

    }

    mostrarCabeceras(){
        var temporal = this.head
        console.log("*********** Cabeceras *********")
        while (temporal != null){
            console.log(temporal.value)
            temporal = temporal.next
        }
    }

    MostrarValores(_value){
        var temporal = this.head
        while (temporal != null){
            if(temporal.value == _value){
                console.log("*********** Cabecera "+_value+" *********")        
                var temporalcanciones = temporal.down
                while(temporalcanciones != null){
                    console.log(temporalcanciones.value)
                    temporalcanciones = temporalcanciones.next
                }
                return
            }
            temporal = temporal.next
        }
        if(temporal == null){
            console.log("No se pudo encontrar el cabeza solicitado "+_value)
        }
    }
}

var listadelistas = new Listadelistas();
listadelistas.InsertarCabeceras("Un verano sin ti");
listadelistas.InsertarCabeceras("Demon days");
listadelistas.InsertarCabeceras("The wall");
listadelistas.InsertarCabeceras("The new abnormal");
listadelistas.InsertarCabeceras("Cambios de luna");
//listadelistas.mostrarCabeceras();
console.log("\n\n\n\n")
//cabeza
listadelistas.InsertarValores("Un verano sin ti","Moscow Mule")
listadelistas.InsertarValores("Un verano sin ti","Party")
listadelistas.InsertarValores("Un verano sin ti","Titi me pregunto")
listadelistas.InsertarValores("Un verano sin ti","Me porto bonito")
//cabeza Demon days
listadelistas.InsertarValores("Demon days","Dare")
listadelistas.InsertarValores("Demon days","Dirty Harry")
listadelistas.InsertarValores("Demon days","El mañana")
//cabezas The Wall
listadelistas.InsertarValores("The wall","Hey you")
listadelistas.InsertarValores("The wall","Comfortably Numb")
listadelistas.InsertarValores("The wall","Feel good inc")
//cabeza The new abnormal
listadelistas.InsertarValores("The new abnormal","Not the same anymore")
listadelistas.InsertarValores("The new abnormal","elfless")
listadelistas.InsertarValores("The new abnormal","Bad Decisions")
//cabeza Cambios de Luna
listadelistas.InsertarValores("Cambios de luna","Morir de amor")
listadelistas.InsertarValores("Cambios de luna","Shillin")
listadelistas.InsertarValores("Cambios de luna","La noche")


listadelistas.MostrarValores("Demon days")
listadelistas.MostrarValores("Un verano sin ti")
listadelistas.MostrarValores("The wall")
listadelistas.MostrarValores("The new abnormal")
listadelistas.MostrarValores("Cambios de luna")