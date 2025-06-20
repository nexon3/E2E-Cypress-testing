describe('User Login', () => {
  it('Login na konto użytkownika', () => {
    cy.visit('/');
    cy.get('[data-role="login-button"]').click(); // Przycisk logowania
    cy.get('[name="username"]').type('your-email@example.com');
    cy.get('[name="password"]').type('your-password');
    cy.get('[data-role="login-submit"]').click();
    cy.get('[data-role="user-name"]').should('contain', 'Twoje Imię'); // Weryfikacja imienia po zalogowaniu
  });
});