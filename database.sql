-- CREATE DATABASE todo_database;

--\c todo_database

-- CREATE TABLE todo(
--     todo_id SERIAL PRIMARY KEY, description VARCHAR(255));

CREATE DATABASE todo_datastore;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY, description VARCHAR(255), created_on DATE, todo_state NUMERIC, todo_priority VARCHAR(20)
);