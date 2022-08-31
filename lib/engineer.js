const Employee = require('./employee');

class Engineer extends Employee {
    constructor(id, paygrade, name, email, gitHub) {
        super (id, paygrade, name, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }

}

module.exports = Engineer;