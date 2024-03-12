it('creates a simple normal calculation', () => {
    cy.wait(1000)
   // cy.visit('/app')
    cy.visit('http://localhost:3000')
    cy.simplecalc([1,2,5],["+","+"])
    cy.findByText("VIII").should ("exist")
  })
  it('convert to modern', () => {
    cy.wait(1000)
    //cy.visit('/app')
    cy.visit('http://localhost:3000')
    cy.simplecalc([3,3],["×"])
    cy.findByRole("button", {name: "mdrn"}).click();
    cy.findByText("IX").should ("exist")
  })
  it('convert to modern difficult conversion', () => {
    cy.wait(1000)
    //cy.visit('/app')
    cy.visit('http://localhost:3000')
    cy.simplecalc([3,3,5],["×","+"])
    cy.findByRole("button", {name: "mdrn"}).click();
    cy.findByText("XIV").should ("exist")
  })
  it('convert to modern difficult conversion', () => {
    cy.wait(1000)
   // cy.visit('/app')
    cy.visit('http://localhost:3000')
    cy.simplecalcs([3,33],["×"])
    cy.findByRole("button", {name: "mdrn"}).click();
    cy.findByText("XCIX").should ("exist")
  })
 