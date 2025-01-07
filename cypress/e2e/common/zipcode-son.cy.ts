describe('Cookie Tests', () => {
    // Common function to test zipcode functionality

    const testZipcode = (zipcode: string, locationText?: string) => {
        cy.visit('https://brident.hostedstaging3.com/appointments/');

        cy.wait(1000);

        const handleZipcodeInput = (zipcode: string) => {
            cy.get('input[name="zipcode"]').clear().type(zipcode);
            cy.get('.btn-box-gray.btn-find-location').click();
        };

        cy.get('.btn-box-gray').then((button) => {
            if (button.text().includes('Find your location')) {
                handleZipcodeInput(zipcode);
            } else {
                cy.get('.btn-box-gray').then((btn) => {
                    if (btn.text().includes('Change location')) {
                        cy.get('.btn-box-gray.btn-change-location').click();
                    } else {
                        cy.get('.btn-box-gray.btn-enter-zipcode').click();
                    }
                });
                handleZipcodeInput(zipcode);
            }
        });

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

    it('should set and verify cookie for San Antonio area', () => {
        testZipcode('78221', 'You appear to be in San Antonio, TX');
    });
});
