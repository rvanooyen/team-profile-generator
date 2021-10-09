const Employee = require('../lib/Employee');

test('gets employee object', () => {
    const employee = new Employee('Robert', 1, 'this.email', 'employee');

    expect(employee.name).toBe('Robert');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('employee');    
});

test("gets employee's name from employee object", () => {
    const employee = new Employee('Robert', 1, 'this.email', 'employee');

    expect(employee.getName()).toBe('Robert');
});

test("gets employee's Id from employee object", () => {
    const employee = new Employee('Robert', 1, 'this.email', 'employee');

    expect(employee.getId()).toBe(1);
});

test("get employee's email from employee object", () => {
    const employee = new Employee('Robert', 1, 'this.email', 'employee');

    expect(employee.getEmail()).toBe('this.email');
});

test("get employee's role from employee object", () => {
    const employee = new Employee('Robert', 1, 'this.email', 'employee');

    expect(employee.getRole()).toBe('employee');
});

test("set passed value into employee's role", () => {
    const employee = new Employee('Robert', 1, 'this.email', 'employee');

    expect(employee.setRole('manager')).toBe(employee.role);
})

