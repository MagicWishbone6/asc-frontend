import React from 'react';
import Card from 'react-bootstrap/Card'

function Post(props) {
    return (
        <Card
        className="align-items-start mt-2 ">
            <Card.Header
            className="pt-1 pb-1" 
            style={{width: '100%'}}>
                <Card.Title className="mt-1 mb-2 float-left">
                    Post Title
                </Card.Title>
                <Card.Subtitle className="mb-1">
                    <a href="/" className="text-muted float-right mt-2">
                     Author
                    </a>
                </Card.Subtitle>
            </Card.Header>
            <Card.Body className="pt-3 pb-3">
                <Card.Text>
                    Sample post text and more sample post text.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Post;