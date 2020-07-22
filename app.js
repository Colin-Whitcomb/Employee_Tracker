const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
const create = require("./trackerCRUD");


// Initial prompt that will redirect to Follow up Functions
// ========================================================
inquirer.prompt(
        [{
            type: "list",
            name: "prompt",
            message: "What ",
            choices: [
                "Add Departments",
                "Add Roles",
                "Add Employees",
                "View Departments",
                "View Roles",
                "View Employees",
                "Update Employee Roles",
            ]
        }, ])
    .then(data => {
        // console.log(data);
        if (data.prompt === 'Add Departments') {
            addDepartments()
        } else if (data.prompt === 'Add Roles') {
            addRoles();
        } else if (data.prompt === 'Add Employees') {
            addEmployees();
        } else if (data.prompt === 'View Departments'){
            showDepartments();
        } else if (data.prompt === 'View Roles'){
            showRoles();
        }
         else if (data.prompt === 'View Employees'){
            showEmployees();
        } else if (data.prompt === 'Update Employee Roles'){
            updateRoles();
        }
    });

// Follow up Functions
// ===================

// Add Department
var addDepartments = () => {
    inquirer.prompt([{
        // Name
        type: "input",
        message: "What's the name of the department?",
        name: "department_name"
    }]).then(data => {
        // Extract Department Name 
        console.log(data.department_name);

         // take collected info and pass to CRUD
        create.addDepartment(data.department_name);
    })
}

// Add Roles
var addRoles = () => {
    inquirer.prompt([{
        // Name
        type: "input",
        message: "What's the name of the ROLE?",
        name: "name"
    },
    {
        // Salary
        type: "input",
        message: "What's the salary of the ROLE?",
        name: "salary"
    },
    {
        // Department ID
        type: "input",
        message: "What's the department ID of the ROLE?",
        name: "department_id"
    }

]).then(data => {
        // Extract Role Name 
        console.log(data.name);

        // take collected info and pass to CRUD
        create.addRole(data.name, data.salary, data.department_id);
    })
}

// Add Employees
var addEmployees = () => {
    inquirer.prompt([{
            // First Name
            type: "input",
            message: "What's the first name of the employee?",
            name: "first_name"
        },
        {
            // Last Name
            type: "input",
            message: "What's the last name of the employee?",
            name: "last_name"
        },
        {
            // Role ID
            type: "input",
            message: "What's the Role ID of the employee?",
            name: "role_id"
        },
        {
            // Role ID
            type: "input",
            message: "What's the Manager ID of the employee?",
            name: "manager_id"
        },


    ]).then(data => {
        // Extract Role Name 
        console.log(
            create.addEmployee(data.first_name, data.last_name, data.role_id, data.manager_id)
        );
    })
}

// Take departments from db and display here
var showDepartments = () => {
    console.log("Put Departments Here");
}

// Take roles from db and display here
var showRoles = () => {
    console.log("Put Roles Here");
}

// Take employees from db and display here
var showEmployees = () => {
    console.log("Put Employees Here");
}

// Update Employees 
var updateRoles = () => {
    console.log("Update Employees Here");
} 