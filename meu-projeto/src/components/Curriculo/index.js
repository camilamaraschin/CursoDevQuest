

function Curriculo ({nome,profissao,color}){
    return (

 <div className='curriculo' style={{backgroundColor: 'blue'}}>
      <h3>{nome} </h3>
      <p> {profissao}</p>

      

 </div>
    )
}

Curriculo.defaultProps ={
    color: 'blue'
  
}

export default Curriculo