# <strong>공식문서 Tutorial</strong>

# 220625 React 

실습위주로 익숙해지기

## 목표
<strong>다음과 같은 tic-tac-toe 게임을 만들어 보자!</strong>
![img](https://cdn.discordapp.com/attachments/789850706030624783/990225265634447400/2022-06-25_8.59.31.png)

## 개발 환경
1. Coding in web browser
2. Local development

중 <strong>Web browser 채택</strong>


## Overview

### React란?

사용자 인터페이스를 위한 javascript 라이브러리 이다. component들을 합쳐서 복잡한 UI들을 만들어 낼 수 있다.

React는 몇몇 component가 있지만 그중 <strong>React.Component</strong> 의 서브클래스로 프로젝트를 시작한다.

```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```

### Inspecting the Starter Code
<a href="https://codepen.io/gaearon/pen/oWWQNa?editors=0010">Starter Code</a>

Starter code를 보면 3개의 components를 확인할 수 있다.
1. Square -> button
2. Board -> 9개의 Square
3. Game

### Passing Data Through Props

```javascript
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```
자식 클래스에게 부모 클래스가 props라는 이름으로 데이터를 넘겨줄 수 있다.

<strong>결과 </strong>

Before :
![img](https://cdn.discordapp.com/attachments/789850706030624783/990230674512420874/2022-06-25_9.22.51.png)

After :
![img](https://cdn.discordapp.com/attachments/789850706030624783/990230716631621672/2022-06-25_9.23.16.png)

### Making an Interactive Component

Square를 누르면 X가 표시되도록 해보자!

1. 클릭하면 'click'이라고 콘솔에 표시

```javascript
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function() { console.log('click'); }}>
        {this.props.value}
      </button>
    );
  }
}
```
개발자 도구에서 클릭을 할때 'click'이라고 나오는 것을 확인할 수 있다.


2. state 선언 후 setState로 value 업데이트 해주기
```javascript
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}
```

onClick event시에 setState를 호출하여 자식 component의 값을 자동으로 업데이트 시켜줄 수 있다.

### 결과 및 full code
<a href="https://codepen.io/gaearon/pen/VbbVLg?editors=0010"><strong>전체코드</strong></a>


# 220630

