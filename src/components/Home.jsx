import React from 'react';
import Container from 'react-bootstrap/Container'
import Posts from './Posts.jsx'
import Login from './Login.jsx'
import CreateProfile from './CreateProfile.jsx'

function Home(props) {
    return (
        <Container className="mt-4">
            <h5>Home Component</h5>
            <Posts />
            <Login />
            <CreateProfile />           
        </Container>
    );
}

export default Home;