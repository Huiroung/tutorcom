import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

import Appointment from './appointment.component';


class AppointmentsList extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        return(
            <div>
                <Table className="borderless" >
                    <thead className="thead-dark">
                        <tr>
                            <th className="text-center">Date</th>
                            <th className="text-center">Time</th>
                            <th className="text-center">Tutor</th>
                            <th className="text-center"></th>
                        </tr>
                   </thead>
                        <tbody>
                            {this.props.appointments.map(appointment => (
                                <Appointment  appointment={appointment}/>
                            ))
                            }
                        </tbody>
                    </Table>
 
            </div>
        );

    }


}

export default AppointmentsList;