function* gen(){
    const a= yield 1;
    const b= yield (a+10);
    yield(a-b);
 
}

const generator=gen();
let result=generator.next(); //첫 next()에서 yield 1까지 실행. value는 1이 되지만 아직 a에는 값이 들어가지 않았다.
console.log(result);
result=generator.next(30); //두 번째 next에서 a=30이 되었고, 두 번째 yield에 의해 (a+10)의 값이 value가 되었다.
console.log(result);
result=generator.next(15); //세 번째 next에서 b=15가 되었고, 세 번째 yield에 의해 (a-b)의 값이 value가 되었다.
console.log(result);