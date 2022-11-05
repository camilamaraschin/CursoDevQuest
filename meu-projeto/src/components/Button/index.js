const mensage = ()=>{
    console.log ("Muito bem, curriculo está sendo baixado")
}


function Button (props){

    return (
        
        <>
          <button className='btn' onClick={mensage}>{props.label}</button>
          

        </>

    )
}

export default Button