var mysql = require("mysql");
var inquirer = require("inquirer");
// Load the NPM Package inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");

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
  start();
});
function start(){
    inquirer
      .prompt([
        {
          type: "list",
          message: "What Item Would You Like to Buy?",
          choices: ["Post an Item", "Bid on an Item"],
          name: "item-list"
        },
      
     
      ])
      .then(function(inquirerResponse) {
        if(inquirerResponse.post-bid ==="Post an Item"){
          console.log("You're  A SELLER")
          postAuction();
        }
        else if(inquirerResponse.post-bid==="Bid on an Item"){
          console.log("You're a BUYER!");
        }
        else{
            connection.end();
        }
        // // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        // if (inquirerResponse.bear =="polar bear") {
        //   console.log("\nWelcome " + inquirerResponse.username);
        //   console.log("Your correct! " + inquirerResponse.bear + " is the best type of bear\n");
        // }
        // else {
        //   console.log("\nThat's okay.... " + inquirerResponse.bear + ", is ok i guess\n");
        // }
        // console.log(inquirerResponse)
      });
    }