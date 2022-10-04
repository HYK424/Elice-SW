let set=new Set([1,3,5,7,9]);
console.log(set.size); //1. length가 아닌 size로 크기 표현
set.add(0).add(0); //2. add메소드로 값을 추가할 수 있으며 중복값은 추가가 되지 않는다.
console.log(set)
console.log(set.has(1)); //3. has메소드로 해당 값의 소유여부를 true, false로 표현
set.delete(0); //4. delete메소드로 값 삭제
for(let a of set){console.log(a)}; //5. for...of문과 forEach로 요소 순회 가능

let map=new Map([['key','value'],['key2','value']]);
console.log(map);
map.set('key3', 'value3'); //1. set메소드를 통해 요소 추가
console.log(map.get('key3')); //2. get메소드를 통해 요소 취득
map.delete('key3'); //3. delete메소드를 통해 해당 key값에 해당하는 value와 key를 삭제
console.log(map);
for(let a of map){console.log(a)}; //5. for...of문과 forEach로 요소 순회 가능