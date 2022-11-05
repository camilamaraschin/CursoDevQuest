import React from 'react'

function Card ({titulo, name, age}){

    return (

        <div className='Card'>
        <h1>{titulo}</h1>
        <h2> {name}</h2>
        <h3>{age}</h3>


        </div>
    )
}







/*
 -> Exemplo de uma compomente class 
class Card extends React.Component {
    render() {
        return(
            <div className='card'> 
    
            <h1> Um titulo</h1>
            <p> Um subtitulo aqui </p>
            
            </div>
        )

        
    } 
}
*/


export default Card 