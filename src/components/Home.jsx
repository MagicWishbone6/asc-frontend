import React from 'react';
import Container from 'react-bootstrap/Container'
import Posts from './Posts.jsx'
import Login from './Login.jsx'
import CreateProfile from './CreateProfile.jsx'
import Profile from './Profile.jsx'
import User from './User.jsx'
import Users from './Users.jsx'
import CreatePost from './CreatePost.jsx'

function Home(props) {
    return (
        <Container className="mt-4">
            <h5>Home Component</h5>
            <Profile />
            <User />
            <Users />
            <Posts />
            <Login />
            <CreateProfile />
            <CreatePost />           
        </Container>
    );
}

export default Home;