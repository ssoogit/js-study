// ──────────────────────────────
// 함수 선언
// ──────────────────────────────
function add(num1, num2) {
    return num1+num2;
}

let result = add(10, 15); 
// 함수 호출 및 인수 전달

console.log(`두 수를 더한 값은 ${result} 입니다.`); 
// 25


// ──────────────────────────────
// Early return pattern - 함수 패턴 사용
// ──────────────────────────────

// 가독성 안좋은 예시 ->
function compare(num) {
    if(num === 0) {
        console.log("num의 값이 0입니다.");
    } else if (num < 0) {
        console.log("num의 값이 0보다 작습니다.");
    } else {
        if(num >= 10) {
            console.log("num의 값이 10보다 크거나 같습니다.");
        }else {
            console.log("num의 값이 0보다 크고 10보다 작습니다.");
        }
    }
}

compare(15);

// 패턴 사용 예시 ->
function compare(num) {
    if(num === 0) {
        return ("num의 값이 0입니다.");
    } 
    if (num < 0) {
        return ("num의 값이 0보다 작습니다.");
    } 
    if(num >= 10) {
        return ("num의 값이 10보다 크거나 같습니다.");
    }
    return ("num의 값이 0보다 크고 10보다 작습니다.");
}

compare(15);
