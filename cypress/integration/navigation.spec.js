/// <reference types="cypress" />

describe('Navigation', () => {
  it('can navigate using the navbar', () => {
    cy.visit('/');

    cy.getWithDataName('page__home');

    cy.getWithDataName('navbar__your-benefits').click();
    cy.getWithDataName('page__your-benefits');

    cy.getWithDataName('navbar__pensions-in-payment').click();
    cy.getWithDataName('page__pensions-in-payment');

    cy.getWithDataName('navbar__document-library').click();
    cy.getWithDataName('page__document-library');

    cy.getWithDataName('navbar__contacts').click();
    cy.getWithDataName('page__contacts');
  });
});
