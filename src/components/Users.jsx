import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Users(props) {
    return (
        <Container
        className="align-items-start">
            <h5>Users Component</h5>
            <Card
            className="align-items-start">
                <Card.Header
                className="d-inline-flex"
                style={{
                    width: '100%'
                }}>
                    <Card.Title
                    className="mb-1">
                        <a 
                        href="/"
                        style={{
                            color: 'black'
                        }}>
                            User Username
                        </a>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Some Information relating to User
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Users;