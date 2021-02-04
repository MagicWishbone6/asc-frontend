import React from 'react';
import Container from 'react-bootstrap/Container'
import Post from './Post.jsx'

function Posts(props) {
    return (
        <Container className="mt-3">
            <h6>Posts Component</h6>
            <Post />
        </Container>
    );
}

export default Posts;