const { Schema }=require('mongoose');

const zoo=new Schema({
    species: String,
    age: Number,
    color: String,
});

module.exports=zoo;