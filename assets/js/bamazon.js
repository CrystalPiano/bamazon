var inquire = require("inquire");
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: "blank",
	database: "bamazondb"
});

connection.connect(function(err){
	createProduct();
});

// Adding an item to the table in the bamazondb
function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        product_name: "shake weight",
        department_name: "fitness",
        price: 19.99,
        stock_quantity: 999
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        //updateProduct();
      }
    );

    // logs the actual query being run
    console.log(query.sql);
  }