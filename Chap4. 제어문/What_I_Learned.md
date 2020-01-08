### for 루프의 다른 패턴  

- 초기화, 표현식에 여러 문 결합 가능
```js
//출력: 1 2 3 5 8 13 21
for(let temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp)      
    console.log(j);
```
        
### for...in 루프  

```js      
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
```
        
### for...of 루프  
        
- ES6에서 새로 생긴 반복문
- 컬렉션의 요소에 루프를 실행하는 다른 방법
- 각 요소의 인덱스를 알 필요는 없을 때 알맞음

```js
const hand = [1,2,3];
for(let face of hand)
    console.log(`You roll...${face}!`);
```
        
### 유용한 제어문 패턴  
1) continue문을 사용하여 조건 중첩 줄이기
2) break, return문을 써서 불필요한 연산 줄이기
3) 루프를 완료한 뒤 인덱스 값 사용하기
4) 배열을 수정할 때 감소하는 인덱스 사용하기