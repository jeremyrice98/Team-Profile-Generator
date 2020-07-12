const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Jaxon Rice', '258', 'jaxonrice@gmail.com', 'jaxonrice');

    expect(engineer.name).toBe('Jaxon Rice');
    expect(engineer.id).toBe('258');
    expect(engineer.email).toBe('jaxonrice@gmail.com');
    expect(engineer.github).toBe('jaxonrice')
})

test('get engineers github username', () => {
    const engineer = new Engineer('Jaxon Rice', '258', 'jaxonrice@gmail.com', 'jaxonrice');
usie
    expect(engineer.github).toEqual(expect.stringContaining('jaxonrice'));
}) 

test('gets engineers role', () => {
    const engineer = new Engineer('Jaxon Rice', '789', 'susieque@gmail.com', 'jaxonrice');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})