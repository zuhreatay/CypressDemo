import "../support/commands";
import LoginPage from '../pages/loginPage';
import { faker } from '@faker-js/faker';





describe('Login Tests', () => {

 beforeEach(() => {
      cy.loginWithCredentials("standard_user");
 })

  it('should log in successfully', () => {
  
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLoginButton();
    cy.url().should('include', 'inventory.html');

  })

  it('should display error message for invalid credentials', () => {
    cy.loginWithCredentials("standard_user");
    const loginPage = new LoginPage();
    const fakeUsername = faker.internet.userName();
    const fakePassword = faker.internet.password();

    cy.log("Generated Username:", fakeUsername);
    cy.log("Generated Password:", fakePassword);

    loginPage.visit();
    loginPage.fillUsername(fakeUsername);
    loginPage.fillPassword(fakePassword);
    loginPage.clickLoginButton();

    cy.get('.error-message-container').should('be.visible');
    cy.get('.error-message-container').should('contain', 'Username and password do not match');
  });


})