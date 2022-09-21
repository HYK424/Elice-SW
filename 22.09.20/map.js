const arr = ['School', 'Park', 'Home'];
const nrr=[10,20,30,40];
const obj=[
   {key:1, door:"brown"},
   {key:2, door:"purple"},
   {key:3, door:"orange"} 
]


let tr=arr.map((a)=>a+' go');
console.log(tr);


//map 안에서 if문 써보기
let trr=nrr.map((num=>{
    if(num%8==0){
       return num="Hello!";
    }else{
       return num*=2;
    }
}
    ))
    console.log(trr);

//map으로 객체 재구성
let orr=obj.map((objjj)=>
{
    re_obj={};
    re_obj[objjj.key]=objjj.door+" broken!";
    return re_obj;
})
    console.log(orr);