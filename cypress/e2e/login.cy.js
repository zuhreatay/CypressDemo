import "../support/commands";
import  LoginPage from '../pages/LoginPage';




describe('Login Tests', () => {

   beforeEach(() => {
    cy.loginWithCredentials("standard_user");
    cy.viewport(1366, 768);
  
  });

  it('should log in successfully', () => {
   const loginPage = new LoginPage();
    cy.get(loginPage.usernameInput).should('be.visible');
    cy.get(loginPage.passwordInput).should('be.visible');
    cy.get(loginPage.loginButton).should('be.visible');
    cy.url().should('include', 'inventory.html');
   
  })

  // it ('should login successfully', ()=> {
  //  const loginPage = new LoginPage();
  //   cy.viewport(1366, 768);
  //   loginPage.visit();
  //   loginPage.fillUsername('standard_user')
  //     .fillPassword('secret_sauce')
  //     .clickLoginButton() 
  //     .assertVisited();
      
  // })
  // command to login with credentials

  
})