class Employee {
    constructor(id, paygrade, name, email){
        this.id = id;
        this.paygrade = paygrade;
        this.name = name;
        this.email = email;
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    
    getPaygrade() {
        return this.paygrade;
    }
}

module.exports = Employee;