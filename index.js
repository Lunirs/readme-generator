// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your full name?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project about?",
  },
  {
    type: "input",
    name: "installation",
    message: "How would a user install this program?",
  },
  {
    type: "input",
    name: "usage",
    message: "How would a user use this program?",
  },
  {
    type: "input",
    name: "contributors",
    message:
      "Name any contributors. If there are none, please specify your name only.",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose the license you would want the project to have",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "None"],
  },
  {
    type: "input",
    name: "tests",
    message: "Please specify how you would run a test for this application",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
