let data = require("./data.json");
const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let firstName = "";
let lastName = "";
let gender= "";
let email = "";

readline.question("Enter the name of the person  ", (name) => {
  firstName = name;
  debugger;
  readline.question("Enter the lastName of the person   ", (lastName) => {
    lastName = lastName

    readline.question("Enter th email of the person  ", (email) => {
       email = email;
      readline.question("Enter the gender  ", (gender) => {
         gender = gender;

         if(!data) data = []

         var Time =  new Date().toLocaleString();
  debugger;
        data.push({
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          email: email,
          Time: Time,
          
        });

        fs.writeFile("data.json", JSON.stringify(data), () => {
          console.log("successfully done");

            readline.close();
        });
      });
    });
  });
});

