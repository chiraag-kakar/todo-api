# Todo API
---
A RESTful web application where user can create, read, update and delete todos, prioritize them and search them by title, date and state built using PERN stack.


Note 1 : It is assumed that the user has **Postman** installed to test the api by sending HTTP requests and **PostgreSQL** to be used as Database.


Note 2 : It is also assumed that the user has **Node** (LTS version) , **npm**  &  **nodemon** installed globally.

# Installation & Run
---
Step : 1 | Clone this project using Git
* Open the command prompt/terminal and enter the following command
```
git clone https://github.com/chiraag-kakar/todo-api.git
```


Step : 2 | Change the current directory to project directory and install dependencies
```
cd todo-api && npm install
```


Step : 3 | Start the postgres server and create database and table with the required schema. 
* Open another terminal/Command Prompt and enter the following command :
```
psql -U postgres
```
* Enter the super-user password.

* Create Database 
```
CREATE DATABASE todo_datastore;
```
* Switch to the "todo_database"
```
\c todo_datastore
```

* Create Table with required schema
```
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY, description VARCHAR(255), created_on DATE, todo_state NUMERIC, todo_priority VARCHAR(20)
);
```

* Start the API server
  * Get back to the terminal where you installed dependencies for the project and enter the following command to start the API server
```
nodemon
```

Note : Make sure before starting the API server that you have made changes to the database configuration file (db.js) accordingly and replaced the database name and superuser password with yours.

```(js)
const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"Chiraag@001",
    database:"todo_datastore",
    host:"localhost",
    port:5432

});

module.exports = pool;
```

---

# API
---

```
# API Endpoint : http://127.0.0.1:5000
```

## /todos
* `GET`: Gets all Todos
* `POST`: Creates a Todo

## /todos/:id
* `GET`: Gets a todo by todo_id
* `PUT`: Updates a todo 
* `DELETE`: Deletes a todo

## /todos/:state

## /todos/:created_on

## /todos/:title


---
# Approach


---
# Database Schema


---

# API Specifications at a Glance



