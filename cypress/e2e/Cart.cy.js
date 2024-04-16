describe('Kosár és rendelés tesztelése', () => {
    it('a termék a vásárlás gombra kattintva a kosárba kerül, majd megjelenik a képe és a neve', () => {
    cy.visit('http://localhost:5173/laptopok')
    cy.get('[data-cy="addToCart"]').first().click()
    cy.visit('http://localhost:5173/kosar')
    cy.get('[data-cy="image"]').should('exist')
    cy.get('[data-cy="name"]').should('exist')
    }),
    it('megjelenik a termék összege', () => {
      cy.visit('http://localhost:5173/kosar')
      cy.get('[data-cy="fullPriceText"]').contains("Végösszeg:")
      cy.get('[data-cy="fullPrice"]').invoke('text').then((text) => {
        const numberPattern = /\d+/; // Számokat tartalmazó minta
        const numbers = text.match(numberPattern);
        expect(numbers).to.not.be.null; // Ellenőrizzük, hogy találtunk-e számokat
        expect(numbers.length).to.be.greaterThan(0); // Ellenőrizzük, hogy legalább egy számot találtunk
      });
    }),

    it('A kosár oldalon van darabszám', () => {
    cy.visit('http://localhost:5173/laptopok')
    cy.get('[data-cy="addToCart"]').first().click()
    cy.visit('http://localhost:5173/kosar')
    cy.get('[data-cy="db"]').should('exist')}),

  it('van törlés gomb és a hatására üres lesz a lista',() => {
  cy.visit('http://localhost:5173/laptopok')
  cy.get('[data-cy="addToCart"]').first().click()
  cy.visit('http://localhost:5173/kosar')
  cy.get('[data-cy="remove"]').first().click()
  cy.get('[data-cy="image"]').should('not.exist')}),

  it('A folytatás gomb megnyomásakor megjelennek a rendelés összesítő oldal, ha be van lépve', () => {
  cy.visit('http://localhost:5173/laptopok')
  cy.get('[data-cy="addToCart"]').first().click()
  cy.visit('http://localhost:5173/kosar')
  cy.get('[data-cy="continue"]').should('not.exist')
  cy.get('[data-cy="navbar-login-link"]').click()
  cy.get('[data-cy="EmailInput"]').type('asd@gmail.com');
  cy.get('[data-cy="PasswordInput"]').type('asdfghjkl');
  cy.get('[data-cy="LoginButton"]').click();
  cy.url().should('include', '/profil');
  cy.visit('http://localhost:5173/kosar')
  cy.get('[data-cy="continue"]').should('exist').click()
  cy.url().should('eq', 'http://localhost:5173/rendeles_osszegzes');


  
  })
})
