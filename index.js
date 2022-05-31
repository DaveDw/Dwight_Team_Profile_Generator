const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
console.log("here");

var another = true;
var idCount = 0;
var employees = [];


function gatherEmployees() {
    while (another) {
        another = !another;
        const promptUser = () => {
            return inquirer.prompt([
                {
                    type: "list",
                    name: "paygrade",
                    message: "What paygrade is the employee?",
                    choices: ["Manager", "Emgineer", "Intern"]

                },
                {
                    when(answers) {
                        return answers.paygrade === "Manager"
                    },
                    type: "input",
                    name: "officeNum",
                    message: "What is their office Number? "
                },
                {
                    when(answers) {
                        return answers.paygrade === "Engineer"
                    },
                    type: "input",
                    name: "gitHub",
                    message: "What is their GitHub profile? "
                },
                {
                    when(answers) {
                        return answers.paygrade === "Intern"
                    },
                    type: "input",
                    name: "school",
                    message: "What school did they attend? "
                },
                {
                    type: "input",
                    name: "employee",
                    message: "What's their name?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What's their email?"
                },
                {
                    type: "list",
                    name: "more",
                    message: "Will there be another employee? ",
                    choices: ["yes", "no"]
                }

            ]);
        }
        promptUser()
            .then((answers) => {
                idCount++;
                console.log("end");
                if (answers.paygrade === "Manager") {
                    employees.push(new Manager(idCount, answers.employee, answers.email, answers.officeNum));
                } else if (paygrade === "Engineer") {
                    employees.push(new Engineer(idCount, answers.employee, answers.email, answers.gitHub));
                } else if (paygrade === "Intern") {
                    employees.push(new Intern(idCount, answers.employee, answers.email, answers.school));
                }

                console.log("puppies");

                if (answers.more === "no") {
                    another = !another;

                }

                for (var i = 0; i < employees.length; i++) {
                    console.log("id: " + employees[i].getID() + " Name: " + employees[i].getName());
                }
            });

    }

}




const init = () => {
    gatherEmployees();

}

init();