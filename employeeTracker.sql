DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

-- employee Table --
CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(10) NULL,
    last_name VARCHAR(10) NULL,
    role_id INTEGER(5) NULL,
    manager_id INTEGER(5) NULL,
    PRIMARY KEY(id)
);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Bob", "Smith", 1, 12);

-- Department Table --
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    _name VARCHAR (10) NULL,
    PRIMARY KEY(id)
);

INSERT INTO department (_name)
VALUES("HR");

-- employee ROLE Table --
CREATE TABLE employee_role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (10) NULL,
    salary INTEGER (20) NULL, 
    PRIMARY KEY(id)
);

INSERT INTO employee_role (title, salary)
VALUES("CEO", 2000000);

