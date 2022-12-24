# Welcome to Flight Service

## Project Setup
  
  - clone the project on your local
  - Execute `npm install` on the same path as of your root directory of the downloaded project
  - Create an `env` file on your root direct and the following env variable
    `PORT = 3000 `
  - Inside the `src/config` folder, create a new file `config.json` and the add the following peice of json
  ```
    {
    "development": {
      "username": "root",
      "password": "password",
      "database": "name of DB",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }
```