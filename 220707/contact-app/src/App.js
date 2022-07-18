import logo from './logo.svg';
import './App.css';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import UserList from './UserList';
import React, { useRef } from 'react';

function App() {
  const users=[
    {
        id:1,
        username:'yeonsu',
        email:'dustnehowl@hanmail.net'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  }

  return (
    <div>
      <InputSample />
      <InputSample2 />
    </div>
  );
}

export default App;
