# welcome to Flights Service

## project setup
- clone the project on your local
- execute `npm install` on the same path as of yopur root directory of the download project 
- Create a `.env` file in the root directoryv and add the following environment variable
- `PORT=3000`
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json 

 ```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

 ```

 - Once you've added your db config as listed above,go to the src folder from your terminal and execute `npx sequelize db:create`
 and then execute 

 `npx sequelize db:migrate`
 ```


## DB Design
- Airplane Table
- Flight
- Airport
- City

-A flight belongs to an airplane but one airplane can be used in multiple flights
- a city has many airpots but one airport belongs to a city 
- one airport can have many flights, but a flight belongs to one airport

## Flights Table

- id- unique id for 




 npx sequelize model:generate --name Flights --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer

  npx sequelize db:migrate 
  