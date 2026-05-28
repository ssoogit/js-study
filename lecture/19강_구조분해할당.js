// 배열과 객체 구조 분해 할당
// 배열과 객체 구조 분해 할당
// ──────────────────────────────
// 구조 분해 할당
// ──────────────────────────────
let colors = ['green', 'blue', 'red'];
let [c1, c2, c3] = colors;

console.log(c1);    // green

console.log(c2);    // blue

console.log(c3);    // red

// ──────────────────────────────
// 두개의 변수 값을 서로 바꿀 때
// ──────────────────────────────
let a = 10;
let b = 5;

[a, b] = [b, a];

console.log(a, b);    // 5 10 출력


// ──────────────────────────────
// 구조분해 할당을 사용하지 않고 일반적으로 분배할때
// ──────────────────────────────
let colors = {
    c1: 'green',
    c2: 'blue',
    c3: 'red',
};

let c1 = colors.c1;
let c2 = colors.c2;
let c3 = colors.c3;

console.log(c1);    // green

console.log(c2);    // blue

console.log(c3);    // red


// ──────────────────────────────
// 구조분해 할당 사용
// ──────────────────────────────
let colors = {
    c1: 'green',
    c2: 'blue',
    c3: 'red',
};

let {c1, c2, c3} = colors;

console.log(c1);    // green

console.log(c2);    // blue

console.log(c3);    // red

// ──────────────────────────────
// 키 값을 변수 이름으로 사용하지 않고, 다른 이름의 변수에 값을 할당하는 방법
// ──────────────────────────────
let colors = {
    c1: 'green',
    c2: 'blue',
    c3: 'red',
};

let {c1: color1, c2: color2, c3: color3} = colors;    // 각각 다른 이름으로 변경 하겠단 뜻

// 변수의 수가 객체 프로퍼티의 수보다 클 경우, 배열과 동일하게 기본값을 설정할 수 있다.
let {c1, c2, c3, c4 = 'gray'} = colors;
