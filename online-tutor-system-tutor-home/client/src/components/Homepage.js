import React, {Component} from 'react';
import { Form, Button, Navbar, Nav, Jumbotron, Card } from 'react-bootstrap';
import axios from 'axios';

class Homepage extends Component {

	constructor(){
		super();
		this.state = {
			email: '',
			password: '',
			validationError: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}
	
	/** EVENT HANDLERS **/
	handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

    }

	handleLogin(){
		axios.post('http://localhost:5000/auth/login',{
			email: this.state.email,
			password: this.state.password
		}).then(res => {
			console.log(res);

			if(res.status === 200){
				this.setState({
					validationError: 'success'
				});

				console.log(res.data.user.accessToken);
				localStorage.setItem("accessToken", res.data.user.accessToken);

				console.log(res.data);
			}

		}).catch(e => {
			console.log(e);
			this.setState({
				validationError: 'failed'
			});
		})
	}
	

    render(){
        return(
			//
            <div className="container">

				<Navbar id="nav">
					{/* <ul>
						<li class="current"><a href="index.html">Home</a></li>
						<li>
						<a href="#">Tutors</a>
					<ul>
						<li><a href="#">Tutor Profile</a></li>
						<li><a href="#">List of Tutors</a></li>
					</ul>
						</li>
						<li>
						<a href="#">Students</a>
					<ul>
						<li><a href="#">Student Profile</a></li>
						<li><a href="#">Book an Appointment</a></li>
					</ul>
						</li>
						<li><a href="Sign-up.html">Sign-up</a></li>
					</ul> */}

				<Navbar.Brand href="/">Tutor.com</Navbar.Brand>
					<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Register</Nav.Link>
					</Nav>
				</Navbar>

				<Jumbotron>
					<h1>Welcome to Tutor.com</h1>
					<p>An Online Tutoring Center </p>
				</Jumbotron>
                
                <h5>Please Sign-In! If you don't have an account Please sign up</h5>

				<Card body >
					<Form>				
						<Form.Group>
						<Form.Control type="text" name="email" id="email" placeholder="Email" onChange={this.handleChange} />
						</Form.Group >
						<Form.Group  className="input-group">
							<Form.Control type="text" name="password" id="login-pwd" placeholder="Password" onChange={this.handleChange} />
						</Form.Group >
							<Button type="button" onClick={this.handleLogin}>Sign-in</Button>						   
							{/* <Button type="button">Sign Out</Button>						   
							<Button type="button">Sign Up</Button>						    */}
					</Form>
					<p>{this.state.validationError}</p>                   
				</Card>
           </div>			
            
        ) 
        
    }
}

export default Homepage;