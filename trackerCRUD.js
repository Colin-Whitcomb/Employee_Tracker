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
    createEmployee();

});

function createEmployee() {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO employee SET ?",
    {
      first_name: "Jill",
      last_name: "Joolian",
      role_id: 3,
      manager_id: 1
    },
    function(err, res) {
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      // updateProduct();
    }
  );
}