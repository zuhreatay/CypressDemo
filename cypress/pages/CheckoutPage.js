class CheckoutPage {
  fillInformation(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
  }

  clickContinue() {
    cy.get('[data-test="continue"]').click();
  }
}
export default CheckoutPage;
