import './Card.css';

function Card({title,children}) {
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
                <p>{children}</p>
            </section>
        </section>
    )
}

export default Card;