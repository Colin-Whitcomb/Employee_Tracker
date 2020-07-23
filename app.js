// Set up connection to mysql
// =========================
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "employee_trackerDB"
});

connection.connect(function (err) {});

const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
const create = require("./trackerCRUD");
// const {readDepartment} = require("./trackerCRUD");

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
        create
            .addEmployee(data.first_name, data.last_name, data.role_id, data.manager_id)

    }).then(() => {
        restart();
    })
}

// Take departments from db and display here
function showDepartments() {
    // Call CRUD
    create.readDepartment()

}

// Take roles from db and display here
var showRoles = () => {
    create.readEmployeeTitle()
}

// Take employees from db and display here
var showEmployees = () => {
    create.readEmployees();
}

// Update Employees 
function updateRoles() {
    var nameArr = [];

    grabEmployeeNames = () => {
        connection.query("SELECT id, first_name, last_name, role_id FROM employee ORDER BY id ASC", function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                nameArr.push(res[i].id + ": " + res[i].first_name + " " + res[i].last_name + " || Role ID: " + res[i].role_id);
            }
            // console.log(nameArr)
            grabEmployeeRoles();
            return nameArr;
        })
    }

    var roleArr = [];

    grabEmployeeRoles = () => {
        connection.query(
            "SELECT employee.role_id, employee_role.title FROM employee LEFT JOIN employee_role ON employee.role_id = employee_role.id ORDER BY employee.role_id ASC;",
            function (err, res) {
                if (err) throw err;
                for (var i = 0; i < res.length; i++) {
                    roleArr.push(res[i].role_id + ": " + res[i].title);
                }
                console.log(roleArr);
                askInq();
            })
    }


    function askInq() {

        inquirer
            .prompt([{
                    // What role would you like to update?
                    type: "list",
                    message: "Whose role do you want to update?",
                    name: "updateRole",
                    choices: nameArr,
                },
                {
                    type: "list",
                    message: "What's their new role?",
                    name: "chooseRole",
                    choices: roleArr,
                },
            ]).then(function (response) {

                // first character = role_id #
                console.log(response.chooseRole[0])
                // 6 meaning CFO

                // first character = employee.id #
                console.log(response.updateRole[0])
                // 4 meaning Sandy


                updateRole = () => {
                    // console.log("res dot upRole " + response.updateRole)
                    connection.query(
                        "UPDATE employee SET ? WHERE ?",[{role_id: 1},{id: 4}], function (err, res){
                        if (err) throw err;
                      
                        console.log(res)
                        restart();
                    }
                    )}
                updateRole();
            })
    }


    grabEmployeeNames();
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
        .then(function (data) {
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

// grabEmployeeRoles = () => {
//     connection.query("SELECT title FROM employe_role ", function (err, res) {
//         if (err) throw err;
//         for (var i = 0; i < res.length; i++) {
//             roleArr.push(res[i].title);
//         }
//         console.log(roleArr)
//         askInq();
//         return roleArr;

//     })
// }