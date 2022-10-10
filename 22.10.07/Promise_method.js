//Promise의 제공 메소드들
const resolve=Promise.resolve({name: 'james'});
const reject=Promise.reject(new Error('no name'));
resolve.then(a=>console.log(a.name));
reject.catch(a=>console.log(a));

const time1=()=> new Promise(resolve => setTimeout(()=> resolve('1초 뒤'), 1000));
const time2=()=> new Promise(resolve => setTimeout(()=> resolve('2초 뒤'), 2000));
const time3=()=> new Promise(resolve => setTimeout(()=> resolve('3초 뒤'), 3000));

Promise.all([time1(), time2(), time3()])
.then(console.log);

Promise.race([time1(), time2(), time3()])
.then(console.log);