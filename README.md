# LearningJavaScript
- [러닝 자바스크립트](http://www.yes24.com/Product/Goods/42806896?Acode=101)를 공부하며 실행한 예제 코드를 올리는 레포

# Commit 설명
- (2019.12.11) Chapter 1. 첫 번째 어플리케이션
    - [01_firstApp] Directory에 생성

- (2019.12.13) Chapter 2. 자바스크립트 개발 도구
<details>
    <summary>Click to expand!</summary>
    - 프로젝트 구조  <br />
        
    .git        # git

    es6         # 노드 소스
    dist

    public/     # 브라우저 소스
        es6/
        dist/
1) Git 연결 및 Commit
2) 빌드 도구(gulp) 설치  
    `gulp`: 개발 과정에서 도움이 되는 개발 의존성 도구
3) 트랜스컨파일러(babel) 설치  
    `babel`: `ES5 --> ES6`, ES6와 리액트, ES7 등을 지원하는 범용 트랜스컴파일러
3) babel과 gulp 함께 사용하도록 설정  
    `gulpfile.js`에 파이프로 연결
4) ESLint 설치  
    `ESLint`: 코드를 검토해 자주 일어나는 실수를 알려주는 프로그램. 
</details>
- (2019.12.13) Chapter 3. 리터럴과 변수, 상수, 데이터 타입
<details>
    <summary>Click to expand!</summary>
- 자바스크립트의 값: 원시 값 또는 객체  <br />

    // 원시 값과 객체의 차이

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
    
> 새로 안 내용 정리. 규칙은 따로 적지 않음.
- 변수(variable)  
        
        이름이 붙은 값. 
        언제든 바뀔 수 있음. 
        변수 선언 시 초기값 할당 안해도 됨.

- 상수(constant)  
        
        
        한 번 할당한 값을 바꿀 수 없음
        상수 이름에는 대문자와 언더바만 사용.
        
- **변수 vs 상수**  
        
        
        상수 win.
        고정된 값이 이해하기 쉬움.
        사용자가 여러명이라면 변수 하나를 재사용하기보다 변수 이름을 따로 생성하는 것이 좋음.
        
- 리터럴(literal)  
        
        
        값을 프로그램 안에서 직접 지정한다는 의미, 값을 만드는 방법.
        자바스크립트는 따옴표를 통해 리터럴과 식별자를 구분함.
        
- 이스케이프  
        
        
        // 에러 안남
        const test1 = "Don't do that";
        const test2 = 'I am "Iron" man.';
        const test2 = 'I am \"Iron\" man.';
        const test3 = "I am \"Iron\" man.";
        // 에러 발생
        const test3 = "I am "Iron" man.";
        
- 문자열 템플릿  
        
        
        // `(백틱) 이용한 문자열 채우기
        // ES6 기능 중 하나
        let temp = 100;
        const msg = `tmep is ${temp}`;  
        
- 숫자와 문자열  
        
        
        3 + '30'    // 결과: 문자열 '330'
        3 * '30'    // 결과: 숫자 90
        
- 심볼(Symbol)  
        
        유일한 토큰을 나타내기 위해 ES6에서 도입한 새 데이터 타입
        객체와 유사점 있음.
        Symbol() 생성자로 만듦.
        
- 객체(Object)  
        
        
        여러 값이나 복잡한 값을 나타낼 수 있고, 변할 수도 있음.
        객체의 콘텐츠: 프로퍼티(키, 값으로 구성) or 멤버
        함수에 담을 수 있음.
        
- Number, String, Boolean 객체  
        
        
        목적
        1) 특별한 값을 저장
        2) 함수 형태로 기능 제공

        원시 문자열 타입이 자바스크립트에서 일시적인 String 객체를 만들고, 함수를 호출하는 즉시 임시 객체를 파괴함.
        
- 자바스크립트 내장 객체 타입  
        
        Array       항상 순서가 있음
                    배열 크기 고정되지 않음
                    요소의 데이터 타입을 가리지 않음
        Date        new Date()
        RegExp      정규표현식(Reqular expression)
                    ex) 전화번호, 이메일 정규식
        Map         객체와 비슷하지만 특정 상황에서 객체보다 유리함
        Set         배열과 비슷하지만 중복 허용 안됨.
        
</details>
- (2019.12.13) Chapter 4. 제어문
<details>
    <summary>Click to expand!</summary>
- for 루프의 다른 패턴  
        
        //초기화, 표현식에 여러 문 결합 가능
        //출력: 1 2 3 5 8 13 21
        for(let temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp)      
            console.log(j);
        
- for...in 루프  
        
        // player.hasOwnProperty 메소드를 생략하면 에러 발생 많음.

        const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
        for(let prop in player){
            if(!player.hasOwnProperty(prop)) continue;
            console.log(prop + ': ' + player[prop]);
        }
        /* 출력
        * name: Thomas
        * rank: Midshipman
        * age: 25
        */
        
- for...of 루프  
        
        // ES6에서 새로 생긴 반복문
        // 컬렉션의 요소에 루프를 실행하는 다른 방법
        // 각 요소의 인덱스를 알 필요는 없을 때 알맞음

        const hand = [1,2,3];
        for(let face of hand)
            console.log(`You roll...${face}!`);
        
- 유용한 제어문 패턴  
    1) continue문을 사용하여 조건 중첩 줄이기
    2) break, return문을 써서 불필요한 연산 줄이기
    3) 루프를 완료한 뒤 인덱스 값 사용하기
    4) 배열을 수정할 때 감소하는 인덱스 사용하기
</details>
- (2019.12.21) Chapter 5. 표현식과 연산자
<details>
    <summary>Click to expand!</summary> 
- 표현식: 값이 되는 것. 대부분 연산자 표현식  <br />
- 표현식의 결과를 변수, 상수, 프로퍼티에 할당 가능. <br /> 
- 연산자 우선순위: 자바스크립트가 평가식을 표현하는 순서  <br />
- 연산자: 값을 만드는 행동  <br />
- 단항 부정과 단항 플러스  
    <br />
    
    const a = 5;
    const x = 3 - -a; // x = 8;

    const b = "5";
    const y = 3 + +5; //y = 8;  
    
    
- 자바스크립트에서는 `10 % 3.6`도 계산 가능함
- NaN(특별한 숫자형 값): 무엇과도 같지 않음  
    
    
    ```
    Nan === Nan // false
    Nan == Nan  // false
    ```
    
- 산술 연산자  
    ```
    let x = 2;
    const r1 = x++ + x++;   // 2 + 3 = 5
    const r2 = ++x + ++x;   // 5 + 6 = 11
    const r3 = x++ + ++x;   // 6 + 8 = 14
    const r4 = ++x + x++;   // 9 + 9 = 18   x = 10
    let y = 10;
    const r5 = y-- + y--;   // 10 + 9 = 19
    const r6 = --y + --y;   // 7 + 6 = 13
    const r7 = y-- + --y;   // 6 + 4 = 10
    const r8 = --y + y--;   // 3 + 3 = 6    y = 2
    ```
- `==`을 쓰지 않는 이유
    - `null, undefined, 빈 문자열, 숫자 0`이 있을 때 (불필요한) 문제가 생김
    - `===`를 사용할 때 원하는 결과가 나오지 않으면 데이터 타입을 변환해서 사용하는 것 권장
- `Number.EPSILON`: 대략 2.2204460492503130808472633361816E-16 또는 2^-52의 값을 가짐. 정수가 아닌 숫자를 느슨하게 비교하고 싶을 때 사용
- `Number.MAX_SAFE_INTEGER`: 9007199254740991(약 9,000조)
- `Number.MIN_SAFE_INTEGER`: -9007199254740991(약 -9,000조)

논리 연산자   
- 거짓 같은 값
    - undefined
    - null
    - false
    - 0
    - NaN
    - ''(빈 문자열)
- 참 같은 값  
    - object.valueOf() 메소드로 반환되는 객체(빈 객체나 false라도 참 같은 값임)
    - Array(빈 배열이라도 참 같은 값임)
    - 공백 문자열(" ")
    - 문자열 false

단축 평가  
(피연산자는 x, y 순서로 있음) 
- &&일 때, x가 거짓 같은 값이면 x
- &&일 때, x가 참 같은 값이면 y
- ||일 때, x가 거짓 같은 값이면 y
- ||일 때, x가 참 같은 값이면 x

조건 연산자
- 자바스크립트의 유일한 3항 연산자  
`const result = false ? "true" : "false";`  

쉼표 연산자
- 표현식을 결합하여 두 표현식을 평가한 후, 두 번째 표현식의 결과를 반환하는 연산자
- 표현식을 하나 이상 실행해야 하지만 값으로 필요한 것은 마지막 표현식의 결과뿐일 때 유용함
- `z = (x++, y++);`  

    
</details>
