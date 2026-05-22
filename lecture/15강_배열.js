// ──────────────────────────────
// 생성자 함수
// ──────────────────────────────
let arr = new Array();
console.log(arr);    // [] 출력

// 생성된 배열에 값 넣기
let arr1 = new Array(1, 2, 3);
let arr2 = new Array(3);

console.log(arr1);    // [1, 2, 3] 출력
console.log(arr2);    // [비어 있음 x 3] 출력

// ──────────────────────────────
// 리터럴
// ──────────────────────────────
let arr = [];
console.log(arr);    // [] 출력

// 생성된 배열에 값 넣기
let arr1 = [1, 2, 3];
let arr2 = [3];

console.log(arr1);    // [1, 2, 3] 출력
console.log(arr2);    // [3] 출력

// ──────────────────────────────
// 배열의 요소
// ──────────────────────────────
let arr = [
    { name: '박소현' },
    1,
    'array',
    function() {
        console.log('hello world');
    },
    null,
    undefined,
];

console.log(arr);

// ──────────────────────────────
// 배열 요소 조작(접근) 
// ──────────────────────────────
// 임시 배열 생성(리터럴)
let arr = [1, 'hello', null];

// 인덱스를 통해 각 요소 출력
console.log(arr[0]);    // 1 출력
console.log(arr[1]);    // hello 출력
console.log(arr[2]);    // null 출력

// ──────────────────────────────
// 배열 요소 추가 및 수정, 삭제 방법
// ──────────────────────────────
// 1. 배열 요소 추가
// 1. 배열 요소 추가
// 임시 배열 생성
let fruits = ['apple', 'orange', 'peach'];

// 마지막 인덱스에 추가
fruits.push('grape');

// 첫번째 인덱스에 추가
fruits.unshift('banana');

console.log(fruits);    // ['banana', 'apple', 'orange', 'peach', 'grape'] 출력

// 2. 배열 요소 수정
// 2. 배열 요소 수정
// 임시 배열 생성
let animal = ['cat', 'dog', 'hamster'];

// 2-1. 직접적인 수정
animal = ['cat', 'rabbit', 'hamster'];
animal = ['dog', 'cat'];

// 2-2. 해당 인덱스 접근
animal[2] = 'parrot';

// 3. 배열 요소 삭제
// 3. 배열 요소 삭제
// 임시 배열 생성
const colors = ['purple', 'orange', 'blue'];

// 마지막 요소 삭제
colors.pop();
console.log(colors);    // ['purple', 'orange'] 출력


// 첫번째 요소 삭제
colors.shift();
console.log(colors):    // ['orange', 'blue'] 출력

// 특정 부분 삭제
// 임시 배열 생성
const colors = ['purple', 'orange', 'blue', 'yellow', 'green'];

// 특정 부분 삭제 (예: 2번 인덱스부터 3번 인덱스까지 )
colors.splice(2, 2);    // 2번 인덱스부터, 2개 삭제
console.log(colors);    // ['purple', 'orange', 'green'] 출력

// ──────────────────────────────
// 배열 길이 측정
// ──────────────────────────────
// 임시 배열 생성
const colors = ['purple', 'orange', 'blue', 'yellow', 'green'];

console.log(colors.length);    // 5출력
