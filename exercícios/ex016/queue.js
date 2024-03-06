function Queue() {
    let item = []

    this.enqueue = function(element){
        item.push(element)
        //Adicionar um novo elemento a fila
    }
    this.dequeue = function(){
        item.shift()
        //Tirar o primeiro elemento da fila
    }
    this.front = function(){
        return item[0]
        //Retornar qual é o primeiro elemento da fila
    }
    this.isEmpity = function(){
        return item.length === 0
        //Verificar se a fila está vazia
    }
    this.size = function(){
        return item.length
        //Informar tamanho da fila
    }
    this.print = function(){
        return console.log(item.toString())
        //Print na própria fila
    }
}

let fila = new Queue()
fila.enqueue('JP')
fila.enqueue('Lucas')
fila.enqueue('Bruno')
fila.print()
fila.dequeue()
fila.print()
console.log(fila.front())


function exibir(){
    console.log(fila.size())
}

exibir()