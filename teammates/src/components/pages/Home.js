import Card from '../generic/Card';
import Assignment from './Assignment';

function Home() {
    //dummy data ------------------
    const UpcomingAssignments = [
        {
            title: "Software Development Practice",
            code: "CI6125",
            dueDate: "04/11/2021",
            description: "lorem ipsum",
        },
        {
            title: "Mobile Application Development",
            code: "CI6330",
            dueDate: "10/01/2022",
            description: "lorem ipsum"
        },
    ];
    //properties ---------------------
    //hooks ---------------------
    //context ---------------------
    //methods ---------------------
    //view ---------------------
    return (
        <section>
            <h1>My Group Assignments</h1>
            <Card
            title="My Upcoming Group Assignments">

            </Card>

        </section>

        
    )
}

export default Home;