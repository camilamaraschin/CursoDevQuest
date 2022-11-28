//função anamonima
/* const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
    const mesAtual = 11
    let anoDeNascimento = 2022 - idade 
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    
    imprimir(anoDeNascimento)
}

// vou pegar a função antetior o seu resultado para somar com o ano de nascimento
let imprimirAnoDeNascimento = anoDeNascimento =>{
    console.log('Seu ano de nascimento é' + anoDeNascimento)

}

// aqui é primeira funççao com os seus atributos 
calcularAnoDeNascimento (27, 1, imprimirAnoDeNascimento) */

function multiplicar(multiplicador){
    return function (numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar (2)
let triplicar = multiplicar (3)
let quadruplicar = multiplicar (4)

console.log (dobrar(3))
console.log (triplicar(3))
console.log (quadruplicar(3))