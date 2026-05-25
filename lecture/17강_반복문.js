// ──────────────────────────────
// 1. for문
// ──────────────────────────────
for (let i = 0; i < 6; i++) {
    console.log(i);
}
// 1 2 3 4 5 출력

// ──────────────────────────────
// 2. while문
// ──────────────────────────────
let i = 1;
while (i < 6) {
    console.log(i);
    i++;
}
// 1 2 3 4 5 출력

// ──────────────────────────────
// 배열의 모든 요소를 순회
// ──────────────────────────────
// 임시 배열 작성
let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}    // 1 2 3 4 5 출력

// ──────────────────────────────
// Object.entries
// ──────────────────────────────
// 임시 객체 작성
let person = {
    name: '박소현',
    age: 25,
    height: 155,
};

// 배열 변환 후 저장
let newArr = Object.entries(person);    // [Array(2), Array(2), Array(2)] , 0: Array(2) -> "name", "박소현"

// for문으로 value값 나열하기
for (let i = 0; i < newArr.length; i++) {
    console.log(`key: ${newArr[i][0]}, value: ${newArr[i][1]}`);
}

// ──────────────────────────────
// for-of 문
// ──────────────────────────────
// 임시 배열 생성
let arr = [5, 4, 3, 2, 1];


for (let i of arr) {
    console.log(i);    // 5 4 3 2 1 출력
};

// ──────────────────────────────
// for-in 문
// ──────────────────────────────
// 임시 객체 생성
let person = {
    name: '박소현',
    age: 25,
    height: 155,
};


for (let i in person) {
    console.log(`key: ${i}, value: ${person[i]}`);
    // key: name, value: 박소현
    // key: age, value: 25
    // key: height, value: 155
}

