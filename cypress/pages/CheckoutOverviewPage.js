class CheckoutOverviewPage {
  clickFinish() {
    cy.get('[data-test="finish"]').click();
  }

  verifySuccess() {
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
  }
}
export default CheckoutOverviewPage;
import InventoryPage from '../pages/inventoryPage';
import CartPage from '../pages/CardPage';