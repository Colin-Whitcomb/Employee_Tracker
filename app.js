const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
const create = require("./trackerCRUD");

// Initial prompt that will redirect to Follow up Functions
// ========================================================
function start() {
    inquirer.prompt({
            type: "list",
            name: "action",
            message: "What would you like to choose?",
            choices: [
                "Add Departments",
                "Add Roles",
                "Add Employees",
                "View Departments",
                "View Roles",
                "View Employees",
                "Update Employee Roles",
            ]
        })
        .then(function (data) {
            switch (data.action) {

                case 'Add Roles':
                    addRoles();
                    break;

                case 'Add Employees':
                    addEmployees();
                    break;

                case 'View Departments':
                    showDepartments();
                    break;

                case 'View Roles':
                    showRoles();
                    break;

                case 'View Employees':
                    showEmployees();
                    break;

                case 'Update Employee Roles':
                    updateRoles();
                    break;

                case 'Add Departments':
                    addDepartments();
                    break;
            }
        })

}

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
    }).then(() => {
        restart();
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
    }).then(() => {
        restart();
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

var restart = () => {
    inquirer
        .prompt({
            name: "repeat",
            type: "list",
            message: "Would you like to go back to the beginning?",
            choices: [
                "Yes",
                "No",
            ]
        })
        .then(function(data) {
            switch (data.repeat) {
               
                case 'Yes':
                    start();
                    break;

                case 'No':
                    console.log("You have completed your task. Have a nice day!");
                    break;
            }
        })
}

// Calling initial functions
start();