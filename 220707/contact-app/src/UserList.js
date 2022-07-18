import React from 'react';
import Container from './Container';

function User({user}) {
    console.log(user);
    return (
        <div>
            <b>{user.name}</b> <span>{user.email}</span>
        </div>
    );
};

function UserList({users}) {
    return (
        <Container>
            <div>
                {
                    users.map( user => ( <User user={user} key={user.id}/> ))
                }
            </div>
        </Container>
    );
}

export default UserList;