DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

-- employee Table --
CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INTEGER(5) NULL,
    manager_id INTEGER(5) NULL,
    PRIMARY KEY(id)
);


-- Department Table --
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    _name VARCHAR (30) NULL,
    PRIMARY KEY(id)
);

-- employee ROLE Table --
CREATE TABLE employee_role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NULL,
    salary DECIMAL (10,2) NULL, 
    department_id INT (10) NULL,
    PRIMARY KEY(id)
);

