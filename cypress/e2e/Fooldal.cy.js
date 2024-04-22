describe('Főoldal tesztek', () => {

  it('A színek helyesek', () => {
    cy.visit('http://bgs.jedlik.eu/ejuromag')
    cy.get('[data-cy="TermekekNavbar"]').should('have.css', 'background-color', 'rgb(2, 102, 145)'); 
    cy.get('[data-cy="Footer"]').should('have.css', 'background-color', 'rgb(0, 0, 0)'); 
    cy.get('[data-cy="TabletButton"]').should('have.css', 'background-color', 'rgb(165, 42, 42)'); 
    cy.get('[data-cy="LaptopButton"]').should('have.css', 'background-color', 'rgb(165, 42, 42)'); 
    cy.get('[data-cy="GamerPcButton"]').should('have.css', 'background-color', 'rgb(165, 42, 42)'); 
    cy.get('[data-cy="OfficePcButton"]').should('have.css', 'background-color', 'rgb(165, 42, 42)'); 
    cy.get('[data-cy="ConsoleButton"]').should('have.css', 'background-color', 'rgb(165, 42, 42)'); 
    cy.get('[data-cy="PhoneButton"]').should('have.css', 'background-color', 'rgb(165, 42, 42)'); 
  })


  it("Létezik a Navbar és a Footer", () =>{
    cy.visit('http://bgs.jedlik.eu/ejuromag')
    cy.get('[data-cy="KosarBelepesNav"]').should("exist")
    cy.get('[data-cy="TermekekNavbar"]').should("exist")
    cy.get('[data-cy="Footer"]').should("exist")
  })

  it('A főoldal footerjében található közösségi média ikonok és Qr Code kép', () => {
    cy.visit('http://bgs.jedlik.eu/ejuromag')
    cy.get('#fa-facebook').should("exist")
    cy.get('#fa-tiktok').should("exist")
    cy.get('#fa-instagram').should("exist")
    cy.get('#QrCode').should("exist")

  })

  it('A főoldalon a VuperSliders működik', () => {
    cy.visit('http://bgs.jedlik.eu/ejuromag')
    cy.get('.vueperslide--active > .vueperslide__content-wrapper')
    cy.get('.vueperslides__arrow--next').click()
    cy.get('.vueperslides__arrow--prev').click()
  })


})