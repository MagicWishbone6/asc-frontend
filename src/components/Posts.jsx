import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Post from './Post.jsx'
import data from '../postSeeds.json'

function Posts(props) {
    // const [postFeed, setPostFeed] = useState([])

    // let apiUrl = "../db/postSeeds.json"

    // useEffect(() => {
    //     getMessagesWithFetch()
    // },[])

    // const getMessagesWithFetch = async () => {
    //     const response = await fetch(apiUrl)
    //     const jsonData = await response.json()
    //     setPostFeed(jsonData)
    // }

    // setPostFeed(data)

    const newData = data

    return (
        <Container className="mt-3">
            <h6>Posts Component</h6>
            {newData.map(post => 
                <Post
                title={post.title} 
                body={post.body}
                author={post.author}
                />)}
        </Container>
    );
}

export default Posts;