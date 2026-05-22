// ──────────────────────────────
// 생성자 함수
// ──────────────────────────────
let obj = new Object();
console.log(obj);
// {} 출력됨.

// ──────────────────────────────
// 리터럴
// ──────────────────────────────
let obj = {};
console.log(obj);
// {} 출력됨.

// ──────────────────────────────
// 객체 프로퍼티(객체 속성)
// ──────────────────────────────
let book = {
    title: '자바스크립트 첫걸음',
    author: '김효빈',
    category: '자바스크립트',
    year: undefined,
    color: function () {
        console.log('orange');
    },
};

// ──────────────────────────────
// 객체 프로퍼티 사용 방법
// ──────────────────────────────
// 점표기법
console.log(car.name);
console.log(car.color);
// 괄호 표기법
console.log(car['name']);
console.log(car['color']);

// ──────────────────────────────
// 괄호 표기법 활용 예시
// ──────────────────────────────
const getValue = (key) => {
    console.log(car[key]);
};

getValue('color');

// ──────────────────────────────
// 객체 프로퍼티 추가 및 수정, 삭제 방법
// ──────────────────────────────
// 1. 객체 프로퍼티 추가
// 임시 객체 프로퍼티 작성
let cat = {
    age: 2,
};

// 객체 프로퍼티 추가 ++

cat.name = '야옹이';
cat['color'] = 'white';

console.log(cat); // {age: 2, name: '야옹이', color: 'white'} 출력

// 2. 객체 프로퍼티 수정
// 임시 객체 프로퍼티 작성
let cat = {
    age: 2,
    name: '야옹이',
    color: 'white',
};

// 객체 프로퍼티 수정

cat.name = '옹이';
cat['color'] = 'black';

console.log(cat); // {age: 2, name: '옹이', color: 'black'} 출력

// 2-1. 객체의 고유 ID 값까지 변경하는 경우
// 임시 객체 프로퍼티 작성
const cat = {
    age: 2,
    name: '야옹이',
    color: 'white',
};

cat = {
    age: 3,
}

console.log(cat);        // 오류 발생

// 3. 객체 프로퍼티 삭제
// 임시 객체 프로퍼티 작성
const cat = {
    age: 2,
    name: '야옹이',
    color: 'white',
};

// 객체 프로퍼티 삭제 --
delete cat.color;
delete cat['age'];

console.log(cat);        // {name: '야옹이'} 출력

// ──────────────────────────────
// 객체 프로퍼티의 값이 함수일 경우 ( 작성 및 호출 방법 )
// ──────────────────────────────
// 객체 프로퍼티 작성
const person = {
    name: '홍길동',
    age: 23, 
    print: function() {
        console.log('hello world');
    },
};

// 출력결과 : hello world
person.print();
person['print']();

// 출력결과 : ƒ () {
//        console.log('hello world');
//    }
person.print;
person['print'];

// --> this 키워드
// 객체 프로퍼티 작성
const person = {
    name: '홍길동',
    age: 23, 
    print: function() {
        console.log(`제 이름은 ${this.name}입니다.`);
    },
};

// 객체 프로퍼티 호출
person.print();
person['print']();
// 제 이름은 홍길동입니다.
