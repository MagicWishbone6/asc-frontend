import React from 'react';
import Container from 'react-bootstrap/Container'
import Posts from './Posts.jsx'

function Home(props) {
    return (
        <Container>
            <h5>Home Component</h5>
            <Posts />           
        </Container>
    );
}

export default Home;