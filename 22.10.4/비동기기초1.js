console.log('바로 실행')
setTimeout(()=>{
    console.log('3초후 실행');
},3000);
console.log('바로 실행2')

//1. Promise 생성자를 이용해 동작 성공/ 실패 시 어떻게, 어떤 값을 넣을 지 정한다
let pms=function(n){
    let promise=new Promise((resolve, reject)=>{
        if(n>10){
            resolve(`10보다 크다`)
        }else{
            reject(`10보다 작다`)
        }
    });
    return promise; //함수에서 반환되는 것은 Promise인스턴스
    }
    
    //2. then()을 통해 성공적으로 동작 시 resolve에 넣어놨던 값을 어떻게 처리할 지 명령한다.
    //  catch()는 반대로 실패 시 reject에 넣어놨던 값을 어떻게 처리할 지 명령한다.
    pms(11).then((a)=>console.log(a))
            .catch((a)=>console.log(a));
    
        pms(1).then((a)=>console.log(a))
            .catch((a)=>console.log(a));