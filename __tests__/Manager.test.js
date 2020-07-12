const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Lindsey Rice', '999', 'lrice@gmail.com', '123-456-7890');

    expect(manager.name).toBe('Lindsey Rice');
    expect(manager.id).toBe('999');
    expect(manager.email).toBe('lrice@gmail.com');
    expect(manager.officeNumber).toBe('123-456-7890')
})

test('gets employees role', () => {
    const manager = new Manager('Lindsey Rice', '999', 'lrice@gmail.com', '123-456-7890');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})