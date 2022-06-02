// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) =>
  license === "None"
    ? ""
    : `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) =>
  license === "None" ? "" : `6. [License](#license)`;

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) =>
  license === "None"
    ? ""
    : `## License
Copyright © ${license}. All rights reserved.       
This is licensed under the ${license} license.`;

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
