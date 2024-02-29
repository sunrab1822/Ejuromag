describe('template spec', () => {
  it('A főoldalon létezik, a regisztrációhoz ,belépéshez vezető gomb', () => {
    cy.visit('http://localhost:5173')
    cy.get('.ms-auto > :nth-child(3) > .nav-link').click()
    cy.get('.ButtonDiv > :nth-child(1)').contains("Belépés")
    cy.get('.ButtonDiv > :nth-child(2)').contains("Elfelejtett Jelszó")
    cy.get('.ButtonDiv > :nth-child(3)').contains("Regisztráció")
  })

  it('A navbaron működnek a különböző termékekhez vezető gombok', () => {
    cy.visit('http://localhost:5173')
    cy.get(':nth-child(1) > .nav-link').click()
  })

  it('A főoldalon található Qr Code kép', () => {
    cy.visit('http://localhost:5173')
    cy.get('#QrCode')  
  })

  it('A regisztráció oldalon kötelező minden mezőt kitölteni', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('.ButtonDiv > :nth-child(3)').click()
  })

  // it('A regisztráció oldalon a „REGISZTRÁCIÓ	” gomb megnyomásakor az irányítószám és a telefonszám mező ellenőrzi, hogy csak számokat tartalmazzon', () => {
  //   cy.visit('http://localhost:5173/login')
  //   cy.get('.ButtonDiv > :nth-child(3)').click()
  //   cy.get('.RegisterBtn').click()
  // })

  it('A kosár oldalon található „Végösszeg:” felirat', () => {
    cy.visit('http://localhost:5173/Kosar')
    cy.get(':nth-child(4) > .col-md-5').contains("Végösszeg:")
  })
})