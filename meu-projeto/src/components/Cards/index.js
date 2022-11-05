 import Card from "../Card";



 const cardsTitle = ['Titulo 1','Titulo 2', 'Titulo 3']
 
 function Cards (){
    return(

        <div>
             <h2> Meus cards</h2>

            <div>
                {
                    cardsTitle.map((cardsTitle, index) =>{
                        return(
                            <Card key={index}>
                                <h3> {cardsTitle}</h3>
                                <p> esse é um texto card</p>
                            </Card>
                        )
                    })
                    
                    
                }
            </div>           

        </div>
    )
 }

 export default Cards 