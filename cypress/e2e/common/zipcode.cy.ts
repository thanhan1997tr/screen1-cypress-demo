describe('Cookie Tests', () => {
    // Common function to test zipcode functionality

    it('should set and verify cookie', () => {
        cy.testZipcode('80003');
    });

    it('should set and verify cookie for Fort Worth area', () => {
        cy.testZipcode('76103', 'You appear to be in Fort Worth, TX');
    });

    it('should set and verify cookie for Fort Worth area', () => {
        cy.testZipcode('78221', 'You appear to be in San Antonio, TX');
    });
});
