// console.log('test');

// const http=require('http');

// http.createServer(function(req,res){
//     res.end('hello');
// }).listen(7000);

// console.log('after run');

const express=require('express');

// const json=require('json');

var app=express();

app.get('/',function(req,res){
    res.send('start server')
})


app.get('/user',function(req,res){
    res.send('start use')
})

function multBy2(n) {
    return n*2;
}

app.get('/fact/:num',function(req,res){

    var myfact=multBy2(req.params.num);
    res.json('the num multiplyed by 2 is '+myfact);
        // console.log(req.params,req.body);
    // res.send('fct'); //IMPORTANT send ends the opoeration dont use it before calc
        // console.log(req.params.num);
    // res.json("fib is" + req.params.num*2)
})

// take num from url  params from url while body is the payload

app.get('/product',function(req,res){
    res.send('start pro')
})



var server= app.listen(7000,function(){
    var host=server.address().address //local
    var port=server.address().port
})