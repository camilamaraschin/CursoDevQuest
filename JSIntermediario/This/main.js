let comida ={
    nome: 'brocolis',
    temperatura: 0
}

//function anomina
comida.cozinhar = function(temperaturaDeCozimento){
    this.temperatura = temperaturaDeCozimento; // this retorna minha temperatura 
}

comida.cozinhar(100) // retornando uma nova temperatura
console.log(comida)