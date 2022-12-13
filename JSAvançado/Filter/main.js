let pessoas = [
    {nome: 'Camila', idade: 27},
    {nome: 'Marcela' , idade : 27},
    {nome: 'Maria' , idade : 55}
]

/*let pessoasComIdade27 = []
for (let i = 0 ; i < pessoas.length; i++){
    if(pessoas[i].idade ===27){
    pessoasComIdade27.push(pessoas[i])
    }
} */ 


let pessoasComIdade27 = pessoas.filter((pessoa)=>{

    return pessoa.idade === 27
}

)

console.log(pessoasComIdade27)