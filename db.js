const mongoose=require("mongoose");
const dotenv=require("dotenv")

dotenv.config();
console.log(process.env);
const MONGO_URL=process.env.MONGO_URL;
// var MongoURL='mongodb+srv://manisha:<password>@cluster0.s0ld7.mongodb.net/Pizza-store';
mongoose.connect(MONGO_URL,{useUnifiedTopology:true, useNewUrlParser:true});
var db=mongoose.connection;
const PORT=process.env.PORT;
db.on('connected',()=>{
console.log('Mongo DB Connection Successful');
})

db.on('error',()=>{
    console.log('Mongo DB Connection failed');
    })

 module.exports=mongoose;