// import validator from "validator";
var validator = require("validator");
const fs = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Name: ", (name) => {
  readline.question("Telephone: ", (telephone) => {
    readline.question("Email: ", (email) => {
      const myObj = { name: `${name}`, email: `${email}`, telephone: `${telephone}` };
      const file = fs.readFileSync("contacts.json", "utf-8");
      const myData = JSON.parse(file);

      myData.push(myObj);

      const content = JSON.stringify(myData);
      fs.writeFileSync("contacts.json", content);
      readline.close();
    });
  });
});
