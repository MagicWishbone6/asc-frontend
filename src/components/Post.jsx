import React from 'react';
import Card from 'react-bootstrap/Card'

function Post({title, body, author}) {
    return (
        <Card
        className="align-items-start mt-2 ">
            <Card.Header
            className="pt-1 pb-1" 
            style={{width: '100%'}}>
                <Card.Title className="mt-1 mb-2 float-left">
                    {title}
                </Card.Title>
                <Card.Subtitle className="mb-1">
                    <a href="/" className="text-muted float-right mt-2">
                        {author}
                    </a>
                </Card.Subtitle>
            </Card.Header>
            <Card.Body className="pt-3 pb-3">
                <Card.Text>
                    {body}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Post;