import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Posts from './Posts.jsx'
import Login from './Login.jsx'
import CreateProfile from './CreateProfile.jsx'
import Profile from './Profile.jsx'
import User from './User.jsx'
import Users from './Users.jsx'
import CreatePost from './CreatePost.jsx'

function Home(props) {
    const [componentVisibility, setComponentVisibility] = useState({
        Profile: false,
        User: false,
        Users: false,
        Posts: false,
        Login: true,
        CreateProfile: false,
        CreatePost: false
    })

    // const renderComponent = (compName) => {
    //     if (componentVisibility[compName] === true) {
    //         return 
    //     }
    // }

    return (
        <Container 
        className="mt-4 pb-4">
            <h5>Home Component</h5>
            {/* {renderComponent(`Profile`)}
            {renderComponent(`User`)}
            {renderComponent(`Users`)}
            {renderComponent(`Posts`)}
            {renderComponent(`Login`)}
            {renderComponent(`CreateProfile`)}
            {renderComponent(`CreatePost`)} */}
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