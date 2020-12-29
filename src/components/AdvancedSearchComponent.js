import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
class AdvancedSearch extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="container">
                <Form onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target),
                                    formDataObj = Object.fromEntries(formData.entries())
                                this.props.fetchAnswer(formDataObj.question);
                            }} className="offset-4">
                                <Form.Group controlId="list">
                                    <Form.Control as="textarea" placeholder="Ask Any Question" name="question" innerRef={input => this.question = input} id="form" size="lg"/>
                                </Form.Group>
                            </Form>
                </div>
        );
    }
}

export default AdvancedSearch;