const zoo=require('./zoo');
const mongoose=require('mongoose');

module.exports=mongoose.model('Zoo',zoo, 'Zoo');