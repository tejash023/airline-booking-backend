const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const router = require('./routes');

const setupAndStartServer = async () => {

  //create the express object
  const app = express();
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({urlencoded:true}));

  app.use('/api', router);

  app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
  })
}


setupAndStartServer();