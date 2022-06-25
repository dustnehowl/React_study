## React를 배우기 전에 알면 좋은 js 의 몇가지 features

* ES6 classes
* The new variable declaration let/const
* Arrow functions
* Destructuring assignment
* Map and filter
* ES6 module system

굉장히 중요한 features 이다.

## 개발환경 설정

1. node.js 설치

    react를 시작하는 몇가지 방법이 있는데 그중 다음 명령어를 통해 시작 할 것이다.
    ```node.js
    npx create-react-app my-app
    ```
    npx 명령어는 node.js 명령어 이기 때문에 nodejs.org/ko/ 에 접속해 node.js를 설치한 후 실행한다.

2. npm start

    1번의 명령어를 입력하면 자동으로 기본적인 템플릿이 생성되는데 code . 명령어를 통해 vs code를 열어준다. 

    이후 터미널에서 npm start 명령어를 입력하면 코딩을 하며 즉각적으로 확인할 수 있는 웹이 뜬다.

## ES6 classes

<strong>정의, 선언</strong>

```javascript
// 정의
class Developer {
  constructor(name){ //constructor
    this.name = name; // member variable
  }

  hello(){ // method
    return 'Hello World! I am ' + this.name + ' and I am a web developer';
  }
}

// 선언
var nathan = new Developer('Nathan');
nathan.hello();
```

<strong>ES6 상속</strong>

```javascript
class ReactDeveloper extends Developer {
  installReact(){
    return 'installing React .. Done.';
  }
}

var nathan = new ReactDeveloper('Nathan');
nathan.hello(); // 부모 class 의 method 사용가능
nathan.installReact(); 
```

<strong>ES6 method override</strong>

```javascript
class ReactDeveloper extends Developer {
  installReact(){
    return 'installing React .. Done.';
  }

  hello(){
    return 'Hello World! I am ' + this.name + ' and I am a REACT developer';
  }
}

var nathan = new ReactDeveloper('Nathan');
nathan.hello();
```
## let, var 의 차이, const

* let - local variable
* var - global variable
* const - cannot changed its value after declaration(상수)

## Arrow function

함수 정의를 다음과 같은 과정을 통해 간단한 문법으로 할 수 있다.

<ol>
    <li>remove function keyword</li>
    <li>add the fat arrow symbol => after ()</li>
</ol>

```javascript
// regular function
const testFunction = function() {
  // content..
}

// arrow function
const testFunction = () => {
  // content..
}
const testFunction = (firstName, lastName) => { // many parameters
  return firstName+' '+lastName;
}
const singleParam = firstName => { // only one parameter
  return firstName;
}
```

<strong>Implicit return</strong>

```javascript
const testFunction = () => 'hello there.'; // 괄호 생략가능
testFunction(); 
```

## Destructuring assignment (구조 분해 할당)

말로 설명하기는 어렵지만 다음과 같은 방법으로 직관적으로 변수들에 기존에 있던 구조체 속 자료들을 할당할 수 있다.

```javascript
const developer = {
  firstName: 'Nathan',
  lastName: 'Sebhastian',
  developer: true,
  age: 25,
}

//destructure developer object
const { firstName, lastName } = developer;
console.log(firstName); // returns 'Nathan'
console.log(lastName); // returns 'Sebhastian'
console.log(developer); // returns the object

const numbers = [1,2,3,4,5];
const [one, two] = numbers; // one = 1, two = 2
```

useState hook을 이용할 수 있다.
```javascript
const [user, setUser] = useState('');
```

## Map and Filter

JSON 데이터에 map을 이용하여 list의 item에 다음과 같이 접근할 수 있다.
```javascript
import React, { Component } from 'react';

class App extends Component {
  // class content
  render(){
    const users = [
      { name: 'Nathan', age: 25 },
      { name: 'Jack', age: 30 },
      { name: 'Joe', age: 28 },
    ];

    return (
      <ul>
        {users
          .map(user => <li>{user.name}</li>)
        }
      </ul>
    )
  }
}

<ul>
  {users
    .filter(user => user.age > 26) // filter 사용하여 조건 추가 가능
    .map(user => <li>{user.name}</li>)
  }
</ul>
```

## ES6 Module system

다른 파일에 있는 함수들을 사용할 수 있음
```javascript
// in util.js
export function times(x) {
  return x * x;
}

export function plusTwo(number) {
  return number + 2;
}

// in app.js
import { times as multiplication, plusTwo as plus2 } from './util.js';
```
