import React, { useState } from 'react';
import { Card, Form, Button, Modal } from 'react-bootstrap';
import { ChevronRight } from 'react-feather';
function Body(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="card">
            <Card>
                <Card.Img src="https://st.depositphotos.com/1030624/2429/i/600/depositphotos_24294999-stock-photo-omelette-with-salad.jpg" width="200" height="400" alt="Card Image" />
                <Card.ImgOverlay>
                    <Card.Title><h1 id="find">Find A Recipe</h1></Card.Title>
                    <Card.Text>
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target),
                                formDataObj = Object.fromEntries(formData.entries())
                            console.log(formDataObj.dish)
                            props.fetchRecipes(formDataObj.dish);
                        }} className="offset-4">
                            <Form.Group controlId="list">
                                <Form.Control as="input" placeholder="Find A Recipe" name="dish" innerRef={input => this.dish = input} id="form" size="lg" />
                            </Form.Group>
                        </Form>
                        <div className="wrapper">
                            <Button variant="outline-white" className="button" onClick={handleShow}>Advanced Search<ChevronRight /></Button>
                        </div>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            
        </div>
        <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form onSubmit={(e) => {
                        handleClose();
                        e.preventDefault();
                        const formData = new FormData(e.target),
                            formDataObj = Object.fromEntries(formData.entries())
                        props.fetchAnswer(formDataObj.question);
                    }}>
                        <Form.Group controlId="list">
                            <Form.Label>Quick Answer</Form.Label>
                            <Form.Control as="input" name="question" placeholder="Find answer to Any question" innerRef={input => this.question = input} />
                        </Form.Group>
                    </Form>
                    <Form onSubmit={(e) => {
                        handleClose();
                        e.preventDefault();
                        const formData = new FormData(e.target),
                            formDataObj = Object.fromEntries(formData.entries())
                        props.fetchIngredients(formDataObj.Ingredients);
                    }}>
                        <Form.Group controlId="list">
                            <Form.Label>Ingredients</Form.Label>
                            <Form.Control as="input" name="Ingredients" placeholder="type ingredients separated by comma" innerRef={input => this.Ingredients = input} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Body;