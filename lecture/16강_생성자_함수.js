// ──────────────────────────────
// 생성자 함수 작성
// ──────────────────────────────
function Person(name, age, job) {    // 첫 글자를 대문자로 작성
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayHi = function() {
        console.log(`안녕하세요. ${this.name}입니다.`);
        console.log('제 나이는 ' + this.age + '입니다.');
    };
}

// ──────────────────────────────
// 생성자 함수를 사용하여 새로 생성한 객체
// ──────────────────────────────
const person1 = new Person('박소현', 25, 'Manager');
const person2 = new Person('홍길동', 26, 'Designer');

console.log(person1.name);    // 박소현 출력
console.log(person2.age);    // 26 출력

person1.sayHi();    // 안녕하세요. 박소현입니다.
                    // 제 나이는 25입니다.
