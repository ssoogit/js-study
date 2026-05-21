// ──────────────────────────────
// 기본 함수 선언
// ──────────────────────────────
function add (a, b) {
    return a + b;
}

// ──────────────────────────────
// 화살표 표현식
// ──────────────────────────────
// 화살표 함수 
const and = (a, b) => {
    return a + b;
}

// 화살표 함수 (중괄호, return 생략 버전)
const add = (a, b) => a + b;

// ──────────────────────────────
// 콜백 함수
// ──────────────────────────────
// 기본 작성 코드
const printResult = (a, b) => {
    let result = a + b;  // 겹치는 내용이 있음.
    console.log("결과는 " + result);
};

const doubleResult = (a, b) => {
    let result = a + b;  // 겹치는 내용이 있음.
    console.log("결과에 2를 곱한 값은 " + result * 2);
};

    printResult(10, 20);
    doubleResult(10, 20);

// 콜백 함수 적용
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
};

const printResult = (result) => {
  console.log("결과는 " + result);
};

const doubleResult = (result) => {
  console.log("결과에 2를 곱한 값은 " + result * 2);
};

calculate(3, 5, printResult);
calculate(3, 5, doubleResult);

// 콜백 함수 2 ( 함수 호출 내부에 함수 작성)
const testFunc = (callback) => {
    callback();
};

testFunc( () => {
    console.log('콜백 함수 실행');
});
