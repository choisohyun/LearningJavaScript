## 자바스크립트의 값: 원시 값 또는 객체  <br />

#### 원시 값과 객체의 차이

```js
let a = 3;
let b = 3;
console.log(a == b);
//결과: true

let obj1 = {a:1, b:2}
let obj2 = {a:1, b:2}
console.log(obj1 == obj2);
//결과: false

const a = 1;
a = 5;
//결과: 에러

const obj = {a:1}
obj.a = 5
console.log(obj.a);
//결과: 5
```
    
### 변수(variable)  
        
- 이름이 붙은 값. 
- 언제든 바뀔 수 있음. 
- 변수 선언 시 초기값 할당 안해도 됨.

### 상수(constant)  
        
        
- 한 번 할당한 값을 바꿀 수 없음
- 상수 이름에는 대문자와 언더바만 사용.
        
### **변수 vs 상수**  
        
        
- `상수 win.`
- 고정된 값이 이해하기 쉬움.
- 사용자가 여러명이라면 변수 하나를 재사용하기보다 변수 이름을 따로 생성하는 것이 좋음.
        
### 리터럴(literal)  
        
        
- 값을 프로그램 안에서 직접 지정한다는 의미, 값을 만드는 방법.
- 자바스크립트는 따옴표를 통해 리터럴과 식별자를 구분함.
        
### 이스케이프  
        
```js      
// 에러 안남
const test1 = "Don't do that";
const test2 = 'I am "Iron" man.';
const test2 = 'I am \"Iron\" man.';
const test3 = "I am \"Iron\" man.";
// 에러 발생
const test3 = "I am "Iron" man.";
```
        
### 문자열 템플릿  
-  `(백틱) 이용한 문자열 채우기
- ES6 기능 중 하나
        
```js
let temp = 100;
const msg = `tmep is ${temp}`;  
```
        
### 숫자와 문자열  
        
```js
3 + '30'    // 결과: 문자열 '330'
3 * '30'    // 결과: 숫자 90
```
        
### 심볼(Symbol)  
        
- 유일한 토큰을 나타내기 위해 ES6에서 도입한 새 데이터 타입
- 객체와 유사점 있음.
- `Symbol()` 생성자로 만듦.
        
### 객체(Object)  
        
        
- 여러 값이나 복잡한 값을 나타낼 수 있고, 변할 수도 있음.
- 객체의 콘텐츠: 프로퍼티(키, 값으로 구성) or 멤버
- 함수에 담을 수 있음.
        
### Number, String, Boolean 객체  
        
        
##### 목적
1) 특별한 값을 저장
2) 함수 형태로 기능 제공

- 원시 문자열 타입이 자바스크립트에서 일시적인 String 객체를 만들고, 함수를 호출하는 즉시 임시 객체를 파괴함.
        
### 자바스크립트 내장 객체 타입  

```js
Array       항상 순서가 있음
            배열 크기 고정되지 않음
            요소의 데이터 타입을 가리지 않음
Date        new Date()
RegExp      정규표현식(Reqular expression)
            ex) 전화번호, 이메일 정규식
Map         객체와 비슷하지만 특정 상황에서 객체보다 유리함
Set         배열과 비슷하지만 중복 허용 안됨.
```
