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

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Bob", "Smith", 3, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Addy", "Payne", 5, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Keith", "Tillotson", 1, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Sandy", "Bennett", 4, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Fred", "Parker", 2, 1);

-- Department Table --
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    _name VARCHAR (30) NULL,
    PRIMARY KEY(id)
);

INSERT INTO department (_name)
VALUES("HR");

INSERT INTO department (_name)
VALUES("Leadership");

INSERT INTO department (_name)
VALUES("Management");

INSERT INTO department (_name)
VALUES("Sales");

INSERT INTO department (_name)
VALUES("Marketing");

-- employee ROLE Table --
CREATE TABLE employee_role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NULL,
    salary DECIMAL (10,2) NULL, 
    department_id INT (10) NULL,
    PRIMARY KEY(id)
);

INSERT INTO employee_role (title, salary, department_id)
VALUES("CEO", 2000000, 2);

INSERT INTO employee_role (title, salary, department_id)
VALUES("Project Manager", 110000, 3);

INSERT INTO employee_role (title, salary, department_id)
VALUES("Lead Sales Partner", 90000, 4);

INSERT INTO employee_role (title, salary, department_id)
VALUES("Human Resource Manager", 75000, 1);

INSERT INTO employee_role (title, salary, department_id)
VALUES("Senior Marketing Analyst", 140000, 3);
