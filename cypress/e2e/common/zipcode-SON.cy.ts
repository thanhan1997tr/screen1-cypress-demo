describe('Cookie Tests', () => {
    // Common function to test zipcode functionality

    const testZipcode = (zipcode: string, locationText?: string) => {
        cy.visit('https://brident.hostedstaging3.com/appointments/');

        cy.wait(1000);

        // Enter zipcode and submit
        cy.get('input[name="zipcode"]').type(zipcode);
        cy.get('button[type="submit"]').contains('Find your location').click();

        // Wait for response
        cy.wait(500);

        // Verify cookie existence and value
        cy.getCookie('zipcode').then((cookie) => {
            expect(cookie).to.exist;
            expect(cookie?.value).to.eq(zipcode);

            // Check location text if provided
            if (locationText) {
                cy.get('section span').contains(locationText).should('exist');
            }
        });
    };

    it('should set and verify cookie', () => {
        testZipcode('80003');
    });

    it('should set and verify cookie for Fort Worth area', () => {
        testZipcode('76103', 'You appear to be in Fort Worth, TX');
    });

    it('should set and verify cookie for Fort Worth area', () => {
        testZipcode('78221', 'You appear to be in San Antonio, TX');
    });
});
