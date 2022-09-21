const readline = require("readline"); //1. require("모듈명")으로 node.js에서 모듈을 가져와 변수에 저장하여 사용

const rl = readline.createInterface({
    input: process.stdin, //2. createInterface로 인터페이스 생성 후 input, output에  process.stdin과 process.stdout을 연결
    output: process.stdout,
});

rl.on("line", (line) => {  //3. on메소드는 이벤트 발생 시 동작을 지정한다.(이벤트 핸들러같이)
     console.log(line); // "line"이벤트는 콘솔에 입력을 할 때 발생한다. 
rl.close();     //한 줄 입력의 결과가 출력된 후 close이벤트로 닫아준다.
  });

