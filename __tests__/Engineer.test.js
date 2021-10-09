const Engineer = require('../lib/Engineer');

test('gets engineer github name', () => {
    const engineer = new Engineer ('Robert', 1, 'this.email', 'manager', 'rvanooyen');

    expect(engineer.githubName).toBe('rvanooyen');        
});

test("gets manager's github name from object", () => {
    const engineer = new Engineer ('Robert', 1, 'this.email', 'manager', 'rvanooyen');

    expect(engineer.getGithubName()).toBe('rvanooyen');
});
