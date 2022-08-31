const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
// var card = document.querySelector(".card");
console.log("here");

var idCount = 0;
var employees = [];

var gencards = '';

var beginningHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>
    <header>

        <h1>My Team</h1>
    </header>
    <section class="board">`;
var endHTML = `


</section>

</body>

</html>`;

function gatherEmployees() {
  const promptUser = () => {
    return inquirer.prompt([
      {
        type: "list",
        name: "paygrade1",
        message: "What paygrade is the employee?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        when(answers) {
          return answers.paygrade1 === "Manager";
        },
        type: "input",
        name: "officeNum1",
        message: "What is their office Number? ",
      },
      {
        when(answers) {
          return answers.paygrade1 === "Engineer";
        },
        type: "input",
        name: "gitHub1",
        message: "What is their GitHub profile? ",
      },
      {
        when(answers) {
          return answers.paygrade1 === "Intern";
        },
        type: "input",
        name: "school1",
        message: "What school did they attend? ",
      },
      {
        type: "input",
        name: "employee1",
        message: "What's their name?",
      },
      {
        type: "input",
        name: "email1",
        message: "What's their email?",
      },
      {
        type: "list",
        name: "paygrade2",
        message: "What paygrade is the employee?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        when(answers) {
          return answers.paygrade2 === "Manager";
        },
        type: "input",
        name: "officeNum2",
        message: "What is their office Number? ",
      },
      {
        when(answers) {
          return answers.paygrade2 === "Engineer";
        },
        type: "input",
        name: "gitHub2",
        message: "What is their GitHub profile? ",
      },
      {
        when(answers) {
          return answers.paygrade2 === "Intern";
        },
        type: "input",
        name: "school2",
        message: "What school did they attend? ",
      },
      {
        type: "input",
        name: "employee2",
        message: "What's their name?",
      },
      {
        type: "input",
        name: "email2",
        message: "What's their email?",
      },
      {
        type: "list",
        name: "paygrade3",
        message: "What paygrade is the employee?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        when(answers) {
          return answers.paygrade3 === "Manager";
        },
        type: "input",
        name: "officeNum3",
        message: "What is their office Number? ",
      },
      {
        when(answers) {
          return answers.paygrade3 === "Engineer";
        },
        type: "input",
        name: "gitHub3",
        message: "What is their GitHub profile? ",
      },
      {
        when(answers) {
          return answers.paygrade3 === "Intern";
        },
        type: "input",
        name: "school3",
        message: "What school did they attend? ",
      },
      {
        type: "input",
        name: "employee3",
        message: "What's their name?",
      },
      {
        type: "input",
        name: "email3",
        message: "What's their email?",
      },
      {
        type: "list",
        name: "paygrade4",
        message: "What paygrade is the employee?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        when(answers) {
          return answers.paygrade4 === "Manager";
        },
        type: "input",
        name: "officeNum4",
        message: "What is their office Number? ",
      },
      {
        when(answers) {
          return answers.paygrade4 === "Engineer";
        },
        type: "input",
        name: "gitHub4",
        message: "What is their GitHub profile? ",
      },
      {
        when(answers) {
          return answers.paygrade4 === "Intern";
        },
        type: "input",
        name: "school4",
        message: "What school did they attend? ",
      },
      {
        type: "input",
        name: "employee4",
        message: "What's their name?",
      },
      {
        type: "input",
        name: "email4",
        message: "What's their email?",
      },
      {
        type: "list",
        name: "paygrade5",
        message: "What paygrade is the employee?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        when(answers) {
          return answers.paygrade5 === "Manager";
        },
        type: "input",
        name: "officeNum5",
        message: "What is their office Number? ",
      },
      {
        when(answers) {
          return answers.paygrade5 === "Engineer";
        },
        type: "input",
        name: "gitHub5",
        message: "What is their GitHub profile? ",
      },
      {
        when(answers) {
          return answers.paygrade5 === "Intern";
        },
        type: "input",
        name: "school5",
        message: "What school did they attend? ",
      },
      {
        type: "input",
        name: "employee5",
        message: "What's their name?",
      },
      {
        type: "input",
        name: "email5",
        message: "What's their email?",
      },
    ]);
  };
  promptUser().then((answers) => {
    idCount++;
    console.log("end");
    if (answers.paygrade1 === "Manager") {
      employees.push(
        new Manager(
          idCount,
          answers.paygrade1,
          answers.employee1,
          answers.email1,
          answers.officeNum1
        )
      );
    } else if (answers.paygrade1 === "Engineer") {
      employees.push(
        new Engineer(
          idCount,
          answers.paygrade1,
          answers.employee1,
          answers.email1,
          answers.gitHub1
        )
      );
    } else if (answers.paygrade1 === "Intern") {
      employees.push(
        new Intern(
          idCount,
          answers.paygrade1,
          answers.employee1,
          answers.email1,
          answers.school1
        )
      );
    }

    idCount++;

    if (answers.paygrade2 === "Manager") {
      employees.push(
        new Manager(
          idCount,
          answers.paygrade2,
          answers.employee2,
          answers.email2,
          answers.officeNum2
        )
      );
    } else if (answers.paygrade2 === "Engineer") {
      employees.push(
        new Engineer(
          idCount,
          answers.paygrade2,
          answers.employee2,
          answers.email2,
          answers.gitHub2
        )
      );
    } else if (answers.paygrade2 === "Intern") {
      employees.push(
        new Intern(
          idCount,
          answers.paygrade2,
          answers.employee2,
          answers.email2,
          answers.school2
        )
      );
    }

    idCount++;

    if (answers.paygrade3 === "Manager") {
      employees.push(
        new Manager(
          idCount,
          answers.paygrade3,
          answers.employee3,
          answers.email3,
          answers.officeNum3
        )
      );
    } else if (answers.paygrade3 === "Engineer") {
      employees.push(
        new Engineer(
          idCount,
          answers.paygrade3,
          answers.employee3,
          answers.email3,
          answers.gitHub3
        )
      );
    } else if (answers.paygrade3 === "Intern") {
      employees.push(
        new Intern(
          idCount,
          answers.paygrade3,
          answers.employee3,
          answers.email3,
          answers.school3
        )
      );
    }

    idCount++;

    if (answers.paygrade4 === "Manager") {
      employees.push(
        new Manager(
          idCount,
          answers.paygrade4,
          answers.employee4,
          answers.email4,
          answers.officeNum4
        )
      );
    } else if (answers.paygrade4 === "Engineer") {
      employees.push(
        new Engineer(
          idCount,
          answers.paygrade4,
          answers.employee4,
          answers.email4,
          answers.gitHub4
        )
      );
    } else if (answers.paygrade4 === "Intern") {
      employees.push(
        new Intern(
          idCount,
          answers.paygrade4,
          answers.employee4,
          answers.email4,
          answers.school4
        )
      );
    }

    idCount++;

    if (answers.paygrade5 === "Manager") {
      employees.push(
        new Manager(
          idCount,
          answers.paygrade5,
          answers.employee5,
          answers.email5,
          answers.officeNum5
        )
      );
    } else if (answers.paygrade5 === "Engineer") {
      employees.push(
        new Engineer(
          idCount,
          answers.paygrade5,
          answers.employee5,
          answers.email5,
          answers.gitHub5
        )
      );
    } else if (answers.paygrade5 === "Intern") {
      employees.push(
        new Intern(
          idCount,
          answers.paygrade5,
          answers.employee5,
          answers.email5,
          answers.school5
        )
      );
    }

    console.log("puppies");

  })
  .then(() => {
    
    gencards = beginningHTML;
    for (var i = 0; i < employees.length; i++) {
      console.log(
        "id: " + employees[i].getID() + " Name: " + employees[i].getName()
      );
      if (employees[i].getPaygrade() == "Manager") {
        gencards += `
            <div class="card">
                <div class="name_tag">
                    <h2>Name: ${employees[i].getName()}</h2>
                    <h2>Role: ${employees[i].getPaygrade()}</h2>
                </div>
                <ul>
                    <li>ID: ${employees[i].getID()}</li>
                    <li>Email: ${employees[i].getEmail()}</li>
                    <li>Office Number: ${employees[i].getOfficeNum()}</li>
                </ul>
            </div>`;
      } else if (employees[i].getPaygrade() == "Engineer") {
        gencards += `
                <div class="card">
                    <div class="name_tag">
                        <h2>Name: ${employees[i].getName()}</h2>
                        <h2>Role: ${employees[i].getPaygrade()}</h2>
                    </div>
                    <ul>
                        <li>ID: ${employees[i].getID()}</li>
                        <li>Email: ${employees[i].getEmail()}</li>
                        <li>Git Hub: ${employees[i].getGitHub()}</li>
                    </ul>
                </div>`;
      } else {
        gencards += `
                <div class="card">
                    <div class="name_tag">
                        <h2>Name: ${employees[i].getName()}</h2>
                        <h2>Role: ${employees[i].getPaygrade()}</h2>
                    </div>
                    <ul>
                        <li>ID: ${employees[i].getID()}</li>
                        <li>Email: ${employees[i].getEmail()}</li>
                        <li>School: ${employees[i].getEducation()}</li>
                    </ul>
                </div>`;
      }
    }
    gencards += endHTML;
    console.log(gencards);
  })
  .then(() =>  fs.writeFileSync("index.html", gencards))
  .then(() => console.log("finished"))
  ;
}


const init = () => {
  gatherEmployees();
};

init();
