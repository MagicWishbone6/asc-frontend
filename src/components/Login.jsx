import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function Login(props) {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                Username
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                        placeholder="e.g. 'ChartreuseMonkey'"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup 
                    className="mt-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon2">
                                Password
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                        placeholder="*****"
                        aria-label="Your Password"
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Login</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
}

export default Login;