class LoginPage {

    usernameInput = '#user-name';
    passwordInput = '#password';
    loginButton = '#login-button';

    visit() {
        cy.visit('https://www.saucedemo.com/');
        return this;
    }
    fillUsername(username) {
        cy.get(this.usernameInput).type(username);
        return this;
    }
    assertVisited() {
        cy.url().should('include', 'saucedemo');
        return this;
    }
    fillPassword(password) {
        cy.get(this.passwordInput).type(password);
        return this;
    }
    clickLoginButton() {
        cy.get(this.loginButton).click();
        return this;
    }
}


export default LoginPage;