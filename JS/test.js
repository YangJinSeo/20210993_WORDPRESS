console.log(foo); // undefined(변수 초기화 x)
// Reference 에러 : foo가 정의되지 않음, var는 선언전 사용 가능

let goo; // let 인 경우 TDZ(초기화 안됨) 발생. 
var foo; 

console.log(goo); // undefined(변수 초기화 X) 
goo = 1; // 할당 단계가 실행된다.
console.log(goo); // 1 

console.log(foo); // undefined(변수 초기화 X) 
foo = 1; // 할당 단계가 실행된다.
console.log(foo); // 1 

var foo = 2 // 변수 재선언도 가능하다.
let goo2 = 3
// let goo = 3 // 변수 재선언 에러(Uncaught SyntaxError)

