const express=require('express');
const router=require('./router');
const app=express();

app.use('/hello', router);

// app.get('/', (req,res)=>{
//     res.send('hello express!');
// });


// app.get('/bye', (req,res)=>{
//     res.send('bye express!');
// });

app.listen(3000,()=>{
    console.log('Server Run');
})
