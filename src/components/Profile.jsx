import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

function Profile(props) {
    return (
        <Container>
            <Row>
                <h5>Profile Component</h5>
            </Row>
            <Row>
                <Col 
                xs={4}
                s={4}
                m={4}
                l={4}
                >
                    Profile Picture Area</Col>
                <Col
                xs={8}
                s={8}
                m={8}
                l={8}>
                    <Card>
                        <Card.Body>
                            <Card.Text>User's Profile Bio</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;