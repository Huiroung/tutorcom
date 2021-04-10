import React, {Component} from 'react';
import { Tabs, Tab, Container, Col, Row, Image, Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AppointmentsList from '../components/appointments-list.component';



/* TODO
    - on component mount, make api call for appointments
    - filter appointments into seperate arrays previous & upcoming
    - 
*/

class Student extends Component {

    constructor(){
        super();
        this.state = {
            user: {
                firstName:'Darren',
                lastName:'Singh',
                email:'dsingh6@student.douglascollege.ca',
                createdAt: 'Jan 7, 2021'
            },
            upcomingAppointments: [],
            previousAppointments: [],
        }
    }

    componentDidMount(){

        //TODO 
        //get user info from the provider component
        //replace appointments with axios.post call
        let appointments = [
            {
            id: '1',
            tutorName: "Darren Singh",
            sessionDate: "Mar 12, 2020",
            sessionTime: "5:00pm",
            isExpired: true 
        },
            {
            id: '1',
            tutorName: "Darren Singh",
            sessionDate: "Apr 12, 2020",
            sessionTime: "4:00pm",
            isExpired: false 
        },
            {
            id: '1',
            tutorName: "Darren Singh",
            sessionDate: "Mar 16, 2020",
            sessionTime: "3:00pm",
            isExpired: true 
        },
        {
            id: '2',
            tutorName: "Darren Singh",
            sessionDate: "Apr 22, 2020",
            sessionTime: "9:00pm",
            isExpired: false 
        }];

        let upcomingApts = appointments.filter(appointment => appointment.isExpired === false);
  
        let prevApts = appointments.filter(appointment => appointment.isExpired === true);

        this.setState({
            upcomingAppointments: upcomingApts,
            previousAppointments: prevApts,
        })
    }


    render(){

        return(

                <Row className="py-5">
                    {/* User Profile */}
                    <Col md={6} lg={4} className="px-5">
                        <Image src="userprofile.png" rounded />
                        <div className="my-4">
                            <h2>{this.state.user.firstName} {this.state.user.lastName}</h2>
                            <div className={"my-3"}>
                                <h6>{this.state.user.email}</h6>
                                <small><strong>Member Since: </strong>{this.state.user.createdAt}</small>
                            </div>
                        </div>
                        <div className="my-5">
                            <Link to="/apply" >Become a Tutor</Link>
                        </div>

                    </Col>

                    <Col md={6} lg={8} className="pr-5">
                        {/* Appointment Booking */}
                        <Row className="d-flex justify-content-center">
  
                            <Jumbotron className="w-60 h-60">
                                <Container>

                                <h1>Book an Appointment</h1>
                                <div className='d-flex justify-content-center align-baseline mt-3'>
                                    <Button variant="dark">View Tutors</Button>
                                </div>
                                </Container>
                            </Jumbotron>
                          
  
                        </Row>
                        <Col>                 
                            {/* Appointment Listings */}
                            <Tabs defaultActiveKey="upcoming" id="uncontrolled-tab-example">
                                <Tab eventKey="upcoming" title="Upcoming">
                                    <AppointmentsList appointments={this.state.upcomingAppointments}/>
                                </Tab>
                                <Tab eventKey="previous" title="Previous">
                                    <AppointmentsList appointments={this.state.previousAppointments}/>
                                </Tab>
                            </Tabs>
                        </Col>

                    </Col>
                </Row>

        ); 
    }
}

export default Student;