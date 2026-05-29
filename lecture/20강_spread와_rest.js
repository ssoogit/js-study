// ──────────────────────────────
// spread - 객체
// ──────────────────────────────
const toy = {
    type: 'bear',
    price: '12000',
};

const blueToy = {
    ...toy,
    color: 'blue',
};

const redToy = {
    ...toy,
    color: 'read',
};

// ──────────────────────────────
// spread - 배열
// ──────────────────────────────
const color1 = ['red', 'orange', 'yellow'];
const color2 = ['blue', 'purple', 'black'];

const rainbow = [...color1, 'green', ...color2];

// ──────────────────────────────
// rest - 객체
// ──────────────────────────────
const redToy = {
    type: 'bear',
    price: 14000,
    color: 'red',
};

const {type, ...info} = redToy;

console.log(info);    // {price: 14000, color: 'red'} 출력

// ──────────────────────────────
// rest - 배열
// ──────────────────────────────
const colors = ['red', 'blue', 'orange', 'gray'];
const [c1, c2, ...rest] = colors;

console.log(c1, c2); // red blue 출력
console.log(rest)    // orange gray 출력

// ──────────────────────────────
// rest - 함수
// ──────────────────────────────
// 앞에 두개를 제외하고 출력할떄

const print = (a, b, ..rest) => {
    console.log(rest);
};

print(1, 2, 3, 4, 5, 6, 7, 8);    // [3, 4, 5, 6, 7, 8] 출력

// ──────────────────────────────
// spread와 rest 사용 전
// ──────────────────────────────
const print = (a, b, c, d, e, f) => {
    console.log(a, b, c, d, e, f);
}l

const numbers = [1, 2, 3, 4, 5, 6];
print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]); 

// ──────────────────────────────
// spread와 rest 사용 후
// ──────────────────────────────
const print = (...rest) => {    //rest 사용
    console.log(rest);
}l

const numbers = [1, 2, 3, 4, 5, 6];
print(...numbers);     // spread 사용
