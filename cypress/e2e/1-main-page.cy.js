describe('Test na stronie glownej', () => {
    it('Sprawdza, czy elementy glownej strony sa widoczne', () => {
      cy.visit('/');
      cy.get('[data-role="search-input"]').should('be.visible'); // Pole wyszukiwarki
      cy.get('[data-role="header-primary-bar"]').should('be.visible'); // gorna czesc strony zawierajaca loga
      cy.get('[data-role="header-dropdown"]').should('be.visible'); // Menu kategorii
    });
  });