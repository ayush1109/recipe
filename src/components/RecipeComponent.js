import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
function RenderCorona({ recipes }) {
    return (
        <>
        <div className="row">
            <div className="col-12 recipe-text">
                Recipes
            </div>
        </div>
        <div className="row">
            {recipes.recipes.searchResults.map(r => {
                return (
                r.results.map(recipe => {
                    return (
                        <div className="col-md-3 m-2 col-12 d-flex align-items-stretch" key={recipe.id}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={recipe.image} />
                        <Card.Body>
                          <Card.Title>{recipe.name}</Card.Title>
                          <Card.Subtitle><a href={recipe.link}>See Details Here</a></Card.Subtitle>
                          <Card.Text>{recipe.content}</Card.Text>
                        </Card.Body>
                      </Card>
                      </div>
                    );
                })
                )
            })}
        </div>
        </>
    );
}


const Recipe = (props) => {
    if (props.recipesisLoading)
        return (
            <div className="container">
                <div className="row">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            </div>
        );

    else if (props.recipeserrMess)
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );

    else if(props.recipes)
        return (
            <div className="container">
                <RenderCorona recipes={props.recipes} />
            </div>
        );
        }

export default Recipe;