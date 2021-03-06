import React,{useState} from 'react';
import Container from './Container';

function InputSample2 () {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]:value,
        });
    };

    const onReset = () =>{
        setInputs({
            name:'',
            nickname:''
        });
    };

    return (
        <Container>
            <div>
                <input name="name" placeholder='이름' onChange={onChange} value={name} />
                <input name="nickname" placeholder='닉네임' onChange={onChange} value={nickname} />
                <button onClick={onReset}>초기화</button>
                <div>
                    <b>값: </b>
                        {name} ({nickname})
                </div>
            </div>
        </Container>
    );
};

export default InputSample2;