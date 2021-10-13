const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./utils/generate-site');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const employee = new Employee;

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

const promptRole = (employeeData) => {
    const employee = new Employee(employeeData.name, employeeData.id, employeeData.email, employeeData.role);

    if (!employeeData) {
        employeeData = [];
    }

    employee.name = employee.getName();
    employee.id = employee.getId();
    employee.email = employee.getEmail();
    employee.role = employee.getRole();

    console.log(employeeData);
    console.log(employee);

    console.log(`
    =====================
    Add role specific data
    =====================
    `);
    switch (employee.role) {
        case 'Manager':
            const manager = new Manager(employee.name, employee.id, employee.email, employee.role);

            manager.name = manager.getName();
            manager.id = manager.getId();
            manager.email = manager.getEmail();
            manager.role = manager.getRole();           

            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "Please enter the employee's office number. (Required)",
                    validate: officeInput => {
                        if (officeInput) {
                            return true;
                        } else {
                            console.log("Please enter the employee's office number!");
                            return false;
                        }
                }
            }]);
        case 'Engineer' :
            const engineer = new Engineer;

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
                            return true;
                        } else {
                            console.log("Please enter the employee's github name!");
                            return false;
                        }
                }
            }]);            
        case 'Intern' :
            const intern = new Intern;

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
                            return true;
                        } else {
                            console.log("Please enter the employee's school name!");
                            return false;
                        }
                }
            }]);
    }        
};

const promptNewEmployee = (employeeData) => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }]).then(employeeData => {        
            if (employeeData.confirmNewEmployee) {
                return promptEmployee();
            } else {
                return employeeData;
            }        
        });
};

promptEmployee()
    .then(promptRole)
    // .then(promptNewEmployee(employeeData))
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    .catch(err => {
        console.log(err);
    });
