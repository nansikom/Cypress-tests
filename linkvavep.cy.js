
it('register user and check navlink', () => {
//regisers a user by putting in there email and  password and clicks registers checks if login link is visible
  cy.visit('http://localhost:3000')
  cy.registeruser("nansikom@ore.edu", "Mimi@123");
  
})
