describe('Trabajo Practico',{testIsolation:false},()=>{

    it('should visit the page',()=>{

        cy.visit('https://automationintesting.online')

        //imagenes
        cy.get('img[src="/images/rbp-logo.jpg"]').should('be.visible')
        cy.get('img[src="/images/room2.jpg"]').should('be.visible')

        // Validamos que la descripcion del hotel sea el mismo
        cy.get('p').contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.').should('be.visible')

        // Validamos informacion del hotel
        cy.get('p').contains('Shady Meadows B&B').should('be.visible')
        cy.get('p').contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').should('be.visible')
        cy.get('p').contains('012345678901').should('be.visible')
        cy.get('p').contains('fake@fakeemail.com').should('be.visible')

        cy.emptyForm ();
        cy.wrongData ();
        cy.correctData ();
        
    })


});