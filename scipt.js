/**
 * Created by aarnavjindal on 03/12/17.
 */

const express = require('express');
const path = require('path');

const app = express();

app.use('/',express.static(path.join(__dirname,'public_static')));

port = process.env.PORT | 1234;

app.listen(port,function () {
    console.log("Listening on http://localhost:"+port);
});