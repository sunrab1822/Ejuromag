describe('navBarTesztje', () => {
  beforeEach(() => {
      cy.visit('http://localhost:5173')
  })


  it('8 nav-link kell lennie', () => {
    cy.get('.nav-link').its('length').should('eq', 8)
  })


  it('át kell mennie az oldalakra', () => {
      cy.get('.nav-link').contains('Laptopok').click()
      cy.url().should('include','/laptopok')
      cy.get('.nav-link').contains('Gamer számítógépek').click()
      cy.url().should('include','/gamer_szamitogepek')
      cy.get('.nav-link').contains('Irodai számítógépek').click()
      cy.url().should('include','/irodai_szamitogepek')
      cy.get('.nav-link').contains('Konzolok').click()
      cy.url().should('include','/konzolok')
      cy.get('.nav-link').contains('Telefonok').click()
      cy.url().should('include','/telefonok')
      cy.get('.nav-link').contains('Tabletek').click()
      cy.url().should('include','/tabletek')
  })


  it('A képre kattintva vissza kell vinnie a főoldalra', () => {
      cy.get('[data-cy="logo-img"]').click()
      cy.url().should('eq', "http://localhost:5173/")
  })


})