import React from 'react';
import { Card, Spinner } from 'react-bootstrap';

function RenderAnswer({ answer }) {
    return (
        <>
        <div className="row">
            <div className="col-12 answer-text">
                Answer to your Query
            </div>
        </div>
        <div className="row">
            <Card style={{ width: '18rem', margin: '9px' }} classname="col-md-3 m-2 col-12">
                        <Card.Img variant="top" src={answer.answer.image} />
                        <Card.Body>
                          <Card.Title>{answer.answer.type}</Card.Title>
                          <Card.Text>{answer.answer.answer}</Card.Text>
                        </Card.Body>
                      </Card>
        </div>
        </>
    );
}


const Answer = (props) => {
    if (props.answerisLoading)
    return (
        <div className="container">
            <div className="row">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        </div>
    );

else if (props.answererrMess)
    return (
        <div className="container">
            <div className="row">
                <h4>{props.errMess}</h4>
            </div>
        </div>
    );

else 
    return (
        <div className="container">
            <RenderAnswer answer={props.answer} />
        </div>
    );
    
}

export default Answer;