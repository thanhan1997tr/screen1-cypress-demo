describe('Home page', () => {
    beforeEach(() => {
        cy.visit('https://highwaywestdev.wpenginepowered.com/');
    });

    // Check that there is only one h1 tag on the homepage
    it('Should have only 1 h1 tag', () => {
        cy.get('h1').should('have.length', 1);
    });

    // Verify the order of sections on homepage by checking text within each section
    it('Should have correct order of sections', () => {
        const sections = ['WANDER YOUR WAY', 'WANDER YOUR WAY', 'A Call to Adventurers', 'HWV STORY', 'OUR TEAM', 'OUR CULTURE', 'PRESS'];

        cy.get('#main section').each(($el, index) => {
            cy.wrap($el).contains(new RegExp(sections[index], 'i'));
        });
    });
});
