class LoginPage {

    usernameInput = '#user-name';
    passwordInput = '#password';
    loginButton = '#login-button';

    visit(){
        cy.visit('https://www.saucedemo.com/');
    }

    fillUsername(username) {
       return cy.get(this.usernameInput, {timout: 1000}).should('be.visible').type(username);
    }   

    fillPassword(password ){
      return  cy.get(this.passwordInput).should('be.visible').type(password);
    }
    clickLoginButton() {
       return cy.get(this.loginButton).click();
    }


}

export default LoginPage;