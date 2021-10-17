const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./utils/generate-site');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const employeeArr = [];

const promptManager = () => {
    const manager = new Manager;

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the manager's name. (Required)",
            validate: nameInput => {
                if (nameInput) {                    
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's id number. (Required)",
            validate: idInput => {
                if (idInput) {                    
                    return true;
                } else {
                    console.log("Please enter the manager's id number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address. (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email address!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Please select the employee's role.",
            choices: ['Manager'],
            default: 'Manager'            
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the employee's office number. (Required)",
            validate: officeInput => {
                if (officeInput) {
                    employeeArr.push(this);
                    console.log(employeeArr);                
                    return true;
                } else {
                    console.log("Please enter the employee's office number!");
                    return false;
                }
            }
        }
    ]);    
};

const promptEmployee = (employeeData) => {
    let employee;
        
    if (!employeeData) {
        employeeData = [];
    } else {
        employee = new Employee(employeeData.name, employeeData.id, employeeData.email, employeeData.role);
    }
    
    console.log(employeeData);   

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
            choices: ['Engineer', 'Intern']                     
        }
        ]).then(employeeData => {
            employee.setRole(employeeData.role);
            console.log(`
            =====================
            Add role specific data
            =====================
            `);
            switch (employee.role) {                
                case 'Engineer':
                    const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.role);
        
                    engineer.name = engineer.getName();
                    engineer.id = engineer.getId();
                    engineer.email = engineer.getEmail();
                    engineer.role = engineer.getRole();
        
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'githubName',
                            message: "Please enter the employee's github name. (Required)",
                            validate: githubInput => {
                                if (githubInput) {                                                                                        
                                    engineer.githubName = engineer.getGithubName();
                                    console.log(employeeData);
                                    employeeArr.push(githubInput);
                                    console.log(employeeArr);
                                    return true;
                                } else {
                                    console.log("Please enter the employee's github name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'confirm',
                            name: 'confirmNewEmployee',
                            message: 'Would you like to add another employee?',
                            default: false
                        }
                    ]).then(employeeData => {        
                        if (employeeData.confirmNewEmployee) {
                            return promptEmployee(employeeData);
                        } else {
                            return employeeData;
                        }        
                    });                               
                case 'Intern':
                    const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.role);
        
                    intern.name = intern.getName();
                    intern.id = intern.getId();
                    intern.email = intern.getEmail();
                    intern.role = intern.getRole();
        
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'school',
                            message: "Please enter the employee's school name. (Required)",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    intern.school = employeeData.school;
                                    employeeArr.push(intern);
                                    return true;
                                } else {
                                    console.log("Please enter the employee's school name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'confirm',
                            name: 'confirmNewEmployee',
                            message: 'Would you like to add another employee?',
                            default: false
                        }
                    ]).then(employeeData => {        
                        if (employeeData.confirmNewEmployee) {
                            return promptEmployee();
                        } else {
                            return employeeData;
                        }        
                    });                                                        
            }
        });
    }

promptManager()
    .then(promptEmployee)
    .then(employeeData => {
        return generatePage(employeeData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
