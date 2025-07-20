class ProductsPage {

    addToCart(productName) {
        cy.contains(productName).parents('.inventory_item').find('button').click();
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }

    clickCheckout() {
        cy.get('[data-test="checkout"]').click();
    }


    fillInformation(firstName, lastName, postalCode) {

        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
    }

    clickContinue() {
        cy.get('[data-test="continue"]').click();
    }
    clickFinish() {
        cy.get('[data-test="finish"]').click();
    }
    verifySuccess() {
        cy.get('.complete-header').should('contain', 'Thank you for your order!');
    }




}



export default ProductsPage;
















