const express = require('express');
const app = express();



const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]

app.get('/users',function(req,res){
    res.json({
        success : true,
        message : 'successFully got users. Nice!',
        users : mockUserData
    })
})

app.get('/users/:id',function(req,res){
    res.json({
        success : true,
        message : 'successFully got users. Nice!',
        users : req.params.id
    })
})

app.listen(8000,function(){
    console.log("server is running")
})
