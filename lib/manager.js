const Employee = require('./employee');

class Manager extends Employee {
    constructor(id, paygrade, name, email, officeNum) {
        super (id, paygrade, name, email);
        this.officeNum = officeNum;
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;