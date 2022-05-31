const Employee = require('./employee');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super (id, name, email);
        this.school = school;
    }

    getEducation() {
        return this.school;
    }
}

module.exports = Intern;