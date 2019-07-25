var mysql = require("mysql");
var inquirer = require("inquirer");
// Load the NPM Package inquirer

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Bobvilla1",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
});

listInventory();

function listInventory(){
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err
   
    
    console.log("<<<<<<<<<<<<<<<<<->>>>>>>>>>>>>>>>>>");
    for (var i = 0; i < res.length; i++) {
        console.log( "ID: " + res[i].id + "    <>     Product: " + res[i].productName + "    <>    " + "price"+res[i].price + "  <>  ");
    } 
  })
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you Like to Buy Something?",
        name:"start-shop",
      
      },
    ])
    .then(function(answer) {
      console.log("                                                            ")
      start();
    })
    
 
};
function start(){
    inquirer
      .prompt([
        {
          type: "list",
          message: "What Item Would You Like to Buy?",
          choices: [
            "M240B Machine Gun", 
            "MK1L 40mm Grenade Launcher",
            "Seadoo GTI PRO",
            "OuterLimits 50 SL",
            "Honda CRX450",
            "Ducati SuperSport 900",
            "Ferrari Enzo",
            "Bugatti Veyron",
            "Lamborghini sesto Elemento",
            "Giant Inflatable Unicorn"],
          name: "inventory",
        },
        {
          type: "number",
          message: "How many Would You Like to Purchase?",
          name:"buyQuantity"
        },
      
    
      ])

      .then(function(answer) {
        var userChoice = answer.inventory;
        console.log(userChoice);
        var newQuery = "SELECT * FROM products WHERE productName = ?"
        connection.query(newQuery, [answer.userChoice], function (err, res) {
             if (err) throw err;
          });
        })
      
         
}

  
        