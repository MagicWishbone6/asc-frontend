import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import FormGroup from 'react-bootstrap/FormGroup'

function CreateProfile(props) {
    return (
        <Form>
            <h5>Create Profile Component</h5>
            <FormGroup>
                <Form.Label
                className="float-left">
                    Current Status:
                </Form.Label>
                <FormControl 
                placeholder="e.g. 'On a Boat'"
                aria-label="status"
                id="statusInput"
                />
            </FormGroup>
            <InputGroup 
            className="mt-3 mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon4">
                        A Short Bio:
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                as="textarea"
                aria-label="bio input"
                id="bioInput"
                />
            </InputGroup>
            <Button
            variant="secondary"
            className="mb-3">
                Leave Without Saving
            </Button>
            <Button variant="primary"
            className="ml-2 mb-3">
                Create Profile
            </Button>
        </Form>
    );
}

export default CreateProfile;