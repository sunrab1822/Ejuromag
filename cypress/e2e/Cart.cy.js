describe('Kosár és rendelés tesztelése', () => {
    it('a termék a vásárlás gombra kattintva a kosárba kerül, majd megjelenik a képe és a neve', () => {
    cy.visit('http://localhost:5173/laptopok')
    cy.get('[data-cy="addToCart"]').first().click()
    cy.visit('http://localhost:5173/Kosar')
    cy.get('[data-cy="image"]').should('exist')
    cy.get('[data-cy="name"]').should('exist')
    }),
    it('megjelenik a termék összege', () => {
      cy.visit('http://localhost:5173/Kosar')
      cy.get(':nth-child(4) > .col-md-5').contains("Végösszeg:")})
    it('A kosár oldalon van darabszám', () => {
    cy.visit('http://localhost:5173/laptopok')
    cy.get('[data-cy="addToCart"]').first().click()
    cy.visit('http://localhost:5173/Kosar')
    cy.get('[data-cy="db"]').should('exist')
  }),
  it('van törlés gomb és hatására üres lesz a lista',() => {
  cy.visit('http://localhost:5173/laptopok')
  cy.get('[data-cy="addToCart"]').first().click()
  cy.visit('http://localhost:5173/Kosar')
  cy.get('[data-cy="remove"]').first().click()
  cy.get('[data-cy="image"]').should('not.exist')
  })
  it('A folytatás gomb megnyomásakor megjelennek a rendelés összesítő oldal', () => {
  cy.visit('http://localhost:5173/laptopok')
  cy.get('[data-cy="addToCart"]').first().click()
  cy.visit('http://localhost:5173/Kosar')
  cy.get('[data-cy="continue"]').click()
  cy.visit('http://localhost:5173/rendeles_osszegzes')}
  )})
