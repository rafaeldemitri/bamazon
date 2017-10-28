var mySql = require("mysql");
var inquirer = require("inquirer");

var connection = mySql.createConnection({

    host:"localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_DB"
    
});

connection.connect(function(err) {
  if (err) throw err;
  displayProducts();
});


function displayProducts() {
    console.log ("Products List")
        connection.query("SELECT * FROM products", function(err, res){
            if (err) throw err;
            var choicesArr = [];
            res.forEach(function(element) {
                choicesArr.push(element.product_name);
            });

    purchase(choicesArr)
    });
}

function purchase(choicesArr){
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to buy?",
            name: "selection",
            choices: choicesArr
        }
                
    ]).then(function(inqResp){
        var purchase = inqResp.selection;
        console.log(purchase);
             inquirer.prompt([
                 {
                     type: "input",
                     message: "How many would you like?",
                     name: "quantity"
                 }
         ]).then(function(inqResp){
             var quantity = inqResp.quantity;
             console.log(quantity);
             continueShopping();
         })
        //     connection.end();
        //     return choicesArr;
       // });
    })
}
    function continueShopping(){
        inquirer.prompt([
            {
                type: "confirm",
                message: "Would you like anything else?",
                name: "confirm"
            }
        ]).then(function(inqResp){
            var confirm = inqResp.confirm;
            if(confirm){
                displayProducts();
            } else {
                console.log("Thank you for your purchase");
                connection.end();
            }
        })
    }





