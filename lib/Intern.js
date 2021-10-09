const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
    };

    getSchool() {
        let school = '';
        school = this.school;
        return school;
    };    
};

module.exports = Intern;