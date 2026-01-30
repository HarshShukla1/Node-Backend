const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send('homepage')
})

app.get('/contact-us',function(req,res){
    res.send('contact us page')
})

app.get('/tweets',function(req,res){
    res.send('here are your tweeets')
})

app.post('/tweets',(req,res)=>{
    res.end('tweet created')
})

app.listen(8000,()=>console.log(`Server is running on PORT:8000`))

