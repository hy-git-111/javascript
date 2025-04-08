# 기초 문법
> <span style="color=darkgray">**브라우저 콘솔창에서 JS가 동작하는 방식  
REPEL(Read, Evaluation, Print, Loop)  
: 코드를 입력하면 결과가 바로 출력되는 과정을 반복하는 것**</span>

* 세미콜론을 붙여야 하는 상황
    * statement(문장)이 끝날때
    * 함수를 변수에 할당할때
    * 조건문, 반복문 등이 끝날때
    * 객체 리터럴에서 프로퍼티 정의 후 세미콜론을 붙일 수 있다.(선택)
        * 리터럴 : 프로그래밍에서 고정된 값을 직접 표현하는 방법
    * 함수 표현식

<br/>

## 변수 키워드
: 변수가 영향력을 끼치는 범위가 다름

* var : 전역변수처럼 모든 코드에서 사용 가능, 변수 중첩 체크가 잘 안되어 사장됨
* const : 현재 사용중인 함수 내부에만 영향을 줌, 고정값(상수)
* let : 현재 사용중인 함수 내부에만 영향을 줌, 가변값

<br/>

## 데이터 타입
* 문자열 : "문자열"
* 부울 : true, false(소문자)
* 딕셔너리 : 객체라고 부름
    * 객체 호출 시 obj.key
* str = null  // 메모리에 공간은 확보되었으나 값이 없는 상태
* str = undifond // 메모리에 공간 확보가 되지 않은 상태

<br/>

## 형변환
```JS
let num = 1;
let str = "문자열"
let strNum = "1"

String(num);    // "1"  문자열로 값 리턴
Number(srt);    // NaN  숫자로 값 리턴, NaN은 형변환이 불가능하다는 뜻

parseFloat(num) // "1.0"   float 형식으로 값 리턴
parseInt(strNum) // 1   숫자로 값 리턴

num.toString()  // "1"  문자열로 값 리턴
```

```JS
const elem = document.getElementsByClassName();

const arr_1 = Array.form(elem); // Array.form() 배열로 변환
const arr_2 = [...elem];    // 스프레드 문법 : 유사 배열을 펼쳐서 진짜 배열로 만들어줌
```


<br/>

### 템플릿 리터럴
```JS
const num = 1
function MyFunction() {
    console.log(`num을 문자열로 출력해보겠습니다.: ${num}`)
}
```

<br/>

## 연산자
* 산술 연산자  
: +, -, *, /, %, **

* 비교 연산자  
: ==, ===, !=, !==, >, <

    * 일치 연산자 : ===
        ```js
        1 == "1"    // true
        1 === "1"   // false
        ```

* 논리 연산자  
: &&, ||, !

* 증감연산자  
: ++  
    ```js
    i++ // 연산 후 증가
    ++i // 연산 전 증가
    ```

<br/>

## 함수와 메서드
**함수(Method)**|**메서드(Method)**
|:- |:- |
|호출하는 객체가 없는 경우</br>function();|객체안에있는 함수, 메서드 사용시 호출하는 객체가 있음</br>obj.function()

<br/>

* 메서드 작성 방법
    ```JS
    let object = {
        "property": function(){}
    }
    ```

<br/>

### 함수 선언과 반환
* 기본 함수 선언 방식
    ```js
    x = 1
    function MyFunction(x){
        let temp = 2*x + 3
        return temp
    }
    MyFunction()    // 5
    ```

<br/>

* return에서 여러개 값을 반환하는 법  
: js에서는 여러개 값을 반환하려면 타입을 지정해줘야 함
    ```js
    // 배열 방식
    function temp(){
        a = 1;
        b = 2;
        return [a, b]
    }
    temp()  // [1, 2]
    ```

    ```js
    //객체 방식
    function temp(){
        a = 1;
        b = 2;
        return {a, b}
    }
    temp()  // {a: 1, b: 2}
    ```

<br/>

### 함수 표현식
* 객체 값으로 함수를 설정하는 방식
    ```js
    let myFunction = function() {
        a = 1;
        b = 2;
        return {a, b}
    };
    ```

<br/>

### 함수 사용 방식
* 익명함수
: 함수명 선언 없이 함수를 사용할 수 있다.
    ```js
    // 버전 1 - 일반 익명 함수
    const greet = function(name) {
    return `안녕하세요, ${name}님!`;
    };

    console.log(greet("지민")); // 안녕하세요, 지민님!
    ```
    ```js
    // 버전 2 - 화살표 함수
    const greet = (name) => `안녕하세요, ${name}님!`;
    console.log(greet);
    ```
    ```js
    // 버전 3 - 즉시 실행 함수 표현식 (IIFE, Immediately Invoked Function Expression)
    console.log(
        ((name) => `안녕하세요, ${name}님!`)("지민")
        );
    ```

<br/>

* 함수 중첩
    * 지연함수
    : 다른 곳에서 버그가 있을 수 있다. 스코프 체이닝으로 버그의 영향을 받고싶지 않을 때 지연함수를 사용한다.
    - 스코프 체이닝 : 현재 실행중인 함수에서 변수가 없으면 1depth 위에서 찾는것

    ```js
    x = 1
    function MyFunction(x){
        let temp = 2*x + 3
        return temp
    }
    MyFunction() 

    ```

<br/>

### 구조 분해 할당
: 배열이나 객체에서 값을 꺼내서 변수에 한번에 담는 문법

* 배열 구조분해
    ```js
    const fruits = ['apple', 'banana', 'cherry'];

    const [a, b, c] = fruits;

    console.log(a); // 'apple'
    console.log(b); // 'banana'
    console.log(c); // 'cherry'
    ```

<br/>

* 객체 구조분해
    ```js
    const user = { name: '철수', age: 20 };

    const { name, age } = user;

    console.log(name); // '철수'
    console.log(age);  // 20
    ```

<br/>

### Array 함수
* forEach() : 배열에서 index와 value를 추출  
forEach((매개변수1, 매개변수2) => {반환할 내용})
    ```js
    numbers.forEach((value, index) => {
        console.log(`인덱스 : ${index} ${value}`)
    })
    ```

<br/>

* map()
: 리스트나 배열의 각 항목에 어떤 함수를 적용해서 새로운 리스트를 만들때 사용

    ```js
    // 리스트.map(함수)
    const numbers = [1, 2, 3];

    const result = numbers.map(String);
    console.log(result);    // ['1', '2', '3']
    ```

    ```js
    // 리스트.map((매개변수1, 매개변수2) => {return 반환값})
    const triple = numbers.map(number => number *3) // list
    const triple = numbers.map((a, b) => {return a * 3;}); // list
    ```

<br/>

* length : 길이 반환
* push() : 배열 가장 마지막에 삽입
* pop() : 배열 가장 마지막 데이터 제거

* unshift() : 배열 맨 앞에 데이터 삽입
* shift() : 배열 맨 앞의 데이터 제거

* charAt(0) : 인덱스의 문자 추출

### 기타 함수
* Math.floor(10.9) : 내림 함수
* Math.found(10.9) : 반올림 함수
* Math.random() : 랜덤 함수

<br/>

## 제어문
### if문
* 기본 버전
    ```js
    let money = 1000

    if(money > 5000) {
        rideTaxi();
    } else if(money > 2000) {
        rideBus();
    } else {
        walk();
    }
    ```
    
<br/>

* true, null, undifined가 아닌 경우
    ```js
    if(a) {

    }
    ```
    
<br/>

* false, null, undifined인 경우
    ```js
    if(!a) {

    }
    ```
    
<br/>

* 삼항연산식
    ```js
    let money = 1000

    (money === 5000 ? rideTaxi() : (money === 2000 ? rideBus : walk()))
    ```

<br/>

### try catch문
```js
try {
    if() {
        throw new Error('에러 발생')    // Error라는 객체를 '에러 발생'으로 초기화하여 throw(던진다)
    }

} catch (error) {
    에러분류함수_1(error);
    에러분류함수_2(error);
}
```

<br/>

## 반복문
### for
```js
// 기본 버전
for (let i = 0; i < 10; i++) {
    console.log(i)
};
```

<br/>

```js
// 응용 버전
myArray = [1, 2, 3, 4, 5];

myArray.forEach(element => {
    console.log(element);
});
```

for (변수 in 객체 (배열)) {
    
}
```js
const person = {
    name: 'Song',
    age: 36
};

for (const key in person) {
    console.log(person[key]);    // 각각의 키값에 해당하는 value가 출력됨
}
```

```js
const numbers = [10, 20, 40];
for (const idx in numbers) {
    console.log(idx)    // 0, 1, 2
}
```


for of : value값 추출
```js
for (const number of numbers) {
    console.log(number) // 10, 20, 40
}
```

for in : 키 추출
```js
for (const value in person) {
    console.log(value) // 10, 20, 40
}
```

### while문
while (조건){

}

```js
// 기본 버전
let i = 0;
while (i < 5) {
    console.log(i)
    i++
}
```
do {
    while문이 거짓이어도 무조건 1회 실행
} while () {

}

```js
// do while문
let i = 0;
do {
    console.log(i)
    i++;    // 1 증가
}
while (i < 0) {
    console.log(i)  // while 실행 안됨
}
```

<br/>

## this 바인딩
: 함수가 호출될 때 결정되는 동적 바인딩  
> <span style = "color:darkgray">**this : 사용하는 함수, 형태, 위치에 따라 가르키는 객체가 다름**</span>

* 최상위 this : 전역 window 객체(브라우저 관련 객체)를 가르킴
    * window.document // HTML 문서

* 'use strict'의 this : this가 있는 함수의 객체를 가르킴

* new : new를 하는 함수로 this가 가르키는 객체가 바뀐다.

* 화살표함수 : 화살표함수가 선언된 곳을 this가 가르킨다. 화살표함수에서는 new를 사용할 수 없다.

```js
window.a = 1

function a () {
    this.a  // 1, 전역 window 객체를 가르킴
}

function b () {
    'use strict'    // this가 있는 현재 함수 안의 객체를 가르킴
    let a = 0;
    this.a  // 0
}

new a() // new 바인딩
a.a // new 바인딩을 사용하면 함수 a의 a값 호출
```

<br/>

## 클래스
```js
class ClassName {
    sample() {

    }
}

SomeClass.a()   // 함수 호출
```
  
