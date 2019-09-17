describe('LoginForm', () => {
  it('Updates correctly', async () => {
    cy.visit('http://localhost:3000/login');

    cy.get('.name')
      .type('esveo@react.com')
      .should('have.value', 'esveo@react.com');
  });
});
