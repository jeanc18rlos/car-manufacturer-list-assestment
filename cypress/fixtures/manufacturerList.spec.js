describe('Manufacturing List Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads manufacturers', () => {
    cy.get('.assestment-table-cell').should('have.length.at.least', 1);
  });



  it('loads more manufacturers on pagination click', () => {
    cy.get('button')
      .contains('Load More')
      .click();

    cy.get('.assestment-table-cell').should('have.length.at.least', 1);
  });

  it('navigates to details page on button click', () => {
      cy.get('button')
        .contains('Details')
        .first()
        .click();
  
      cy.url().should('include', '/details');
    });
});
