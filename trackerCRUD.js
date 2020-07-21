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
  console.log("connected as id " + connection.threadId + "\n");
  readEmployeeRole();


});

// Alter Data Base Functions
// =========================

// Add Employee
function addEmployee() {
  console.log("Inserting a new employee...\n");
  var query = connection.query(
    "INSERT INTO employee SET ?", {
      first_name: "Jill",
      last_name: "Joolian",
      role_id: 3,
      manager_id: 1
    },
    function (err, res) {
      console.log(res.affectedRows + " employee inserted!\n");
    }
  );
  console.log(query.sql);
}

// Add Department
function addDepartment() {
  console.log("Inserting a new department... \n");
  var query = connection.query(
    "INSERT INTO department SET ?", {
      _name: "Sales"
    },
    function (err, res) {
      console.log(res.affectedRows + " department inserted!\n");
    }
  );
  console.log(query.sql);
}

// Add Role
function addRole() {
  console.log("Inserting a new role... \n");
  var query = connection.query(
    "INSERT INTO employee_role SET ?", {
      title: "Doctor",
      salary: 132000.00,
      department_id: 3
    },
    function (err, res) {
      console.log(res.affectedRows + " role inserted!\n");
    }
  );
  console.log(query.sql);
}

// Read Employee Role
function readEmployeeRole() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM employee_role", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}