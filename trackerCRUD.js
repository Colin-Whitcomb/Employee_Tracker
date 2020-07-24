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
  // if (err) throw err;
  // console.log("connected as id " + connection.threadId + "\n");
  // readEmployeeRole();


});

// Clas Constructor

class Create {


  // Add Employee
  addEmployee(firstName, lastName, roleId, managerId) {
    console.log("firstName: " + firstName + " " + lastName + " " + roleId + " " + managerId);
    console.log("Inserting a new employee...\n");
    var query = connection.query(
      "INSERT INTO employee SET ?", {
        first_name: firstName,
        last_name: lastName,
        role_id: roleId,
        manager_id: managerId
      },
      function (err, res) {
        // console.log(res.affectedRows + " employee inserted!\n");
      }
    );
    console.log(query.sql);
  }

  // Add Department
  addDepartment(departmentName) {
    console.log("Inserting a new department... \n");
    var query = connection.query(
      "INSERT INTO department SET ?", {
        _name: departmentName
      },
      function (err, res) {
        // console.log(res.affectedRows + " department inserted!\n");
      }
    );
    console.log(query.sql);
  }

  // Add Role
  addRole(name, salary, depId) {
    console.log("Inserting a new role... \n");
    var query = connection.query(
      "INSERT INTO employee_role SET ?", {
        title: name,
        salary: salary,
        department_id: depId
      },
      function (err, res) {
        // console.log(res.affectedRows + " role inserted!\n");
      }
    );
    console.log(query.sql);
  }

  // VIEW Functionctions
  // ===================

  // Read Employee Role
  readEmployeeRole() {
    // console.log("Selecting all employees...\n");
    connection.query("SELECT * FROM employee_role", function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log("         ");
      console.table(res);
      // connection.end();
    });
  }
  
  // Read Department 
  readDepartment() {
    var query = "SELECT id, _name FROM department"
    // console.log("Selecting department table...\n");
    connection.query(query, function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log("         ");
      console.table(res);
      // connection.end();
    });
  }

  // Read Employee 
  readEmployees() {
    // console.log("Selecting roles table...\n");
    var query = "Select employee.first_name, employee.last_name, employee_role.title, employee_role.salary FROM employee LEFT JOIN employee_role ON employee.role_id = employee_role.id"
    connection.query(query, function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log("         ");
      console.table(res);
      // connection.end();
    });
  }
}
// export this Create class
module.exports = new Create();

