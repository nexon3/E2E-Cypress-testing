describe('Product Details', () => {
    it('Zweryfikuj PDP', () => {
      cy.visit('listing?string=Laptop');
      cy.get('[data-role="itemsContainer"]').first().click(); // Kliknięcie pierwszego produktu
      cy.url().should('include', '/oferta/'); // URL szczegółów
      cy.get('[data-role="product-price"]').should('exist'); // Obecność ceny
    });
  });