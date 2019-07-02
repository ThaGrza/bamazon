// Requires dependencies for node app.
var mysql = require("mysql")
var inquirer = require("inquirer")

// Creates connection to sql server.
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "loldave1",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err
    displayInventory()
});

function displayInventory()  {
    console.log("Connected");
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            console.log(" - - - - - - - - - - - - - - - ")
            console.log("item number: " + res[i].item_id)
            console.log("item: " + res[i].product_name)
            console.log("price: $" + res[i].price)
        }
        purchase()
    })
};

// Prompts the user for input choices on products.
function purchase() {
    inquirer.prompt([
        {
                type: "input",
                name: "item_id",
                message: "Selected an item by Item Number: ",
                filter: Number
            },
            {
                type: "input",
                name: "quantity",
                message: "How many would you like?",
                filter: Number
            }
        ])
        .then(function(purchase) {
            var item = purchase.item_id
            var quantity = purchase.quantity

            var queryStr = 'SELECT * FROM products WHERE ?';

            connection.query(queryStr, { item_id: item }, function(err, res) {
                if (err) throw err

                if (res.length === 0) {
                    console.log("ERROR: Invalid Item ID. Please select a valid Item ID.")
                    displayInventory()
                } else {

                    // set the results to the variable of productInfo
                    var productInfo = res[0]

                    if (quantity <= productInfo.stock_quantity) {
                        console.log(productInfo.product_name + "is in stock! Placing order now!")
                        console.log("\n")

                        // the updating query string
                        var updateQueryStr = "UPDATE products SET stock_quantity = " + (productInfo.stock_quantity - quantity) + " WHERE item_id = " + item

                        // Update the inventory
                        connection.query(updateQueryStr, function(err, data) {
                            if (err) throw err;

                            console.log("Your order has been placed!");
                            console.log("Your total is $" + productInfo.price * quantity)
                            console.log("Thanks for shopping at bamazon!")
                            // End the database connection.
                            connection.end();
                        })
                        // ReDisplays inventory if not enough in stock.
                    } else {
                        console.log("Sorry, there is not enough " + productInfo.product_name + " in stock.")
                        setTimeout(function() { displayInventory() }, 4000)
                    }


                }
            })


        })
}