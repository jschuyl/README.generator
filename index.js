const inquirer = require("inquirer");
const generateMarkdown = require("./assets/generateMarkdown.js");
const { writeFile } = require("fs").promises;

answerArray = []

const questions = [
        {
            type: "input",
            message: "What username is your repo attatched to? Please do not include the @ symbol",
            name: "github",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log ("Please enter a Github username");
                } else {
                    return true;
                }
            } 
        },
        {
            type: "input",
            message: "What is the name of your repo?",
            name: "title",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a repository name");
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "Hit me with a short explanation of your project",
            name: "synopsis",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Well it has to do something, what does it do?")
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "Whats your email?",
            name: "email",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter an answer")
                } else {
                    return true;
                }
            } 
        },
        {
            type: "input",
            message: "How do you install and run your project?",
            name: "install",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter an answer")
                } else {
                    return true;
                }
            } 
        },
        {
            type: "input",
            message: "How would you like others to contribute to this project?",
            name: "helpPls"
        },
        {
            type: "list",
            message: "please select which license your project uses",
            name: "license",
            choices: ["GNU GPLv3 License", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "Unlicense", "None"]

        }
    ]

function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        return console.log(err)
    });
    console.log("README generated")
}

async function init() {
   inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile("README.md", generateMarkdown(response))
    })
    .then(()=>console.log("file generated"))
    .catch((err) => console.log(err))
}
init();
