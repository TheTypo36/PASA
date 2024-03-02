import express from 'express';



const app = express();

const port =  4500;

app.listen(port,()=>{
    console.log(`running on port ${port}`);
})