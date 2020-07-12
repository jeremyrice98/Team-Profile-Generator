const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Jacob Rice', '456', 'royrice@gmail.com', 'Harvard University');

    expect(intern.name).toBe('Jacob Rice');
    expect(intern.id).toBe('456');
    expect(intern.email).toBe('royrice@gmail.com');
    expect(intern.school).toBe('Harvard University')
})

test('get interns school', () => {
    const intern = new Intern('Jacob Rice', '456', 'royrice@gmail.com', 'Harvard University');

    expect(intern.school).toEqual(expect.stringContaining('Harvard University'));
}) 

test('get inters role', () => {
    const intern = new Intern('Jacob Rice', '456', 'royrice@gmail.com', 'Harvard University');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));