let arr = [
  { seq: 1, name: "kim1" },
  { seq: 2, name: "kim2" },
  { seq: 3, name: "kim3" },
  { seq: 4, name: "kim4" },
  { seq: 5, name: "kim5" },
];

let arr1 = [
  { seq: 2, name: "Lee2" },
  { seq: 3, name: "Lee3" },
  { seq: 6, name: "Lee6" },
];
/*
중복되는 배열비교하기
*/
let arr2 = arr.filter((x1) => arr1.some((x2) => x1.seq == x2.seq));

//console.log("arr2:::", arr2);

/*
비교하기
*/
var json1 = { a: 1, b: 2, c: { cc: 3 } };
var json2 = { c: { cc: 3 }, a: 1, b: 2 };
var e1 = Object.entries(json1).sort(); // 정렬
var e2 = Object.entries(json2).sort(); // 정렬

var isEual = JSON.stringify(e1) === JSON.stringify(e2);
//console.log(isEual);

/*
스프레드 연산자 사용배열 합치기
*/
const arr01 = [1, 2, 3];
const arr02 = [4, 5, 6];
const arr03 = [7, 8, 9];

const newArr = [...arr01, ...arr02, ...arr03];

//console.log(newArr);
/*
push() 함수와 spread operator(...)로 배열 합치기 
*/

const arr001 = [1, 2, 3];
const arr002 = [4, 5, 6];

arr001.push(...arr002);
console.log(arr001);
