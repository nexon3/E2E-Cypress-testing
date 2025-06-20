describe('Filtry wyszukiwania', () => {
    it('Dodaj filtr cenowy i sprawdz wynik', () => {
      cy.visit('listing?string=Laptop');
      cy.get('[data-role="price-range"]').within(() => {
        cy.get('[data-role="min-price"]').type('1000');
        cy.get('[data-role="max-price"]').type('2000');
        cy.get('[data-role="apply-price-filter"]').click();
      });
      cy.url().should('include', 'price.from=1000&price.to=2000'); // Sprawdzenie URL filtrowanego
    });
  });