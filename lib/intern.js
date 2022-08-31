const Employee = require('./employee');

class Intern extends Employee {
    constructor(id, paygrade, name, email, school) {
        super (id, paygrade, name, email);
        this.school = school;
    }

    getEducation() {
        return this.school;
    }
}

module.exports = Intern;