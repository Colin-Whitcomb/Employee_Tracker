DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE Table employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(10) NULL,
    last_name VARCHAR(10) NULL,
    role_id INTEGER(5) NULL,
    manager_id INTEGER(5) NULL,
    PRIMARY KEY (id)
)