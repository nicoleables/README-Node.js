// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'APACHE 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)',
    'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'None': ''
};
return licenseBadges[license] || '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'APACHE 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3': 'https://opensource.org/licenses/BSD-3-Clause',
    'None': ''
  };

  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseTexts = {
    'MIT': ` ## License  This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)`,
    'APACHE 2.0': ` ## License  This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). ![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`,
    'GPL 3.0': ` ## License  This project is licensed under the [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0). ![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)`,
    'BSD 3': ` ## License  This project is licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause). ![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`,
    'None': ''
  };

  return licenseTexts[license] || '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})
Email: Please feel free to email me at <u>${data.email}</u> with any additional questions
`;
}

function renderLicenseSection(license) {
  // Define the license text for each license type
  const licenseTexts = {
      'MIT': `
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
`,
      'APACHE 2.0': `
This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
`,
      'GPL 3.0': `
This project is licensed under the [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0).
`,
      'BSD 3': `
This project is licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).
`,
      'None': '' // Return an empty string for no license
  };

  // Return the corresponding license section based on the license type
  return licenseTexts[license] || '';
}

module.exports = generateMarkdown;
