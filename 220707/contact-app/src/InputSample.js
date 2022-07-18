import React, {useState} from 'react'
import Container from './Container';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = (e) => {
        setText('');
    }

    return (
        <Container>
            <div>
                <input onChange={onChange} value={text}/>
                <button onClick={onReset}>초기화</button>
                <div>
                    <b>
                        값 : {text}
                    </b>
                </div>
            </div>
        </Container>
    );
};
export default InputSample;