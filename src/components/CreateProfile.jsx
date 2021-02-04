import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import FormGroup from 'react-bootstrap/FormGroup'

function CreateProfile(props) {
    const [userStatus, setUserStatus] = useState("")
    const [userBio, setUserBio] = useState("")
    const [isHidden, setIsHidden] = useState(false) 

    const handleChange = (event) => {
        if (event.target.id === `statusInput`) {
            setUserStatus(event.target.value)
        } else if (event.target.id === `bioInput`) {
            setUserBio(event.target.value)
        }
        event.preventDefault()
    }

    const handleClick = (event) => {
        if (event.target.id === `leaveButton`) {
            setUserStatus("")
            setUserBio("")
            setIsHidden(true)
        } if (event.target.id === `saveNewProfileButton`) {
            setIsHidden(true)
            // CODE TO PUSH NEW INFO TO DB HERE
        }
    }

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
                onChange={handleChange}
                />
                {/* The <p> below is a debugging test to show value: */}
                <p style={{color: "magenta"}}>{userStatus}</p>
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
                onChange={handleChange}
                />
                {/* The <p> below is a debugging test to show value: */}
                <p style={{color: "magenta"}}>{userBio}</p>
            </InputGroup>
            <Button
            variant="secondary"
            className="mb-3"
            id="leaveButton"
            onClick={handleClick}>
                Leave Without Saving
            </Button>
            <Button 
            variant="primary"
            className="ml-2 mb-3"
            id="saveNewProfileButton"
            onClick={handleClick}>
                Create Profile
            </Button>
        </Form>
    );
}

export default CreateProfile;