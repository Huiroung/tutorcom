import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Appointment extends Component{

    constructor(props){
        super(props);
        this.state = {
            textCSS: ''
        }
    }

    componentDidMount(){

        if(this.props.appointment.isExpired){
            this.setState({
                textCSS: 'text-muted'
            });
        }
    }

    render(){
    
        return(
            <tr className={`py-4 ${this.state.textCSS}`}>
                <td className="text-center">{this.props.appointment.sessionDate}</td>
                <td className="text-center">{this.props.appointment.sessionTime}</td>
                <td className="text-center">{this.props.appointment.tutorName}</td>
                <td className="text-center"><Link to='/'>{(this.props.appointment.isExpired) ? 'View':'Join'}</Link></td>
            </tr>
        );
    }

}

export default Appointment;