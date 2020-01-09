# 9장. 객체와 객체지향 프로그래밍
## 목차
1. 프로퍼티 나열
2. 객체지향 프로그래밍
3. 다중 상속, 믹스인, 인터페이스


## :one: 프로퍼티 나열

### 배열 vs 객체
- 비슷한 점: 컨테이너
- 다른 점

|        |  배열  |     객체     |
|:------:|:------:|:------------:|
|  저장  |   값   |   *프로퍼티   |
| 인덱스 | 숫자형 | 문자열, 심볼 |
|  순서  |  있음  |   보장 안됨  |

* **프로퍼티**: 키(문자열, 심볼) + 값
- 객체는 키를 통해 프로퍼티에 접근할 수 있음


### 프로퍼티 나열 방법 1: `for...in`
- 키가 심볼인 프로퍼티는 포함되지 않음
- 배열에도 사용할 수 있지만 좋은 방법은 아닌 이유
    1. 순서를 보장하지 않음
    2. 열거할 수 없는 프로퍼티의 존재  
     (length와 같은 배열 내의 프로퍼티 사용 불가)
    3. 프로토타입 상속한 프로퍼티도 나열함



#### `hasOwnProperty() 메소드`
- 객체가 특정 프로퍼티를 가지고 있는지를  나타내는 불리언 값을 반환함
- `for...in`에 나타날 위험을 제거하기 위해 사용
- 프로퍼티를 프로토타입에 정의하지 못하도록 확실히 확인하기 위해 사용
#### 예제 코드
```js
const object = {a: 1, b: 2, c: 3};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```


### 프로퍼티 나열 방법 2: `Object.keys`
- 객체에서 나열 가능한 문자열 프로퍼티를 배열로 반환
- 객체의 프로퍼티 키를 배열로 가져올 때 편리함
#### 예제 코드
```js
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
```


## :two: 객체지향 프로그래밍(OOP, Object-oriented programming)
- 컴퓨터 프로그램을 `객체(Object)`들의 모임으로 파악하고자 하는 프로그래밍의 패러다임 중에 하나
#### OOP 기본 용어

| 용어                   | 뜻                                                 |
|------------------------|----------------------------------------------------|
| 클래스                 | 추상적이고 범용적인 것                             |
| 인스턴스               | 구체적이고 한정적인 것                             |
| 메소드                 | 기능                                               |
| 클래스 메소드          | 클래스에 속하지만 특정 인스턴스에 묶이지 않는 기능 |
| 생성자                 | 객체 인스턴스를 초기화함                           |
| 슈퍼클래스(부모클래스) | 상속을 해준 클래스                                 |
| 서브클래스(자식클래스) | 상속을 받은 클래스                                 |
### 클래스와 인스턴스 생성
#### 예제 코드
```js
// 클래스 생성
class Car {
    constructor(make) {
        this.make = make;
        this.userGear = "p";
    }
    shift(gear) {
        this.userGear = gear;
    }
}

// 인스턴스 생성
const car = new Car();

// 객체가 클래스의 인스턴스인지 확인
car instanceof Car; // true
car instanceof Train; // false

// 호출 => this가 car에 묶임
car.shift('D');
```

#### `this` 키워드
- 의도한 목적, 즉 메소드를 호출한 인스턴스를 가리키는 목적으로 쓰임
- 인스턴스의 `placeholder`

#### 가짜 접근 제한
- `car._userGear = 'X'`와 같이 쓰면 외부에서 접근이 안 됨


### 클래스는 함수다
- `자바스크립트의 class`: 단축 문법
- ES5에서는 `function`으로 클래스를 만들었음

### 프로토타입
- 클래스의 인스턴스에서 사용할 수 있는 메소드
```js
// 프로토타입 표기법
Car.prototype.shift
Car#shift
```
- 모든 함수에는 `prototype`이라는 특별한 프로퍼티 존재
- 객체 생성자(클래스)로 동작하는 함수에서 중요

#### 프로토타입 체인을 통해 `동적 디스패치` 구현
- 디스패치: 프로그램이 어떤 메소드를 호출할 것인가를 결정하여 그것을 실행하는 과정
- 동적 디스패치: 인터페이스를 이용해 참조함으로서 호출되는 메서드가 동적으로 정해지는 디스패치
- 프로토타입 체인: 객체의 프로토타입에서 메소드를 찾지 못하면 프로토타입의 프로토타입을 검색하는 방식, 조건에 맞는 프로토타입을 찾지 못하면 에러 발생


### 정적 메소드
- 클래스 메소드
- 특정 인스턴스에 적용되지 않음
- `this`가 인스턴스가 아니라 클래스 자체에 묶임
- 정적 메소드에서는 this대신 `클래스 이름`을 사용하는 것이 좋음
- 클래스에 관련되지만 인스턴스와는 관련이 없는 범용적인 작업에 사용
- 여러 인스턴스를 대상으로 하는 작업에 사용
#### 예제 코드
```js
class imageInfoSave {
    static getNextTitle() {
        return imageInfoSave.NextTitle++;
    }

    constructor() {
        this.title = "제목" + imageInfoSave.getNextTitle();
    }
}

imageInfoSave.NextTitle = 1;
let i = 0;
while (i < 13) {
    const info = new imageInfoSave();
    i++;
    console.log(`${info.title}`);
}
// Output
// 제목1
// 제목2
// ...
// 제목13
```


### 상속
- 클래스의 인스턴스: 클래스의 기능을 모두 상속함
- 프로토타입 체인에서 가장 적절한 위치에 메소드 정의
- 단방향
#### 예제 코드
```js
class B {
    ...
}
class A extends B {
    constructor() {
        super();
    }
}
```
- `extens` 키워드: A를 B의 서브클래스로 만들어 줌
- `super()`: 슈퍼클래스의 생성자를 호출하는 특별한 함수, 서브클래스에서 이 함수를 호출하지 않으면 에러 발생

### 다형성
- 객체지향 언어에서 여러 슈퍼크래스의 멤버인 인스턴스를 가리키는 말
- 자바스크립트의 객체는 모두 다형성을 갖고 있다고 할 수 있음
    - 느슨한 타입을 사용함
    - 어디서든 객체를 쓸 수 있음
    - 자바스크립트의 모든 객체: 루트 클래스인 `Object`의 인스턴스





## :three: 다중 상속, 믹스인, 인터페이스

### 다중 상속
- 클래스가 슈퍼클래스 두 개를 가지는 기능

### 믹스인
- 기능을 필요한 만큼 섞어 놓은 것

### 인터페이스



## 참고
- [MDN 예제코드](https://developer.mozilla.org/ko/docs/Web/JavaScript/)
- [javascript for in 문](https://webclub.tistory.com/243)
- [객체 지향 프로그래밍(OOP : Object Oriented Programming) 개념 및 활용 정리](https://velog.io/@cyranocoding/%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8DOOP-Object-Oriented-Programming-%EA%B0%9C%EB%85%90-%EB%B0%8F-%ED%99%9C%EC%9A%A9-%EC%A0%95%EB%A6%AC-igjyooyc6c)
- [슈퍼클래스 와 서브클래스](https://tuhbm.github.io/2018/03/11/superClassAndSubClass/)
- [디스패치 (Dispatch)](https://feco.tistory.com/86)
- [토비의봄#01. Double Dispatch](https://multifrontgarden.tistory.com/133)
- []()