const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./utils/generate-site');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's id number. (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's id number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address. (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's email address!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Please select the employee's role.",
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]);    
};

promptEmployee();