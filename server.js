var express = require('express');
var app = express();
const port = process.env.PORT || 3000

app.use('/', require('./api/routes'));

  app.listen(port, ()=>{
    console.log(`server running on port 3000 ${port}`);
  })