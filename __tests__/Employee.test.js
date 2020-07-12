const Employee = require('../lib/Employee')
 
test('creates an employee object', () => {
   const employee = new Employee('Jeremy Rice', '123456', 'ricefamily1003@gmail.com');
 
   expect(employee.name).toBe('Jeremy Rice');
   expect(employee.id).toBe('123456');
   expect(employee.email).toBe('ricefamily1003@gmail.com');
})
 
test('gets employeee name', () => {
   const employee = new Employee('Jeremy Rice', '123456', 'ricefamily1003@gmail.com');
 
   expect(employee.getName()).toEqual(expect.stringContaining('Jeremy Rice'));
})
 
test('gets employeee id', () => {
   const employee = new Employee('Jeremy Rice', '123456', 'ricefamily1003@gmail.com')
 
   expect(employee.getId()).toEqual(expect.stringContaining('123456'))
})
 
test('gets employee email', () => {
   const employee = new Employee('Jeremy Rice', '123456', 'ricefamily1003@gmail.com')
 
   expect(employee.getEmail()).toEqual(expect.stringContaining('ricefamily1003@gmail.com'));
})
 
test("gets employee's role", () => {
   const employee = new Employee('Jeremy Rice', '123456', 'ricefamily1003@gmail.com');
 
   expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});
