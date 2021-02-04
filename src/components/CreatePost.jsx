import React from 'react';
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

function CreatePost(props) {
    return (
        <Form>
            <h5>Create Post Component</h5>
            <FormGroup>
                <Form.Label
                className="float-left">
                    Post Title:
                </Form.Label>
                <FormControl 
                placeholder="e.g. 'My Feelings About...'"
                aria-label="status"
                id="statusInput"
                />
            </FormGroup>
            <FormGroup>
                <Form.Label
                className="float-left">
                    Your Post Goes Here:
                </Form.Label>
                <FormControl 
                as="textarea"
                aria-label="post-body-input"
                id="postBodyInput"
                />
            </FormGroup>
            <Button
            variant="secondary"
            className="mb-3">
                Cancel
            </Button>
            <Button variant="primary"
            className="ml-2 mb-3">
                Post It!
            </Button>
        </Form>
    );
}

export default CreatePost;