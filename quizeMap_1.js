// 숫자 배열을 짝/홀로 분류된 문자열로 반환하기
const numbers = [1, 4, 7, 10, 13];

/*
// 1차 풀이
function changeToChar(num){
    if(num % 2 == 0) {
        return "짝수"
    }
    else{
        return "홀수"
    }
}
const myList = numbers.map(num => changeToChar(num))

console.log(myList)
*/

// 2차 풀이(개선)
const myList = numbers.map(num => (num % 2 === 0 ? "짝수" : "홀수"));

console.log(myList);