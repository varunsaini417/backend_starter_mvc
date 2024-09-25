import * as dotenv from 'dotenv';
import connectDB from './db';
import express from 'express';
import fs from 'fs'
import path from 'path';
dotenv.config();
const app = express();
connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at ${process.env.PORT}`);
        
    })
}).catch(()=>{
    console.log("MongoDb connection failed");
    
});

fs.readFile(path.join(__dirname,'testing.txt'), 'utf-8',(err,data)=>{
    console.log(data);
    
})
const content = "Hi this is Varun Saini."
const textOutput = fs.writeFile(path.join(__dirname, 'output.txt'),content,()=>{
    console.log("Write file called");
    
})
console.log("Hi called");


