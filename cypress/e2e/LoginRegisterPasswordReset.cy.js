describe('Belépés oldal tesztje', () => {
  it('Sikeres belépés', () => {
    cy.visit('http://localhost:5173/Login')

    // E-mail és jelszó mezők kitöltése
    cy.get('[data-cy="EmailInput"]').type('asd@gmail.com');
    cy.get('[data-cy="PasswordInput"]').type('asdfghjkl');

    // Belépés gombra kattintás
    cy.get('[data-cy="LoginButton"]').click();

    // Sikeres belépés ellenőrzése
    cy.url().should('include', '/profil');
  });

  it('Sikertelen belépés', () => {
    cy.visit('http://localhost:5173/Login')

    // E-mail és jelszó mezők kitöltése
    cy.get('[data-cy="EmailInput"]').type('fake@gmail.com');
    cy.get('[data-cy="PasswordInput"]').type('k');

    // Belépés gombra kattintás
    cy.get('[data-cy="LoginButton"]').click();

    // Hibaüzenet ellenőrzése
    cy.get('[data-cy="ErrorMessage"]').should('be.visible').should('have.text', 'Nem megfelelő email vagy jelszó');;
  });


});

describe('Regisztráció oldal tesztje', () => {
  it('Sikeres regisztráció', () => {
    cy.visit('http://localhost:5173/Login')

    cy.get('[data-cy="RegisterButton"]').click()

    // Vezetéknév, keresztnév, e-mail, jelszó és jelszó újra mezők kitöltése
    cy.get('[data-cy="KeresztnevInput"]').type('Teszt');
    cy.get('[data-cy="VezeteknevInput"]').type('Felhasználó');
    // Véletlenszerű szám generálása
    const randomNumber = Math.floor(Math.random() * 10000);

    // E-mail mező kitöltése
    const email = `teszt${randomNumber}@email.com`;
    cy.get('[data-cy="EmailInput"]').type(email);
    cy.get('[data-cy="JelszoInput"]').type('asdfghjkl');
    cy.get('[data-cy="KeresztnevInput"]').click();
    cy.get('[data-cy="JelszoUjraInput"]').type('asdfghjkl');

    // Regisztráció gombra kattintás
    cy.get('[data-cy="RegisztrácioButton"]').click();

    // Sikeres regisztráció üzenet ellenőrzése
    cy.get('[data-cy="Succesmessage"]').should('be.visible').should('have.text', 'Sikeresen regisztráltál!');;

  });

  it('Sikertelen regisztráció', () => {
    cy.visit('http://localhost:5173/Login')

    cy.get('[data-cy="RegisterButton"]').click()


    // Vezetéknév, keresztnév, e-mail, jelszó és jelszó újra mezők kitöltése
    cy.get('[data-cy="KeresztnevInput"]').type('Teszt');
    cy.get('[data-cy="VezeteknevInput"]').type('Felhasználó');
    // Véletlenszerű szám generálása
    const randomNumber = Math.floor(Math.random() * 10000);

    // E-mail mező kitöltése
    const email = `teszt${randomNumber}@email.com`;
    cy.get('[data-cy="EmailInput"]').type(email);
    cy.get('[data-cy="JelszoInput"]').type('asdfghjkl');
    cy.get('[data-cy="KeresztnevInput"]').click();
    cy.get('[data-cy="JelszoUjraInput"]').type('rosszjelszo');

    // Regisztráció gombra kattintás
    cy.get('[data-cy="RegisztrácioButton"]').click();

    // Hibaüzenet ellenőrzése
    cy.get('[data-cy="ErrorMessage"]').should('be.visible').should('have.text', 'A két jelszó nem egyezik vagy az emailcím már használatban van');;
  });
});

describe('Elfelejtett jelszó oldal tesztje', () => {
  it('Sikeres jelszó visszaállítás', () => {
    cy.visit('http://localhost:5173/Login')
    cy.get('[data-cy="PasswordResetButton"]').click()
    cy.get('[data-cy="ResetEmailInput"]').type('asd@gmail.com');
    cy.get('[data-cy="EmailResetButton"]').click()
    cy.get('[data-cy="Succesmessage"]').should('be.visible').should('have.text', 'Email elküldve')})

  it('Sikertelen jelszó visszaállítás', () => {
    cy.visit('http://localhost:5173/Login')
    cy.get('[data-cy="PasswordResetButton"]').click()
    cy.get('[data-cy="ResetEmailInput"]').type('fake@gmail.com');
    cy.get('[data-cy="EmailResetButton"]').click()
    cy.get('[data-cy="ErrorMessage"]').should('be.visible').should('have.text', 'Nem található az email')})
})