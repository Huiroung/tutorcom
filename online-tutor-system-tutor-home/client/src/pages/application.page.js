import React, {Component} from 'react';
import { Button, Card, Col, Container, Form, Row, ProgressBar } from 'react-bootstrap';

class Application extends Component {


    constructor(){
        super();
        //change state to hold json containing individual files and 
        this.state = {
            filesUploaded: false,
            progress:{
                degree:0,
                transcript:0,
                reference:0,
            }
        }

        this.progressLabel = this.progressLabel.bind(this);  
    }

    progressLabel(progressData){
        if(progressData === 0){
            return '';
        } else {
            return `${progressData}%`;
        }
    }

    handleFile(e){
        console.log(e.target.files[0]);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("hello");
    }

    render(){

        return(
            <Container className="d-block w-">
                <Col className="my-5">
                    <h1>Application Submission</h1>
                <Card className="my-5">                    
                    <Card.Body>
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Row>
                                <Col>
                                    <h6>Degree</h6>
                                    <Form.File id="degree-file" className="my-5" />
                                    <ProgressBar now={this.state.progress.degree} label={this.progressLabel(this.state.progress.degree)} />
                                </Col>

                                <Col>
                                    <h6>Transcript</h6>
                                    <Form.File id="transcript-file" className="my-5" />
                                    <ProgressBar now={this.state.progress.transcript} label={this.progressLabel(this.state.progress.transcript)} />
                                </Col>
                                <Col>
                                    <h6>Reference</h6>
                                    <Form.File id="reference-file" className="my-5" />
                                    <ProgressBar now={this.state.progress.reference} label={this.progressLabel(this.state.progress.reference)} />
                                </Col>
                            </Row>
                            <Row className="d-flex flex-row-reverse mt-5 pt-2" >
                            <Button type='submit' variant="dark" disabled={this.state.filesUploaded} className="my-3 mr-5 p-3">Send Application</Button>
                            </Row>
                        </Form> 
                    </Card.Body>
                </Card>

                </Col>
            </Container>
        );
    }

}

export default Application;