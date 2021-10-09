const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        let officeNumber = '';
        officeNumber = this.officeNumber;
        return officeNumber;
    };    
};

module.exports = Manager;