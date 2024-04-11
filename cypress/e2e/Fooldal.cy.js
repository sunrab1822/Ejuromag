describe('Főoldal tesztek', () => {
  it('A főoldalon működik, a regisztrációhoz ,belépéshez vezető gomb', () => {
    cy.visit('http://localhost:5173')
    cy.get('[data-cy="navbar-login-link"]').click()
    cy.location('pathname').should('eq', '/Login')

  })

  it('A főoldal navbarjában működik kosár gomb', () => {
    cy.visit('http://localhost:5173')
    cy.get('[data-cy="navbar-kosar-link"]').click()
    cy.location('pathname').should('eq', '/Kosar') 

  })

  it('A navbaron léteznek a különböző termékekhez vezető gombok', () => {
    cy.visit('http://localhost:5173')
    cy.get('[data-cy="navbar2-laptops-link"]').click()
    cy.location('pathname').should('eq', '/laptopok') 
    cy.get('[data-cy="navbar2-gamerPcs-link"]').click()
    cy.location('pathname').should('eq', '/gamer_szamitogepek') 
    cy.get('[data-cy="navbar2-officePcs-link"]').click()
    cy.location('pathname').should('eq', '/irodai_szamitogepek') 
    cy.get('[data-cy="navbar2-consoles-link"]').click()
    cy.location('pathname').should('eq', '/konzolok') 
    cy.get('[data-cy="navbar2-phones-link"]').click()
    cy.location('pathname').should('eq', '/telefonok') 
    cy.get('[data-cy="navbar2-tablets-link"]').click()
    cy.location('pathname').should('eq', '/tabletek') 


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