describe('Wyszukiwarka', () => {
    it('Wyszukaj produkt i zweryfikuj wynik', () => {
      cy.visit('/');
      cy.get('[data-role="search-input"]').type('Laptop{enter}'); // Wprowadzenie hasła + enter
      cy.url().should('include', 'listing?string=Laptop'); // Weryfikacja URL
      cy.get('[data-role="itemsContainer"]').should('exist'); // Potwierdzenie wyników wyszukiwania
    });
  });