'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(express.static(__dirname + './public'));

app.listen(8000, ()=>{
  console.log('app is listening on 8000');
});
