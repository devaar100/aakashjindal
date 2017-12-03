/**
 * Created by aarnavjindal on 03/12/17.
 */

const express = require('express');
const path = require('path');

const app = express();

app.use('/',express.static(path.join(process.env.PWD,'public_static')));

app.listen(process.env.PORT,function () {
    console.log("Listening on "+process.env.PORT);
});