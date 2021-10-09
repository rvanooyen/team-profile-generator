const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, githubName) {
        super(name, id, email, role);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.githubName = githubName;
    };

    getGithubName() {
        let githubName = '';
        githubName = this.githubName;
        return githubName;
    };    
};

module.exports = Engineer;