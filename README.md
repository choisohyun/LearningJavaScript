# LearningJavaScript
- [러닝 자바스크립트](http://www.yes24.com/Product/Goods/42806896?Acode=101)를 공부하며 실행한 예제 코드를 올리는 레포

# Commit 설명
- (2019.12.11) Chapter 1. 첫 번째 어플리케이션
    - [01_firstApp] Directory에 생성

- (2019.12.13) Chapter 2. 자바스크립트 개발 도구
    - 프로젝트 구조
    ```
    .git        # git

    es6         # 노드 소스
    dist
    
    public/     # 브라우저 소스
        es6/
        dist/
    ```
    1) Git 연결 및 Commit
    2) 빌드 도구(gulp) 설치
        gulp: 개발 과정에서 도움이 되는 개발 의존성 도구
    3) 트랜스컨파일러(babel) 설치
        babel: ES5 --> ES6, ES6와 리액트, ES7 등을 지원하는 범용 트랜스컴파일러
    3) babel과 gulp 함께 사용하도록 설정
        `gulpfile.js`에 파이프로 연결
    4) ESLint 설치
        ESLint: 코드를 검토해 자주 일어나는 실수를 알려주는 프로그램. 