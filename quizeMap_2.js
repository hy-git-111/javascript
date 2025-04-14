// 객체 배열 → "이름 (나이세)" 문자열 배열 만들기
const people = [
    {name: "김종국", age: 28},
    {name: "김계란", age: 26},
    {name: "심으뜸", age: 30}
];



console.log(people.map(({age, name}) => `${name} ${age} 세`));