const fs = require("fs")
const inquirer = require("inquirer");

const formatPage = require("./assets/generateMarkdown.js")

const questions = async () => {
    const answers = await inquirer
        .prompt([
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
            name: "repo",
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
            message: "any special installation instructions?",
            name: "install"
        },
        {
            type: "list",
            message: "please select which license your project uses",
            name: "license",
            choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]

        }
    ])
}

function writeToFile(fileName, data) {
    const buildPage = formatPage(newStaffData);
    fs.writeFileSync(output, buildPage, (err) =>
    err ? console.error(err) : console.log("Page created")      
    )
}

async function init() {
    await questions()

    const isThisYourFinalAnswer = await inquirer
        .prompt([
            {
                type: "list",
                message: `You told me ${answers}, is this correct?`,
                choices:["Yes", "No"],
                name: "areWeDoneYet"
            }
        ])
    if (isThisYourFinalAnswer.areWeDoneYet === "Yes") {
        return writeToFile()
    } else {
        return init()
    }
}
init();
