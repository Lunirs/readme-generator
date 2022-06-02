// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
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
    name: "contributing",
    message:
      "Please specify any guidelines for possible contributors to follow.",
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
  {
    type: "input",
    name: "readmeTitle",
    message: "Please name your readme file (exclude the .md)",
  },
];

// Function to write README file
const writeToFile = (fileName, data) =>
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err
      ? console.log(err)
      : console.log("You have successfully generated your readme file.")
  );

// Function to initialize app
const init = () => {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(`${answers.readmeTitle}.md`, answers);
  });
};

// Function call to initialize app
init();
