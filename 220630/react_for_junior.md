# <strong>누구든지 하는 리액트 초심자를 위한 리액트 핵심강좌</strong>


# 220630
## 1. 소개
<strong><a href="https://velopert.com/3613">튜토리얼 문서</a></strong>


## 2. 프론트엔드 라이브러리란 무엇인가?

정적페이지 : css, html 만으로도 가능

동적페이지 : 위의것 + js 로 가능

프론트엔드 라이브러리 : 귀찮은 dom관리, 상태값 업데이트 관리를 최대한으로 줄이고, 오직 기능개발과 사용자 인터페이스를 구현하는거에 대해서 집중할 수 있도록 지원해주는 프레임워크 => 생산성 증가, 유지보수성 증가

- Angular : 사용률이 꽤 높음, 프레임워크 차원에서 성숙하다. 인지도 측면에서는 성장중이다. main으로 사용하는 개발자들이 상대적으로 적다. typescript를 기본으로 사용.
- React : component 개념에 집중되어있는 라이브러리, 서드파티 라이브러리 적극사용(리덕스), 공식 문서 x
- Vue : 초보자가 사용하기에 매우 쉬움, 디자이너나 퍼블리셔와 함께 작업 시 워크플로우가 매끄럽다. 공식 라우터, 상태관련 라이브러리 o

한번씩 기본적인 것은 사용해보고 선택하는 것을 추천.

## 3. 리액트의 Virtual DOM

변화는 상당히 복잡한 작업이다. => Mutation을 하지말고 데이터를 바뀌면 뷰를 날려버리고 새로 만들어버리자! 라는 생각에서 Virtual Dom 을 생각해냈다. 

![img](https://cdn.discordapp.com/attachments/789850706030624783/992067896148762675/unknown.png)

변화가 생기면 Virtual DOM에 적용하고 다른 부분을 찾아 patch를 적용한다.


## 4. 리액트를 특별하게 만드는 점

리액트에서만 Virtual Dom을 사용하는가 ? <strong>NO</strong>

리액트의 특징 :
- 어마어마한 생태계
- 사용하는 곳이 많다.(Airbnb, Twitch, Yahoo, FACEBOOK)
- 다시 사용하고 싶어하는 라이브러리 이다!!

## 5. 본격적인 리액트 코드 작성하기

도구 살펴보기
- Webpack : 웹프로젝트를 만들 때 파일들을 관리해주는 도구
- Babel : 자바스크립트 변환 도구 (새로운 문법 도입, ... 에 따라 )

강의 초반 부 코드

<strong><a href="https://codesandbox.io/s/4r6lqrlvj9">실습 사이트</a></strong>

## 6. JSX 기본 문법 알아보기 1




## 7. JSX 기본 문법 알아보기 2

주석처리
class -> className



## 8. Props

props : 부모가 자식에게 값을 전달할 때 사용
함수형 컴포넌트 => 더이상 component를 불러오지 않아도 된다. 
    -state, lifecycle이 없다.
    -불필요한 기능이 없어 메모리 자원도 덜 사용한다.
    -마운트 속도가 조금 더 빠르다.

defualtProps


## 9. State

자기 자신이 들고 있다.

값을 변경할 때는 언제나 setState를 통해 값을 설정해준다. 
(reRendering을 위해!!)

handleIncrease, handleDecrease 를 화살표 함수로 작성한 이유 : 일반함수로 하면 this가 뭔지 몰라서 에러가 뜬다.

    생성자에 super(props)를 선언하므로써 해결할 수 있다.


## 10. LifeCycle API 1(생명주기)

생성, 파괴 뭐 이런 중간중간에서 무슨 작업을 하고 싶을 때 알아두면 좋다.

mounting : component가 브라우저 상에 나타날때

    - constructor : 만들어질 때 가징 먼저 실행되는 함수
    - getderivedStateFromProps : props로 받은 것을 state에 동기화 하고 싶을 때 사용하는 함수

updating : props가 변경될 때

    - shouldComponentUpdate : 컴포넌트가 업데이트되는 성능을 최적화 하고 싶을 때 사용
        - virtualDom 에도 업데이트를 할지 말지를 결정
    - componentDidUpdate : 컴포넌트가 업데이트 된 후 호출되는 함수
unmounting : 사라질 때

    - componentWillUnmount : 컴포넌트가 사라지는 과정에서 호출되는 함수, 클릭이벤트 등을 리슨하게 해놨다면 없애주는 작업을 여기서 하면된다.


## 11. LifrCycle API 2

constuctor : 생성자

componentDidMount : 외부 라이브러리 연동, 컴포넌트에서 필요한 데이터 요청, 

getDerivedStateFromProps : static으로 가져와 줘야한다. 동기화 하고 싶을 때 사용

shouldComponentUpdate : 업데이트를 막아주는 기능을 할 수 있는 함수 next와 현재를 비교해서 조건을 넣으면 업데이트를 막는다.(render을 막는다.)

getSnapshotBeforeUpdate : 업데이트 되기 전의 스크롤의 정보를 가져와 현재 보고있던 것을 유지하게 해준다.

componentDidUpdate : 이전과 비교해서 특정 props가 바뀌면 어떠한 작업을 해줄 수 있다.

componentWillUnmount : 컴포넌트가 제거될 때 호출

componentDidCatch : 에러가 발생했을때 try catch 느낌?? 부모 컴포넌트에서 구현해주어야 한다.

    - error : 에러가 무엇인지
    - info : 어디서 발생했는지


## 필요한 도구 설치하기

### 작업환경 직접 설정하기

node.js 설치하기

yarn 설치하기

## Create React App 사용하기

```
create-react-app 이름
cd 이름
npm start  //개발 서버 실행
```