// Test cases for Contact page
describe('Contact page', () => {
    // Before each test, navigate to the contact page
    beforeEach(() => {
        cy.visit('https://highwaywestdev.wpenginepowered.com/contact-us/');
    });

    // Verify that the page has exactly one h1 heading
    it('Checks for single h1 tag', () => {
        cy.checkSingleH1();
    });

    // Verify that all images on the page have alt text for accessibility
    it('Checks all images have alt attributes', () => {
        cy.checkAllImgHasAlt();
    });

    // Verify that images meet the required dimensions
    it('Check size of images', () => {
        cy.checkSizeImg();
    });

    // check SEO
    it('Check SEO', () => {
        cy.checkSEO();
    });
});
