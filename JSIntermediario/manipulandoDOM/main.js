function adicionarComentario(){
  let inputComentario = document.getElementsByName('novo-comentario');

  let textoDigitado = inputComentario[0].value

  
  let novosCometarios = document.getElementById ('novos-comentarios')

  novosCometarios.innerHTML += `<p> Novo comentário: ${textoDigitado} </p>`

}