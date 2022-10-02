const fs = require("fs")
const inquirer = require("inquirer")

inquirer
    prompt([
        {
            type: "input",
            message: "What username is your repo attatched to?",
            name: "github"
        },
        {
            input: "input",
            message: "What is the name of your repo?",
            name: "title"
        },
    ])