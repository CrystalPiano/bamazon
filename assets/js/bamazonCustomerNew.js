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
  //displayProducts();
  choosePurchase();

});

/*
function displayProducts(){
    var query = "SELECT * FROM products";
    
    console.log("BAMAZON PRODUCTS FOR SALE")
    console.log("-------------------------")
      connection.query(query, function(err, res) {
        //if err throw err;
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].item_id + ". " + res[i].product_name + " ($" + res[i].price + ")");
        }
        purchasePrompt(res);
    })  
};

function purchasePrompt(res){
    inquirer
    .prompt([
      {
        name: "quantityCheck",
        type: "input",
        message: "How many would you like?"
      }
    .then(function(answer, res) {
      if (answer < res.stock_quantity) {
        console.log("There is not enough inventory to fulfill your request");
      }
      else {
        //purchaseItem();
      }
    })
};
*/
//==============================

function choosePurchase() {
  // query the database for all items being sold
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
              choiceArray.push(res[i].item_id + ". " + res[i].product_name + " ($" + res[i].price + ")");
            }
            return choiceArray;
          },
          message: "What would you like to buy?"
        },
        {
          name: "quantity check",
          type: "input",
          message: "How many would you like?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < res.length; i++) {
          if (res[i].stock_quantity === answer.choice) {
            chosenItem = res[i];
          }
          //else (console.log("There is not enough of that item in stock to fulfill your request."))
        }

        // determine if there is enough stock
        if (chosenItem.stock_quantity < parseInt(answer.choice)) {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE auctions SET ? WHERE ?",
            [
              {
                highest_bid: answer.bid
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Bid placed successfully!");
              start();
            }
          );
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("Your bid was too low. Try again...");
          start();
        }
      });
  });
}