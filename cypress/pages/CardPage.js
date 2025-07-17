
class CartPage {
  clickCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
}
export default CartPage;
import InventoryPage from '../pages/inventoryPage';