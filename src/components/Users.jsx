import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import User from './User'

function Users() {

    const [users, setUsers] = useState([])
 
    const fetchUsers = () => {
        const apiUrl = 'https://after-school-club.herokuapp.com/users';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => setUsers(data)) 
    }

    useEffect(() => {
        fetchUsers()
    }, []) 


    return (
        <Container
        className="align-items-start">
            <h5>Users Component</h5>
            {users.map(user => 
                <User
                username={user.username} 
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                status={user.status}
                bio={user.bio}
                password={user.password}
                />
            )}
        </Container>
    );
}

export default Users;