const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// inquirer prompts
// var restart = function () {
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
        } 
        else if (data.prompt === 'Add Roles'){
            addRoles();
        }
    });

var addDepartments = () => {
    inquirer.prompt([{
            // Name
            type: "input",
            message: "What's the name of the department?",
            name: "department_name"
        }
    ]).then(data => {
        // Extract Department Name 
        console.log(data.department_name);
    })
}

var addRoles = () => {
    inquirer.prompt([{
            // Name
            type: "input",
            message: "What's the name of the ROLE?",
            name: "role"
        }
    ]).then(data => {
        // Extract Role Name 
        console.log(data.role);
    })
}