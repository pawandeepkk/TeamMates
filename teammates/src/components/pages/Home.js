import Card from '../generic/Card';

function Home() {
    //properties ---------------------
    //hooks ---------------------
    //context ---------------------
    //methods ---------------------
    //view ---------------------
    return (
        <section>
            <h1>My Group Assignments</h1>
            <Card title='Assignment 1'>
                <h3>Assignment title</h3>
                <p>Ipsem Loreum.....</p>
            </Card>

            <Card title='Assignment 2'>
                <Card className='subcard' title='Part 1'>
                    <h3>Assignment title</h3>
                    <p>Ipsem Loreum.....</p>
                </Card>
                <Card title='Part 2'>
                    <h3>Assignment title</h3>
                    <p>Ipsem Loreum.....</p>
                </Card>
            </Card>

            <Card title='Assignment 3'>
                <Assignment 
                    title='Assignment 3'
                    dueDate='1/1/22'
                    description='https://canvas.com'
                /> 

                
            </Card>
        </section>

        
    )
}

export default Home;