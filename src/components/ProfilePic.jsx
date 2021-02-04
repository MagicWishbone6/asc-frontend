import React from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

function ProfilePic(props) {
    return (
        <Container>
            <Card>
                <Card.Header>
                    <Card.Title>
                        Profile Pic Component
                    </Card.Title>
                </Card.Header>
            </Card>
        </Container>
    );
}

export default ProfilePic;