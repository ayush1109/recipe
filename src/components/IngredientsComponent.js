import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import {ThumbsUp} from 'react-feather';

function RenderAnswer({ answer }) {
    return (
        <>
        <div className="row">
            <div className="col-12 recipe-text">
                (Search By Ingredients Recipes)
            </div>
        </div>
        <div className="row">
                {answer.map(recipe => {
                    return (
                        <div className="col-md-3 m-2 col-12 d-flex align-items-stretch" key={recipe.id}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={recipe.image} />
                        <Card.Body>
                          <Card.Title>{recipe.title}</Card.Title>
                          <Card.Subtitle><a href={recipe.link}>See Details Here</a></Card.Subtitle>
                          <Card.Text><ThumbsUp /> : {recipe.likes} </Card.Text>
                        </Card.Body>
                      </Card>
                      </div>
                    );
                })
            }
            </div>
        
        </>
    );
        }


const Ingredients = (props) => {
    if (props.isLoading)
    return (
        <div className="container">
            <div className="row">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        </div>
    );

else if (props.errMess)
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
            <RenderAnswer answer={props.ingredients} />
        </div>
    );
    
}

export default Ingredients;