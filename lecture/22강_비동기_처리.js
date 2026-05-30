// ──────────────────────────────
// 동기
// ──────────────────────────────
const workA = () => {
  console.log('workA');
};
const workB = () => {
  console.log('workB');
};
const work = () => {
  console.log('workC');
};

workA():
workB();
workC():
// A, B, C 순차적으로 출력

// ──────────────────────────────
// 비동기
// ──────────────────────────────
setTimeout(() => {
  console.log('비동기');
}, 3000);

console.log('종료');
// 종료 ->비동기(동작 후 3초뒤) 순으로 출력

// ──────────────────────────────
// 비동기
// ──────────────────────────────
const work = (callback) => {
  setTimeout(() => {
    console.log('비동기');
    callback();
  }, 3000);

  work(() => {
    console.log('종료');
  });
// 비동기(동작 후 3초뒤) -> 종료 순으로 출력
