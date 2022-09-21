const arr = ['School', 'Park', 'Home'];
const nrr=[10,20,30,40];

//1.  출처: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 의 배열 검색 filter

let filtering=function(what){
    return arr.filter((wh)=>
    {
        return wh.toLowerCase().indexOf(what.toLowerCase())>-1;
    }) /*1. 정확한 비교를 위해 비교값과 배열 요소값을 모두 소문자로 바꿔준다.
        2. indexof()는 문자열에서 문자의 위치를 찾아 정수로 반환. 처음 자리에 있으면 0, 존재하지 않으면 -1이다*/
}
 console.log(filtering('sc'));

 let trr=nrr.filter(function(num){
    return (num%6)==0
 })

 console.log(trr);