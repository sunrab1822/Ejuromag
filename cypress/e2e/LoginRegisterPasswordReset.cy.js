describe('Belépés oldal tesztje', () => {
  it('Sikeres belépés', () => {
    cy.visit('http://localhost:5173/login')

    cy.get('[data-cy="EmailInput"]').type('asd@gmail.com');
    cy.get('[data-cy="PasswordInput"]').type('asdfghjkl');

    cy.get('[data-cy="LoginButton"]').click();

    cy.url().should('include', '/profil');
  });

  it('Sikertelen belépés', () => {
    cy.visit('http://localhost:5173/login')

    cy.get('[data-cy="EmailInput"]').type('fake@gmail.com');
    cy.get('[data-cy="PasswordInput"]').type('k');

    cy.get('[data-cy="LoginButton"]').click();

    cy.get('[data-cy="ErrorMessage"]').should('be.visible').should('have.text', 'Nem megfelelő email vagy jelszó');
  });


});

describe('Regisztráció oldal tesztje', () => {
  it('Sikeres regisztráció', () => {
    cy.visit('http://localhost:5173/login')

    cy.get('[data-cy="RegisterButton"]').click()

    cy.get('[data-cy="KeresztnevInput"]').type('Teszt');
    cy.get('[data-cy="VezeteknevInput"]').type('Felhasználó');
    const randomNumber = Math.floor(Math.random() * 10000);

    const email = `teszt${randomNumber}@email.com`;
    cy.get('[data-cy="EmailInput"]').type(email);
    cy.get('[data-cy="JelszoInput"]').type('asdfghjkl');
    cy.get('[data-cy="KeresztnevInput"]').click();
    cy.get('[data-cy="JelszoUjraInput"]').type('asdfghjkl');

    cy.get('[data-cy="RegisztrácioButton"]').click();

    cy.get('[data-cy="Succesmessage"]').should('be.visible').should('have.text', 'Sikeresen regisztráltál!');

  });
  it('Sikertelen regisztráció', () => {
    cy.visit('http://localhost:5173/login')

    cy.get('[data-cy="RegisterButton"]').click()

    cy.get('[data-cy="KeresztnevInput"]').type('Teszt');
    cy.get('[data-cy="VezeteknevInput"]').type('Felhasználó');
    const randomNumber = Math.floor(Math.random() * 10000);

    const email = `teszt${randomNumber}@email.com`;
    cy.get('[data-cy="EmailInput"]').type(email);
    cy.get('[data-cy="JelszoInput"]').type('asdfghjkl');
    cy.get('[data-cy="KeresztnevInput"]').click();
    cy.get('[data-cy="JelszoUjraInput"]').type('rosszjelszo');

    cy.get('[data-cy="RegisztrácioButton"]').click();

    cy.get('[data-cy="ErrorMessage"]').should('be.visible').should('have.text', 'A két jelszó nem egyezik vagy az emailcím már használatban van');
  });
});

describe('Elfelejtett jelszó oldal tesztje', () => {
  it('Sikeres jelszó visszaállítás', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('[data-cy="PasswordResetButton"]').click()
    cy.get('[data-cy="ResetEmailInput"]').type('dassayss@gmail.com');
    cy.get('[data-cy="EmailResetButton"]').click()
    cy.get('[data-cy="Succesmessage"]').should('be.visible').should('have.text', 'Email elküldve')})

  it('Sikertelen jelszó visszaállítás', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('[data-cy="PasswordResetButton"]').click()
    cy.get('[data-cy="ResetEmailInput"]').type('fake@gmail.com');
    cy.get('[data-cy="EmailResetButton"]').click()
    cy.get('[data-cy="ErrorMessage"]').should('be.visible').should('have.text', 'Nem található az email')})
})