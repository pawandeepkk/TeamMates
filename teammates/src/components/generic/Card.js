import './Card.css';

function Card({title,body}) {
    //properties ---------------------
    //hooks ---------------------
    //context ---------------------
    //methods ---------------------
    //view ---------------------
    return (
        <section className='card-container'>
            <section className='card-title'>
             <h3>{title}</h3>
            </section>

            <section className='card-content'>
                <section className='card-body'>
                    <p>{body}</p>
                </section>
                
            </section>

        </section>
    )
}

export default Card;