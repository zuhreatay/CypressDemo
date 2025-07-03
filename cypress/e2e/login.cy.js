import "../support/commands";
import LoginPage from '../pages/loginPage';
import { faker } from '@faker-js/faker';





describe('Login Tests', () => {

  beforeEach(() => {
    cy.loginWithCredentials("standard_user");
  })

  it('should log in successfully', () => {
    //US-001: Kullanici login olabilmeli
    // Test Senaryosu: TC_01
    // 1. Kullanici web Sitesine gider ===> Happy path 
    // 2. Username gir
    // 4. Password gir
    // 5. Login butonuna tıkla
    // 6. URL kontrolü
    // 7. Başlık kontrolü


    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLoginButton();
    cy.url().should('include', 'inventory.html');
    cy.title().should('include', 'Swag Labs');


  })

  it('user should nott be able to login with wrong credentials', () => {
    //US-002: Kullanici yanlis bilgilerle login olmamali
    // Test Senaryosu: TC_01
    // 1.kullanici web sitesine gider
    // 2. Usernami gir
    // 3.Yanlis password gir
    // 4. Login butonuna tıkla
    // 5. URL kontrolü
    // 6. Hata mesajı kontrolü
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('wrong_password');
    loginPage.clickLoginButton();
    cy.url().should('include', 'https://www.saucedemo.com/');
    cy.get('.error-message-container').should('be.visible');
  })

  it('user should nott be able to login with wrong credentials', () => {
    //US-002: Kullanici yanlis bilgilerle login olmamali
    // Test Senaryosu: TC_02
    // 1.kullanici web sitesine gider
    // 2.Yanlis username i gir
    // 3.password gir
    // 4. Login butonuna tıkla
    // 5. URL kontrolü
    // 6. Hata mesajı kontrolü
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.fillUsername('wrong_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLoginButton();
    cy.url().should('include', 'https://www.saucedemo.com/');
    cy.get('.error-message-container').should('be.visible');

  })



  it('should display error message for invalid credentials', () => {
    //US-002: Kullanici yanlis bilgilerle login olmamali
    // Test Senaryosu: TC_03
    //1.kullanici web sitesine gider
    // 2. Yanlis Usernami gir
    // 3.Yanlis password gir
    // 4. Login butonuna tıkla
    // 5.Url kontrolu
    // 6.Hata mesajini kontrol et

    //cy.loginWithCredentials("standard_user");
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

  it('user should nott be able to login with wrong credentials', () => {
    //US-002: Kullanici yanlis bilgilerle login olmamali
    // Test Senaryosu: TC_04
    // 1.kullanici web sitesine gider
    // 2.bos username i gir
    // 3.bos password gir
    // 4. Login butonuna tıkla
    // 5. URL kontrolü
    // 6. Hata mesajı kontrolü
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.fillUsername();
    loginPage.fillPassword();
    loginPage.clickLoginButton();
    cy.url().should('include', 'https://www.saucedemo.com/');
    cy.get('.error-message-container').should('be.visible');

  })

})