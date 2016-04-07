'use strict';

let express = require('express');
let morgan = require('morgan');

const PORT = process.env.PORT || 4000;
let app = module.exports = exports = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public/'));

app.listen(PORT, ()=>{
  console.log('app is listening on 4000');
});
