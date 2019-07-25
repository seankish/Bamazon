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
   
    console.log("|ID |    Product Name  |  Price  |");
    console.log("<<<<<<<<<<<<<<<<<->>>>>>>>>>>>>>>>>>");
    for (var i = 0; i < res.length; i++) {
        console.log("<>  " + res[i].id + "<>" + res[i].productName + "<>" + res[i].price + "<>");
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
          name: "item-list",
        },
        {
          type: "number",
          message: "How many Would You Like to Purchase?",
          name:"buyQuantity"
        },
      
    
      ])

      .then(function(answer) {
        
           console.log("worked")
          
        
        // switch (answer.action) {
        // case "":
        //   artistSearch();
        //   break;
  
        // case "":
        //   multiSearch();
        //   break;
  
        // case "":
        //   rangeSearch();
        //   break;
  
        // case "":
        //   songSearch();
        //   break;
            
        // case "":
        //   connection.end();
        //   break;
        // }
      });
}
  
        