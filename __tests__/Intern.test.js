const Intern = require('../lib/Intern');

test('gets intern school name', () => {
    const intern = new Intern('Robert', 1, 'this.email', 'intern', 'CSU');

    expect(intern.school).toBe('CSU');        
});

test("gets manager's github name from object", () => {
    const intern = new Intern('Robert', 1, 'this.email', 'intern', 'CSU');

    expect(intern.getSchool()).toBe('CSU');
});