

class InventoryPage {
    
  addToCart(productName) {
    cy.contains(productName).parents('.inventory_item').find('button').click();
  }

  goToCart() {
    cy.get('.shopping_cart_link').click();
  }
}
export default InventoryPage;
