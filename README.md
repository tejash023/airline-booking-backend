# Welcome to Flights Search Service

## Users can search and find flights between two cities

## Project Setup
  
  - Clone the project on your local
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
  - Once you've added your db config as listed above , go to the src folder from your terminal and execute `npx sequelize db:create`

  ## DB Design
    - Airplane Table
    - Flight
    - Airport
    - City

    - A flight belongs to an airplane but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights, but a flight belongs to one airport.

  ## Tables

  ### City - id, name, created_at, updated_at
  ### Airport - id, name, address, city_id, created_at, updated_at
      - Relationship - City has many Airports and Airports belong to a City (one to many)
