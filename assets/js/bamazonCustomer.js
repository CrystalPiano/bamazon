/* Notes:

-Display items for sale
-Inquire what user wants to buy
-Verify quantity of desired item
-Process request
-Deduct amount of items purchased from the over all item quantity
-Show user total price of items purchased

*/

var inquire = require("inquire");
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: "",
	database: "bamazondb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});

// Adding items to the table in the bamazondb
function createProduct() {
    console.log("Inserting new products...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        product_name: "shake weight",
        department_name: "fitness",
        price: 19.99,
        stock_quantity: 999
      },
      {
        product_name: "cool water bottle",
        department_name: "fitness",
        price: 9.99,
        stock_quantity: 100
      },
            {
        product_name: "reusable rocket",
        department_name: "space",
        price: 12000000.00,
        stock_quantity: 3
      },
            {
        product_name: "NASA tee shirt",
        department_name: "space",
        price: 14.99,
        stock_quantity: 250
      },
            {
        product_name: "dog leash",
        department_name: "pets",
        price: 9.99,
        stock_quantity: 75
      },
            {
        product_name: "dog food",
        department_name: "pets",
        price: 49.99,
        stock_quantity: 50
      },
            {
        product_name: "human food",
        department_name: "food",
        price: 24.50,
        stock_quantity: 100
      },
            {
        product_name: "massive square watermelon",
        department_name: "food",
        price: 12.99,
        stock_quantity: 8
      },
            {
        product_name: "chunk of gold",
        department_name: "commodities",
        price: 799.99,
        stock_quantity: 20
      },
            {
        product_name: "chunk of coal",
        department_name: "commodities",
        price: 4.99,
        stock_quantity: 595
      },

      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        //updateProduct();
      }
    );

    // logs the actual query being run
    console.log(query.sql);
};

function updateProduct() {
  console.log("Updating stock quantity of selected item...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: --
      },
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
      console.log(res.)
      // Call deleteProduct AFTER the UPDATE completes
      //deleteProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

function deleteProduct() {
  console.log("Deleting all strawberry icecream...\n");
  connection.query(
    "DELETE FROM products WHERE ?",
    {
      flavor: "strawberry"
    },
    function(err, res) {
      console.log(res.affectedRows + " products deleted!\n");
      // Call readProducts AFTER the DELETE completes
      //readProducts();
    }
  );
};

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};