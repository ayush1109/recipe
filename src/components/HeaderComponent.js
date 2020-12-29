import React, { useState } from 'react';
import { Navbar, Nav, Modal, Form, Button } from 'react-bootstrap';
import { HeartFill, Search } from 'react-bootstrap-icons';
import { Instagram, Twitter, Facebook } from 'react-feather';


function Header(props) {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <>
            <Navbar id="navbar" fixed="top" expand="lg" collapseOnSelect>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <ul className="col-sm-4 col-12">
                        <Navbar.Text><HeartFill /></Navbar.Text>
                        <Nav.Link onClick={handleShow2}>Log-in/Sign-up</Nav.Link>
                    </ul>
                    <ul className="col-sm-5 col-12">
                        <Nav.Link id="heading" >epicurious</Nav.Link>
                    </ul>
                    <ul className="col-sm-3 col-12">
                        <Nav.Link>Follow</Nav.Link>
                        <Navbar.Text id="icon"><Instagram /></Navbar.Text>
                        <Navbar.Text id="icon"><Twitter /></Navbar.Text>
                        <Navbar.Text id="icon"><Facebook /></Navbar.Text>
                        <Nav.Link onClick={handleShow1}>Search<Search /></Nav.Link>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Body closeButton>
                    <Form onSubmit={(e) => {
                        handleClose1();
                        e.preventDefault();
                        const formData = new FormData(e.target),
                            formDataObj = Object.fromEntries(formData.entries())
                        console.log(formDataObj.dish)
                        props.fetchRecipes(formDataObj.dish);
                    }}>
                        <Form.Group controlId="list">
                            <Form.Control as="input" name="dish" placeholder="Find A Recipe" innerRef={input => this.dish = input} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>LogIn/SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => {
                        handleClose2();
                        e.preventDefault();
                    }}>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control as="input" name="username" placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control as="input" type="password" name="question" placeholder="password" />
                        </Form.Group>
                        <Form.Group controlId="button">
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form.Group>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Header;