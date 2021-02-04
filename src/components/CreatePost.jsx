import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function CreatePost(props) {
    const [postTitle, setPostTitle] = useState("")
    const [postContent, setPostContent] = useState("")

    const handleChange = (event) => {
        if (event.target.id === `postTitle`) {
            setPostTitle(event.target.value)
        } else if (event.target.id === `postBodyInput`) {
            setPostContent(event.target.value)
        }
    }

    const handleClick = (event) => {
        if (event.target.id === `cancelPostButton`) {
            setPostTitle("")
            setPostContent("")
        } else if (event.target.id === `createPostButton`) {
            // ADD CODE TO PUSH INFO TO DB HERE
        }
    }

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
                aria-label="post-title"
                id="postTitle"
                onChange={handleChange}
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
                onChange={handleChange}
                />
            </FormGroup>
            <Button
            variant="secondary"
            className="mb-3"
            id="cancelButton"
            onClick={handleClick}>
                Cancel
            </Button>
            <Button 
            variant="primary"
            className="ml-2 mb-3"
            id="createPostButton"
            onClick={handleClick}>
                Post It!
            </Button>
        </Form>
    );
}

export default CreatePost;