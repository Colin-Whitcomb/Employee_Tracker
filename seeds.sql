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


-- Select employee.first_name, employee.last_name, department._name FROM employee LEFT JOIN department ON employee.role_id = department.id;

-- Select employee.first_name, employee.last_name, employee_role.title FROM employee LEFT JOIN employee_role ON employee.role_id = employee_role.id;

-- Select employee_role.title, department._name FROM employee_role LEFT JOIN department ON employee_role.department_id = department.id;

-- Select employee.first_name, employee.last_name, employee_role.title, employee_role.salary FROM employee LEFT JOIN employee_role ON employee.role_id = employee_role.id;