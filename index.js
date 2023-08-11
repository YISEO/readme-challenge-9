// Global variables
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a brief description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?.",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage"
    },
    {
        type: "list",
        message: "Choose a license for your project",
        choices: ["Apache", "MIT", "Artistic", "BSD", "GPL"],
        name: "license"
    },
    {
        type: "input",
        message: "Are there any guidelines or information for users who want to contribute to your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "How can users run tests on your project?",
        name: "tests"
    },
    {   
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {   
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];


// Write a README file using file system
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("README.md file generated successfully!");
        }
    });
}


// Function call to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        const markdownContent = generateMarkdown(response);
        writeToFile("README.md", markdownContent)
    })
}
init();