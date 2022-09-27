import {arr,fn} from './export_test.js'; //import의 장점은 별도의 모듈만 선택해서 가져올 수 있다는 것이다.
import * as A from './export_test2.js'; //* 은 해당 파일의 모든 모듈를 가져온다는 뜻. as .. 로 별도의 이름을 붙여 사용.
import obj from './export_test3.js'; //default export식별자가 붙은 모듈을 가져올 때는 {} 쓰지 않는다.


console.log(arr);
fn();
A.fn2();
A.fn3();
console.log(obj());
