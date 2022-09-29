var str=['Tom', 'Jim', 'Lee', 'James'];
//1. 문자 오름차순
console.log(str.sort()); //기본은 배열의 인자로 들어온 문자열을 비교하여 오름차순
//2. 문자 내림차순
console.log(str.sort((a,b)=>{ //a가 먼저 오는 인수이며, 결과가 음수일 경우 앞으로 정렬한다. 여기서는 a가 더 큰 수인데도 음수를 반환하고 있다. 
    if(a>b) return -1
    else if(a<b) return 1 
}));
//3. 숫자 오름차순
var num=[1,38, 35, 62, 99];
console.log(num.sort((a,b)=>{ //a-b에서 결과값이 양수가 나오면 b<a라는 뜻이다. 더 큰 값이 뒤로 간다.
   return a-b;
}));
//4. 숫자 내림차순
console.log(num.sort((a,b)=>{ //위에서와 반대로 b>a 의 결과값이 양수면 a가 b보다 작은 값이라는 뜻이다. a가 더 작은 값일 수록 뒤로 간다. 
    return b-a;
 }));