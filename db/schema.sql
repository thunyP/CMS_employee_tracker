CREATE DATABASE EmployeeDB;

DROP DATABASE IF EXISTS EmployeeDB;
CREATE DATABASE EmployeeDB;

\c EmployeeDB;

-- create departments table
CREATE TABLE Department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
);

CREATE TABLE Roles(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    Title VARCHAR(50) NOT NULL,
    Salary Decimal(50) NOT NULL,
    Department_id VARCHAR(50) NOT NULL,
    foreign key (Department_id) 
    references Department(id),
);

CREATE TABLE Employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    Role_id VARCHAR(50) NOT NULL,
    Manager_ID Integer NOT NULL,
    foreign key (Role_id)
    references Role(id),
);