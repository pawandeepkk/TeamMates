import React from 'react';
import { render } from 'react-dom';
import Card from '../generic/Card';
import Assignment from './Assignment';

class Home extends React.Component {
    //dummy data ------------------
   render() {
       this.state = [ {
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
                <h1>My Upcoming Group Assignments</h1>
                  {this.state.map((assignmentInfo) => {
                    return(
                        <Card
                            title={assignmentInfo.title + " (" + assignmentInfo.code + ")"}>
                        
                        </Card>
                    );
                   })
                  }
                
             </section>
         );
    }
}

export default Home;