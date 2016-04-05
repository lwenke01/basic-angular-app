'use strict';

let express = require('express');
let app = express();
app.use(express.static(__dirname + './public'));

app.listen(8000);
