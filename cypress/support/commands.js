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

import LoginPage  from '../pages/LoginPage';



import 'cypress-xpath';

Cypress.Commands.add('loginWithCredentials', (role) => {
    const LoginPage = new LoginPage();
    cy.fixture("credentials").then((credentials) => {

        const baseUrl = 'https://www.saucedemo.com/';
        
        const username = credentials[role].username;
        const password = credentials[role].password;
        const roleCredentials = credentials[role];

        if (roleCredentials) {
            const LoginPage = new LoginPage();
            cy.visit(baseUrl);
            cy.get(LoginPage.usernameInput).type(username);
            cy.get(LoginPage.passwordInput).type(password);
            cy.get(LoginPage.loginButton).click();
        } else {
            throw new Error(`Role ${role} not found in credentials`);
        }
    });
})


