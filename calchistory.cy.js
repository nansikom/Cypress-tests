it('Shows the history of all calculations', () => {
  //cy.visit('/app')
  cy.visit('http://localhost:3000')
  cy.registeruser("nansikom@ore.edu", "Mimi@123");
  cy.successfulregistration("nansikom@ore.edu", "Mimi@123");
  cy.simplecalc([3,3],["×"])
  cy.simplecalc([3,3,5],["×","+"])
  cy.simplecalcs([3,33],["×"])
  cy.findByRole("link", { name: "History" }).should("exist")
  cy.findByRole("link", {name: "History"}).click();
  cy.contains("III × III = VIIII")
  cy.contains("III × III + V = XIIII")
  cy.contains("III × XXXIII = LXXXXVIIII")
 
})