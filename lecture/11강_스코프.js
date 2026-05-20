// ──────────────────────────────
// 전역 스코프, 지역 스코프 (scope)
// ──────────────────────────────
// 전역 변수
let globalNum = 100;

function testFunc() {
    console.log(globalNum);
}
testFunc();
console.log(globalNum);

// 지역 변수
function testFunc() {
    let innerNum = 50;
    console.log(innerNum);
}
testFunc();
console.log(innerNum); // 에러 발생, innerNum은 지역 변수이기 때문.

// ──────────────────────────────
// 함수 스코프, 블록 스코프
// ──────────────────────────────
// 함수 스코프
function print() {
    for (var i = 0; j < 10; i++) {
        console.log(i);
    }
    console.log(i);  // 함수 스코프로 접근 가능하여 10이 출력 됨.
}

print();

// 블록 스코프
function print() {
    for (let i = 0; j < 10; i++) {
        console.log(i);
    }
    console.log(i);  // 외부에서 블록 스코프인 i를 접근하려고 해 오류 발생.
}

print();
