import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Post from './Post.jsx'

function Posts(props) {
    const [postFeed, setPostFeed] = useState()

    useEffect(() => {
        getMessagesWithFetch()
    },[])

    const getMessagesWithFetch = async () => {
        const response = await fetch(apiUrl)
        const jsonData = await response.json()
        setPostFeed(jsonData)
    }

    return (
        <Container className="mt-3">
            <h6>Posts Component</h6>
            {postFeed.map(post => 
                <Post 
                />)}
        </Container>
    );
}

export default Posts;