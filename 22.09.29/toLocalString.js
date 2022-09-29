let num=123456780;
console.log(num.toLocaleString());
let num2="123456780"; //문자열로는 동작하지 않는다.
console.log(num2.toLocaleString());
let arr=new Date();
console.log(arr.toLocaleString("en-US")); //Date를 주어진 나라의 날짜 표기법에 맞게 변환하여 반환한다.