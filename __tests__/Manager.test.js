const Manager = require('../lib/Manager');

test('gets manager office number', () => {
    const manager = new Manager ('Robert', 1, 'this.email', 'manager', '1B');

    expect(manager.officeNumber).toBe('1B');        
});

test("gets manager's office number from object", () => {
    const manager = new Manager ('Robert', 1, 'this.email', 'manager', '1B');

    expect(manager.getOfficeNumber()).toBe('1B');
});

