import React from 'react';
import Container from './Container';

function CreateUser({ username, email, onChange, onCreate}) {

    const onChange = () => {

    }

    const onCreate  = () => {

    }
    
    return (
        <Container>
            <div>
                <input name="username" placeholder="계정명" 
                onChange={onChange}
                value={username} />

                <input name="email" placeholder="이메일" 
                onChange={onChange}
                value={email} />
                
                <button onClick={onCreate}>등록</button>
            </div>
        </Container>
    );
};

export default CreateUser;