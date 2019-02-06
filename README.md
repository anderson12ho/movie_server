# Movie Server
Server containing movies and actors
## Set up
To install dependencies, run ```npm install```
## Start Server
To start the server, run ```npm start```

## API

**Movie**

| Method | Endpoint | Description |
| ------ | ------ | ------ |
| GET | /movie | Retrieve list of movies, can query by date |
| GET | /movie/:id | Retrieve movie by id |
| POST | /movie | Creates a movie |
| POST | /movie/:id/actor | Adds actor to a movie |
| PUT | /movie/:id | Updates a movie |

**Actor**

| Method | Endpoint | Description |
| ------ | ------ | ------ |
| GET | /actor | Retrieve list of actor, can query by year |
| GET | /actor/:id | Retrieve actor by id |
| POST | /actor | Creates an actor |
| PUT | /actor/:id | Updates a actor |
