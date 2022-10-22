//node js(mongoose, express)<-> mongoDB
const mongoose=require('mongoose');
const express=require('express');
const model=require('./schemas');

const app=express();
const localport=3000;
const mongoport='mongodb://localhost:27017';

    const zoo=[
    {species: "lion", age: 11, color: "gold"},
    {species: "deer", age: 5, color: "brown"},
    {species: "snake", age:4, color:"yellow"},
    {species: "cow", age:16, color:"brown"},
    {species: "monkey", age:2, color:"yellow"},
    {species: "eagle", age:2, color:"black"},];

app.get('/', async(req,res)=>{
    const post=await model.create(zoo);
    //Model.countDocuments()는 Model(Collection)의 Document 개수를 카운트한다. 인자의 조건대로 필터링하여 개수를 추출한다.{}는 모든 개수를 센다.
    const docCount = await model.countDocuments({});
        const animal=await model.find({});
    const animals=animal.map((a) => {
        return `현재 들어있는 동물은 ${a.species}이며 나이는 ${a.age}이고 색깔은 ${a.color}입니다
`;
       }).join('');
    console.log(animals);
    res.send(`${post.length} 개의 데이터가 추가되었습니다. 현재 데이터베이스의 데이터 개수는 ${docCount}`);
});

app.get('/zoo', async(req,res)=>{
    const posts=await model.find({
        age: {$gte: 4, $lt:20,},
        color: ['yellow', 'brown'],
        }
        );
       
      const what= posts.map((a) => {
       return a.species;
      });
      console.log(`age가 4이상 20이하이며 color가 yellow거나 brown인 동물은 ${what} 입니다`);
    res.send(`age가 4이상 20이하이며 color가 yellow거나 brown인 동물은 ${what} 입니다!`);
});


app.listen(localport, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Sever connected!');
        mongoose.connect(mongoport) //27017은 디폴트 로컬호스트 번호 
        .then(()=> console.log('DB connected!'))
        .then(()=>{mongoose.connection.dropDatabase()}) //매번 접속마다 데이터베이스가 비워짐
        .catch(console.log);
    }
});