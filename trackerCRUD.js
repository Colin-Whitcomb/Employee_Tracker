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

connection.connect(function(err) {
    // if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    addRole();


});

function addEmployee() {
  console.log("Inserting a new employee...\n");
  var query = connection.query(
    "INSERT INTO employee SET ?",
    {
      first_name: "Jill",
      last_name: "Joolian",
      role_id: 3,
      manager_id: 1
    },
    function(err, res) {
      console.log(res.affectedRows + " employee inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      // updateProduct();
    }
  );
}

function addDepartment() {
  console.log("Inserting a new department... \n");
  var query = connection.query(
    "INSERT INTO department SET ?", 
    {
      _name: "Sales"
    },
    function(err, res) {
      console.log(res.affectedRows + " department inserted!\n");
    }
  )
}

function addRole() {
  console.log("Inserting a new role... \n");
  var query = connection.query(
    "INSERT INTO employee_role SET ?", 
    {
      title: "Lawyer",
      salary: 132000.00,
      department_id: 2
    },
    function(err, res) {
      console.log(res.affectedRows + " role inserted!\n");
    }
  )
}

