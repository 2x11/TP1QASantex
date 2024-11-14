// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('emptyForm', () => { 
    
    cy.log('Envío de form de contacto en blanco...')
        cy.get('#submitContact').click()
        cy.get('.alert').should('be.visible')
        cy.get('p').contains('Subject must be between 5 and 100 characters.')
        cy.get('p').contains('Subject may not be blank')
        cy.get('p').contains('Name may not be blank')
        cy.get('p').contains('Message must be between 20 and 2000 characters.')
        cy.get('p').contains('Message may not be blank')
        cy.get('p').contains('Email may not be blank')
        cy.get('p').contains('Phone may not be blank')
        cy.get('p').contains('Phone must be between 11 and 21 characters.')
});

Cypress.Commands.add('wrongData', () => { 

    cy.log('Set de datos incorrectos...')
    cy.get('input[placeholder="Name"]').type('asd')
    cy.get('input[placeholder="Email"]').type('asdasd')
    cy.get('input[placeholder="Phone"]').type('asdasd')
    cy.get('input[placeholder="Subject"]').type('asdasd')
    cy.get('[data-testid="ContactDescription"]').type('asdasd')
    cy.get('#submitContact').click()

    //valida info a cargar en el form
    cy.get('.alert').should('be.visible')
        cy.get('p').contains('Phone must be between 11 and 21 characters.')
        cy.get('p').contains('debe ser una dirección de correo electrónico con formato correcto')
        cy.get('p').contains('Message must be between 20 and 2000 characters.')
});

Cypress.Commands.add('correctData', () => { 
    cy.log('Set de datos incorrectos...')
        cy.get('input[placeholder="Name"]').type('Juan Pérez')
        cy.get('input[placeholder="Email"]').type('juan@gmail.com')
        cy.get('input[placeholder="Phone"]').type('35123696457')
        cy.get('input[placeholder="Subject"]').type('Reserva de habitación para fecha X')
        cy.get('[data-testid="ContactDescription"]').type('loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo') 
        cy.get('#submitContact').click()
});
