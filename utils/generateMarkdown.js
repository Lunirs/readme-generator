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
This is licensed under the ${license} license.`;

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({
  name,
  title,
  description,
  license,
  installation,
  usage,
  contributors,
  tests,
  email,
  github,
}) =>
  `# ${title}

  ${renderLicenseBadge(license)}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Questions](#questions)
  ${renderLicenseLink(license)}
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Contributing
  
  ${contributors}
  
  ## Tests
  
  ${tests}
  
  ## Questions
  
  ${email}
  ${github}
  
  ${renderLicenseSection(license)}

  ## Credits

  Copyright © ${name}. All rights reserved.   

`;

module.exports = generateMarkdown;
