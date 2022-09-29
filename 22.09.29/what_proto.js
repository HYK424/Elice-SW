function Man(name, age) {
    this.name=name;
    this.age=age;
    this.friend=function(){
        return 5+"명";
    };
   
  }

var who=new Man('Tom', 12); //클래스의 인스턴스 만드는 과정과 비슷하다
console.log(who.name,who.age, who.friend());

Man.prototype.pet="dog"; //상위 객체인 prototype에 접근해서 속성을 넣어줬다. prototype을 상속하는 자식 객체에도 변화가 따라온다.
console.log(who.pet); 
Man.prototype.pet="cat"; //prototype의 속성 변경 
console.log(who.pet);

who2.prototype = Object.create(Man.prototype);
who2.prototype.constructor=who2;
console.log(who2.name2);

function Woman(name, age, hair){
    Man.call(this)
}