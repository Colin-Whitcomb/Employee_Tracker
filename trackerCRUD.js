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

connection.connect(function (err) {
});

// Clas Constructor

class Create {

  // Add Employee
  addEmployee(firstName, lastName, roleId, managerId) {

    var query = connection.query(
      "INSERT INTO employee SET ?", {
        first_name: firstName,
        last_name: lastName,
        role_id: roleId,
        manager_id: managerId
      },
      function (err, res) {});
  }

  // Add Department
  addDepartment(departmentName) {
    var query = connection.query(
      "INSERT INTO department SET ?", {
        _name: departmentName
      },
      function (err, res) {
      }
    );
  }

  // Add Role
  addRole(name, salary, depId) {
    var query = connection.query(
      "INSERT INTO employee_role SET ?", {
        title: name,
        salary: salary,
        department_id: depId
      },
      function (err, res) {});
  }

  // VIEW Functionctions
  // ===================

  // Read Employee Role
  readEmployeeRole() {
    connection.query("SELECT * FROM employee_role", function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log("         ");
      console.table(res);
      console.log("         ");
    });
  }
  
  // Read Department 
  readDepartment() {
    var query = "SELECT id, _name FROM department"
   
    connection.query(query, function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log("         ");
      console.table(res);
      console.log("         ");
    });
  }

  // Read Employee 
  readEmployees() {
    var query = "Select employee.first_name, employee.last_name, employee_role.title, employee_role.salary FROM employee LEFT JOIN employee_role ON employee.role_id = employee_role.id"
    connection.query(query, function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log("         ");
      console.table(res);
      console.log("         ");
      // connection.end();
    });
  }
}
// export this Create class
module.exports = new Create();

