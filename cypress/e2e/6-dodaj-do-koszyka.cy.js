describe('Add to Cart', () => {
  it('Add a product to the cart', () => {
    cy.visit('/listing?string=Laptop');
    cy.get('[data-role="product-container"]').first().click(); // Kliknij produkt
    cy.get('[data-role="add-to-cart"]').click(); // Dodaj do koszyka
    cy.get('[data-role="cart-count"]').should('contain', '1'); // Weryfikacja koszyka
  });
});