const inquirer = require('inquirer');
const fs = require('fs');

function gatherEmployees() {
var another = true;
var idCount = 0;

    while (another) {
        idCount++;

        const promptUser = () => {
            return inquirer.prompt([
                {
                    type: "list",
                    name: "paygrade",
                    message: "What paygrade is the employee?",
                    choices: ["Manager", "Emgineer", "Intern"],

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
                }
            ]);
        };

        if (paygrade === "Manager") {
            const mikey = new Manager(id, employee, email, officeNum);
        }
        const makeObj = ({employee, paygrade, email}) => {

        }

        // const promptUser2 = () => {
        //     return inquirer.prompt([
        //         {
        //             type: "list",
        //             name: "again",
        //             message: "another employee?"
        //         }
        //     ]);
        // };
    }
}
