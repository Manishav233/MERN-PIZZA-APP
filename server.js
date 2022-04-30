const express = require('express');
const path=require('path');
const Pizza=require('./models/pizzaModel');

const db=require("./db");
const app = express()

app.use(express.json());
 
 const pizzasRoute=require('./routes/pizzasRoute')
 const userRoute=require('./routes/userRoute')
 const ordersRoute=require('./routes/ordersRoute')
 
 app.use('/api/pizzas/',pizzasRoute)
 app.use('/api/users/',userRoute)
 app.use('/api/orders/',ordersRoute)
 
 if(process.env.NODE_ENV==='production'){
 app.use(express.static(path.join(__dirname,'/front_end/build')))
 app.get('*',(req,res)=>{
 res.sendFile(path.resolve(__dirname,"front_end","build","index.html"))
 })
 }
 else{
    app.get('/', (req, res) =>{ 
        res.send('Server Working !!!');
        });
 }
    // app.get('/', (req, res) =>{ 
    // res.send('Server Working !!!');
    // });
    
    // app.get('/getpizzas',(req,res)=>{
    
    // Pizza.find({},(err,data)=>{
    
    // if(err){
    // console.log(err);
    // }
    // else{
    // res.send(data);
    // }
    // })
    // });

const port=process.env.PORT || 9000;

app.listen(port,()=>'Server running on port'+port);



