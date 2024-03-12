// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require("@testing-library/cypress/add-commands")
Cypress.Commands.add('simplecalcs', function(numbers, keys) {
    for (let i =0; i < numbers.length; i++) {
        String(numbers[i]).split('').forEach(num => {
        cy.findByRole("button", {name: num }).should('be.visible').click();
        });
        if (keys[i]){
            cy.findByRole("button", { name: keys[i]}).click();
           }
         }
        cy.findByRole("button", { name: "="}).click();
     });
Cypress.Commands.add('simplecalc', function(numbers, keys) {
for (let i =0; i < numbers.length; i++) {
    cy.findByRole("button", {name: numbers[i].toString() }).click();
    if (keys[i]){
        cy.findByRole("button", { name: keys[i]}).click();
        }
        }
    cy.findByRole("button", { name: "="}).click();
    });

 Cypress.Commands.add('emailinput', function(email){
//     //cy.findByText(text)
     cy.findByTestId('email-input').type(email)
    
 });
Cypress.Commands.add('registeruser', function(email, password){
    cy.findByRole("link", { name: "Register" }).click();
    cy.url().should('include', '/register')
    cy.findByRole( "textbox",{name: /Email/i, timeout: 10000}).type(email)
    cy.findByRole( "textbox",{name: /Password/i, timeout: 10000}).type(password)
    cy.findByRole("button", {name: "Register"}).click();
    cy.url().should('include', 'http://localhost:3000')
    cy.findByRole("link", { name: "Login" }).should("exist")
});
Cypress.Commands.add('successfulregistration', function(email, password){
    cy.findByRole("link", {name: "Login"}).click();
    cy.findByRole( "textbox",{name: /Email/i}).type(email)
    cy.get("#password").type(password)
    cy.findByRole("button", {name: "Login"}).click();
    //If successful we should see three links on the homepage
    cy.url().should('include', 'http://localhost:3000')
    cy.findByRole("link", { name: "Logout" }).should("exist")
    cy.findByRole("link", { name: "History" }).should("exist")
    cy.findByRole("link", { name: "Unregister"}).should("exist")

});