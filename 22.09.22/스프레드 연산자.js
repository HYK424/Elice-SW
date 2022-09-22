//1. 배열 복사
let arr=[1,2,3,4,5];
let arr2=[...arr];
console.log(arr2);
arr2.push(99); //원본에 영향 끼치는 지 확인
console.log(arr);
console.log(arr2);

//2. 배열 병합
let str=['s','c','h'];
let str2=['o','o','l'];
let str3=[...str, ...str2];
console.log(str3);

//3. 객체 복사
let student={name:'tom', age:15};
let student2={...student, pet:'dog'};
console.log(student);
console.log(student2);