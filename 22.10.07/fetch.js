//Get
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res)=>res.json())
.then(data=>console.log(data));

//Post
fetch('https://jsonplaceholder.typicode.com/todos',{
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body:JSON.stringify({
        id:22,
        name:'Tom',
    })
})
.then((res)=>res.json())
.then(data=>console.log(data));

//Put
fetch('https://jsonplaceholder.typicode.com/todos/1',{
    method: 'PUT',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body:JSON.stringify({
        userId: 12,
        title:'12mokeys',
    })
})
.then((res)=>res.json())
.then(data=>console.log(data));

//Delete
fetch('https://jsonplaceholder.typicode.com/todos/1',{
    method: 'DELETE'
    })
.then((res)=>res.json())
.then(data=>console.log(data));

