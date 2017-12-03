/**
 * Created by aarnavjindal on 03/12/17.
 */

const express = require('express');
const path = require('path');

const app = express();

//app.use('/',express.static(path.join(__dirname,'public_static')));

app.get('/',(req,res,next)=>{
    res.send("Hello");
});

process.env.PORT = process.env.PORT | 1234;

app.listen(process.env.PORT,function () {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});