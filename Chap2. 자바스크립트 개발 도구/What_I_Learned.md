#### 프로젝트 구조  
        
    .git        # git

    es6         # 노드 소스
    dist

    public/     # 브라우저 소스
        es6/
        dist/
#### 자바스크립트 개발도구
1) Git 연결 및 Commit
2) 빌드 도구(gulp) 설치  
    `gulp`: 개발 과정에서 도움이 되는 개발 의존성 도구
3) 트랜스컨파일러(babel) 설치  
    `babel`: `ES5 --> ES6`, ES6와 리액트, ES7 등을 지원하는 범용 트랜스컴파일러
3) babel과 gulp 함께 사용하도록 설정  
    `gulpfile.js`에 파이프로 연결
4) ESLint 설치  
    `ESLint`: 코드를 검토해 자주 일어나는 실수를 알려주는 프로그램. 