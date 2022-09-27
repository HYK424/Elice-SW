class Test{
    field='클래스 필드' //클래스 필드는 반드시 초기화해서 사용!
    what=function(){ //클래스 필드로 메소드를 정의하는 것도 가능!
        console.log(this.field);
    }
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}

let test=new Test('김철수', 20);
console.log(test.name, test.age);
test.what();

class Test2{
    #pet='';
    constructor(pet){
        this.#pet=pet; //private는 클래스 몸체에 정의할 것. 직접 constructor에 정의하면 에러 발생
    }
    get pet(){
        return this.#pet;
    }

}

let pet=new Test2('dog');
console.log(pet.pet);

class Test3 extends Test{
    constructor(name,age,color){
        super(name,age);
        this.color=color;
    }
}

let wtest=new Test3('박민수', 30, 'black');
console.log(wtest.field, wtest.name, wtest.age, wtest.color);