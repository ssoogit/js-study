// ──────────────────────────────
// forEach
// ──────────────────────────────
let arr1 = [1, 2, 3, 4, 5];

arr1.forEach((elm) => {    // element <- CurrentValue: 처리할 현재 요소
    console.log(elm);    // 1 2 3 4 5
});

arr1.forEach((elm, idx) => {
    console.log(`${idx}번째 요소는 ${elm}입니다.`);    // 0번째 요소는 1입니다. ... 
});

arr1.forEach((elm, idx, array) => {
    console.log(array);        // 실제 배열(arr1)을 5번 출력 [1, 2, 3, 4, 5]
});

// 전체 배열에 2 곱한 배열로 수정
arr1.forEach((elm, idx, array) => {
    array[idx] = elm * 2;
});
console.log(arr1);    // [2, 4, 6, 8, 10] 출력

// ──────────────────────────────
// map
// ──────────────────────────────
let arr2 = [1, 2, 3, 4, 5];

let newArr;

newArr = arr2.map((elm) => {
    return elm * 10;
});

console.log(newArr);    // [10, 20, 30, 40, 50] 출력

// ──────────────────────────────
// at
// ──────────────────────────────
let colors = ['green', 'blue', 'purple'];

console.log(colors.at(1));    // blue 출력

console.log(colors.at(-1));    // purple 출력 (뒤에서 첫번째)

// 범위를 벗어난 경우
console.log(colors.at(10));    // undefined 출력
console.log(colors.at(-10));    // undefined 출력
