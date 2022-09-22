
//1. 원시타입에서 복사
let a=10;
     let b=a;
    console.log(b);
     a=30;
    console.log(b);

//2. 참조타입에서 복사
let Arr = ['a', 'b', 'c'];
let Arr22 = Arr;

Arr[0]="NoNO";

console.log(Arr22);

//3. 순수함수
let v=10;
let z=20;
let ham=function(v,z){
    return v+z;
}
console.log(ham(v,z));
console.log(v);
console.log(z);

//4. 고차함수
let str=['aa','bb','cc'];

console.log(str.map((wh)=>wh+='zzzz'));
