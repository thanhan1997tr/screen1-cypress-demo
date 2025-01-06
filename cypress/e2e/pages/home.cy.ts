describe('Home page', () => {
    beforeEach(() => {
        cy.visit('https://highwaywestdev.wpenginepowered.com/');
    });

    // Verify the presence of a single h1 tag
    it('Checks for single h1 tag', () => {
        cy.get('h1').should('have.length', 1);
    });

    // Verify all images have alt attributes
    it('Checks all images have alt attributes', () => {
        cy.checkAllImgHasAlt();
    });

    // Verify the order of sections on homepage by checking text within each section
    it('Should have correct order of sections', () => {
        const sections = ['WANDER YOUR WAY', 'WANDER YOUR WAY', 'A Call to Adventurers', 'HWV STORY', 'OUR TEAM', 'OUR CULTURE', 'PRESS'];

        cy.get('#main section').each(($el, index) => {
            cy.wrap($el).contains(new RegExp(sections[index], 'i'));
        });
    });

    // Check h2 font-size on mobile homepage
    it('Checks h2 font-size on mobile viewport', () => {
        cy.viewport('iphone-6');
        cy.get('.hero-section .title-home h2').should('have.css', 'font-size', '45px');
    });
});
