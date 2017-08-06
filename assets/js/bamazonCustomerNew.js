var inquirer = require("inquirer");
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
  displayProducts();
});

function displayProducts(){
    var query = "SELECT * FROM products";
    
    console.log("BAMAZON PRODUCTS FOR SALE")
    console.log("-------------------------")
      connection.query(query, function(err, res) {
        //if err throw err;
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].item_id + ". " + res[i].product_name + " ($" + res[i].price + ")");
        }
        //purchasePrompt(res);
    })  
};

function purchasePrompt(){

};