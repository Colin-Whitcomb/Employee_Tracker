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
            },
        ])
    .then(data => {
        // console.log(data);
        if (data.prompt === 'Add Departments') {
            addDepartments()
        } else {}
    });
