it('Successfully registers a user', () => {
  //cy.visit('/app')
  //successfuly regisers a user logs in and shows the three nav links when its a succefful registration
  cy.visit('http://localhost:3000')
  cy.registeruser("nansikom@ore.edu", "Mimi@123");
  cy.successfulregistration("nansikom@ore.edu", "Mimi@123")
  

})