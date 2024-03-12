it('Logs out a user and redirects to the homepage ', () => {
  //Logs out and redirects to the homepage with a login link for another user who wishes to login again
  cy.visit('http://localhost:3000')
  cy.registeruser("nansikom@ore.edu", "Mimi@123");
 cy.successfulregistration("nansikom@ore.edu", "Mimi@123")
  cy.url().should('include', 'http://localhost:3000')
  cy.findByRole("link", {name: "Logout"}).click();
  cy.findByRole("link", {name: "Login"}).click();
});