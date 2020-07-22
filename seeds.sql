-- Employee Table Additions --
USE employee;

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Bob", "Smith", 1, 12);

-- Department Table Additions --
USE department;

INSERT INTO department (_name)
VALUES("HR");

-- Employee Role Table Additions --

INSERT INTO employee_role (title, salary)
VALUES("CEO", 2000000);


