// 포멧 변경하여 출력하기
const scores = [85, 92, 100];

// arrow 함수 버전
const formatted_1 = scores.map(score => `점수: ${score}점`)
console.log(formatted_1)

// 일반 anomimous 함수 버전
const formatted_2 = scores.map(
    function(score) {
        return `점수: ${score}점`
    }
)
console.log(formatted_2)