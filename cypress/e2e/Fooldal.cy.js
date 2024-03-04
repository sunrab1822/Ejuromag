describe('Főoldal tesztek', () => {
  it('A főoldalon működik, a regisztrációhoz ,belépéshez vezető gomb', () => {
    cy.visit('http://localhost:5173')
    cy.get('.ms-auto > :nth-child(3) > .nav-link').click()
    cy.get('.ButtonDiv > :nth-child(1)').contains("Belépés")
    cy.get('.ButtonDiv > :nth-child(2)').contains("Elfelejtett Jelszó")
    cy.get('.ButtonDiv > :nth-child(3)').contains("Regisztráció")
    cy.get('.vueperslide--active > .vueperslide__content-wrapper').should("not.exist")

  })

  it('A főoldal navbarjában működik kosár gomb', () => {
    cy.visit('http://localhost:5173')
    cy.get('#Kosar > .fa-solid').click()
    cy.get('.vueperslide--active > .vueperslide__content-wrapper').should("not.exist")

  })

  it('A navbaron léteznek a különböző termékekhez vezető gombok', () => {
    cy.visit('http://localhost:5173')
    cy.get(':nth-child(1) > .nav-link').should("exist")
    cy.get(':nth-child(2) > .nav-link').should("exist")
    cy.get(':nth-child(3) > .nav-link').should("exist")

  })

  it('A főoldalon a VuperSliders működik', () => {
    cy.visit('http://localhost:5173')
    cy.get('.vueperslide--active > .vueperslide__content-wrapper')
    cy.get('.vueperslides__arrow--next').click()
    cy.get('.vueperslides__arrow--prev').click()
  })

  it('A főoldalon található Qr Code kép', () => {
    cy.visit('http://localhost:5173')
    cy.get('#QrCode').should("exist")
  })

  it('•	A főoldal footerjében található közösségi média ikonok', () => {
    cy.visit('http://localhost:5173')
    cy.get('#fa-facebook').should("exist")
    cy.get('#fa-tiktok').should("exist")
    cy.get('#fa-instagram').should("exist")

  })
})