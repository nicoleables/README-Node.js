// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like to title your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What description would you like to put',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What What are the installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the guidlines',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the test instrauctions',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license would you like to use for your project',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],         
    },
    {
        type: 'input',
        message: 'What is your github username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName, data);
console.log(`${fileName} has been created`);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        const readmeContent = generateMarkdown(userAnswers); 
        writeToFile('README.md', readmeContent); 
    });
    
}
// Function call to initialize app
init();