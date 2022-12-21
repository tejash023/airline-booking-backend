const express  = require('express');

const app = express();


app.listen(3000, function(err){
  if(err){
    console.log('Error in starting the server');
  }

  console.log('server is started');
})