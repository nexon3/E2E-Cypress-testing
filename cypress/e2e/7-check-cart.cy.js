describe('Funkcjonalność koszyka', () => {
  it('Weryfikacja', () => {
    cy.visit('/koszyk');
    cy.get('[data-role="cart-item"]').should('exist'); // Weryfikacja obecności produktu w koszyku
  });
});