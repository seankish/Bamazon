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
  start();
});
function start(){
    inquirer
      .prompt([
        {
          type: "list",
          message: "What Item Would You Like to Buy?",
          choices: [
            "M240B Machine Gun", 
            "MK1L 40mm Grenade Launcher",
            "Seadoo GTI PRO Jetski",
            "OuterLimits 50 SL SpeedBoat",
            "Honda CRX450 Dirtbike",
            "Ducati SuperSport 900 Motorcycle",
            "Ferrari Enzo Supercar",
            "Bugatti Veyron Supercar",
            "Lamborghini sesto Elemento Supercar",
            "Gian Inflatable Unicorn"],
          name: "item-list"
        },
      
     
      ])
      .then(function(answer) {
        inquirer
          .prompt([
            {
            type: "number",
            message: "How many Would You Like to Purchase?",
            name:"buyQuantity"
            },
          ])
        
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
        // // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        // if (inquirerResponse.bear =="polar bear") {
        //   console.log("\nWelcome " + inquirerResponse.username);
        //   console.log("Your correct! " + inquirerResponse.bear + " is the best type of bear\n");
        // }
        // else {
        //   console.log("\nThat's okay.... " + inquirerResponse.bear + ", is ok i guess\n");
        // }
        // console.log(inquirerResponse)
    //   });
    // }