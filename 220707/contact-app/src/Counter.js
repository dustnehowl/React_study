import React,{useState} from 'react'
import Container from './Container.js'

const Counter = (props) =>{

    const [count, setCount] = useState(props.initialValue);
    console.log(props);

    const onIncrease = () =>{
        setCount(count + 1);
    }
    const onDecrease = () =>{
        setCount(count - 1);
    }

    return (
        <Container>
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
        </Container>
    );
};

export default Counter;