/**
 * Test suite for form interactions on the gravity form
 */
describe('Form Testing', () => {
    beforeEach(() => {
        cy.visit('https://highwaywestdev.wpenginepowered.com/form/');
    });

    /**
     * Test case: Verify page has exactly one h1 heading
     * Ensures proper heading hierarchy and SEO compliance
     */
    it('Checks for single h1 tag', () => {
        cy.checkSingleH1();
    });

    /**
     * Test case: Submit form with all required fields filled correctly
     * Verifies successful form submission and confirmation message
     */
    it('Should submit form successfully with all fields filled', () => {
        cy.get('#input_1_1_3').type('An');
        cy.get('#input_1_1_6').type('Tran');
        cy.get('#input_1_3').type('an.tran@screen1.io');
        cy.get('#input_1_4').type('Testing with Cypress');
        cy.get('#input_1_5').type('This is a test with Cypress');
        cy.get('#gform_1 input[type="submit"]').click();
        cy.get('.gform_confirmation_message').should('contain', 'Thanks for contacting us! We will get in touch with you shortly.');
    });

    /**
     * Test case: Submit empty form
     * Verifies validation messages appear for required fields
     */
    it('Should show validation messages when submitting empty form', () => {
        cy.get('#gform_1 input[type="submit"]').click();
        cy.get('.validation_message').should('have.length', 4);
    });

    /**
     * Test case: Submit form without email
     * Verifies email field validation message
     */
    it('Should show validation message when email is missing', () => {
        cy.get('#input_1_1_3').type('An');
        cy.get('#input_1_1_6').type('Tran');
        cy.get('#input_1_4').type('Testing with Cypress');
        cy.get('#input_1_5').type('This is a test with Cypress');
        cy.get('#gform_1 input[type="submit"]').click();
        cy.get('#validation_message_1_3').should('contain', 'This field is required.');
    });
});
