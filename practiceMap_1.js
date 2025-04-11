// 모든 이름만 뽑아낸 배열 만들기
const users = [
    {id: 1, name: "종국"},
    {id: 2, name: "계란"},
    {id: 3, name: "으뜸"}
];

// 일반 익명함수 버전
const names_1 = users.map(
    function(user) {
        return user.name;
    }
);
console.log(names_1);   // (3) ['종국', '계란', '으뜸']

// 화살표 함수 버전
const names_2 = users.map(user => user.name);
console.log(names_2)    // (3) ['종국', '계란', '으뜸']