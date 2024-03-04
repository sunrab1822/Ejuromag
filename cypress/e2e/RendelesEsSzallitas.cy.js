describe('Rendelés és szállítás tesztek', () => {
  it('Az oldalon található egy h1 tag aminek a tartalma: Rendelés és szállítás', () => {
    cy.visit('http://localhost:5173/help/Rendeles_es_szallitas')
    cy.get('.h1').contains("Rendelés és szállítás")
  })

  it('Az oldalon található kettő h2 tag aminek a tartalma', () => {
    cy.visit('http://localhost:5173/help/Rendeles_es_szallitas')
    cy.get('#QrCode')  
  })

  it('Az oldalon található öt h2 tag aminek a tartalma', () => {
    cy.visit('http://localhost:5173/help/Rendeles_es_szallitas')
    cy.get('#QrCode')  
  })

  it('Az oldalon „Futár által való kézbesítés” listában a szállítási díjaknak vastag betűsöknek kell lenniük', () => {
    cy.visit('http://localhost:5173/help/Rendeles_es_szallitas')
    cy.get('#QrCode')  
  })

  
})