class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName() {
        let name = '';
        name = this.name;
        return name;
    };

    getId() {
        let id = 0;
        id = this.id;
        return id; 
    };

    getEmail() {
        let email = '';
        email = this.email;
        return email;
    }

    getRole() {
        let role = '';
        role = this.role;
        return role;
    }

    setRole(role) {
        this.role = role;
        return this.role;
    }
};

module.exports = Employee;