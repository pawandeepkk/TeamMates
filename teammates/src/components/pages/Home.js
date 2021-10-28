import React from 'react';
import { render } from 'react-dom';
import Card from '../generic/Card';
import Assignment from './Assignment';

function Home() {
    //dummy data ------------------
   const upcomingAssignments = [{
        title: "Software Development Practice EPIC 2",
        code: "CI6125",
        dueDate: "04/11/2021",
        description: "Based  on  the  shared  and  individual  outcomes  from  the  workshop  2  and  workshop  3,  do  a write-up  covering  the  following  5  sections.  As  in  Epic  1,  we  will  be  creating  an  ePortfolio GoogleSite in TB2 based on these sections, and other content from subsequent Epics.",
    },
    {
        title: "Mobile Application Development",
        code: "CI6330",
        dueDate: "10/01/2022",
        description: "This module provides a foundation for careers in mobile application development: mobile is becoming increasingly ubiquitous and the skills taught also have applications in UX, web development and software engineering in general. Although there are no prerequisites, it is assumed that students have acquired a general familiarity with programming and software development principles through their previous study."
    },
    ];

    const pastAssignments = [{
        title: "Software Development Practice EPIC 1",
        code: "CI6125",
        dueDate: "20/10/2021",
        description: "Based  on  the  shared  and  individual  outcomes  from  the  workshop  2  and  workshop  3,  do  a write-up  covering  the  following  5  sections.  As  in  Epic  1,  we  will  be  creating  an  ePortfolio GoogleSite in TB2 based on these sections, and other content from subsequent Epics.",
    },
    {
        title: "Programming III",
        code: "CI6115",
        dueDate: "15/10/2021",
        description: "Based  on  the  shared  and  individual  outcomes  from  the  workshop  2  and  workshop  3,  do  a write-up  covering  the  following  5  sections.  As  in  Epic  1,  we  will  be  creating  an  ePortfolio GoogleSite in TB2 based on these sections, and other content from subsequent Epics.",
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
                  {
                      upcomingAssignments.map(assignmentInfo => {
                    return(
                        <div>
                        <Card
                            title={assignmentInfo.title + " (" + assignmentInfo.code + ")"}>
                            <span>{"Due: " + assignmentInfo.dueDate}<br/></span>
                            <span>{assignmentInfo.description}</span>
                        </Card>
                        </div>
                    );
                   })
                  }

                <h1>My Past Group Assignments</h1>
                {
                    pastAssignments.map(pastAssignmentInfo => {
                        return(
                            <div>
                                <Card
                                    title={pastAssignmentInfo.title + " (" + pastAssignmentInfo.code + ")"}>
                            <span>{"Due: " + pastAssignmentInfo.dueDate}<br/></span>
                            <span>{pastAssignmentInfo.description}</span>
                            </Card>
                            </div>
                        )
                    })
                }
                
             </section>
         );
    }


export default Home;