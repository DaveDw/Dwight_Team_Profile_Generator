const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("constructor", () => {

        it ("should set 'Mikey' as the name when given 'Mikey'", () => {
            const id = 2;
            const name = "Mikey";
            const email = "dd@fake.email";
            const M = new Employee(id, name, email);
            expect (M.id).toEqual(id);
        });

        it ("should set '2' as the id when given '2'", () => {
            const id = 2;
            const name = "Mikey";
            const email = "dd@fake.email";
            const M = new Employee(id, name, email);
            expect (M.name).toEqual(name);
        });
        
        it ("should set 'dd@fake.email' as the email when given 'dd@fake.email'", () => {
            const id = 2;
            const name = "Mikey";
            const email = "dd@fake.email";
            const M = new Employee(id, name, email);
            expect (M.email).toEqual(email);
        });
    })
});