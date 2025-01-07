describe('Zipcode Cookie Functionality', () => {
    const BASE_URL = 'https://emlerswimschool.com';
    const TEST_ZIPCODE = '75231';

    beforeEach(() => {
        cy.intercept('POST', `${BASE_URL}/wp-admin/admin-ajax.php`).as('submitForm');
    });

    it('should set and verify zipcode cookie on homepage', () => {
        // Visit homepage
        cy.visit(BASE_URL);

        // Enter and submit zipcode
        cy.get('input[name="zip_code"]').type(TEST_ZIPCODE);
        cy.get('.banner-box-search-button button[type="submit"]').click();

        // Verify form submission and response
        cy.wait('@submitForm').its('response.statusCode').should('eq', 200);

        // Verify cookie
        verifyCookie(TEST_ZIPCODE);
    });

    it('should persist cookie on swim lessons page', () => {
        // Visit swim lessons page
        cy.visit(`${BASE_URL}/swim-lessons/swim-lesson-levels/`);

        // Verify cookie and schedule button
        verifyCookie(TEST_ZIPCODE);
        cy.get('.card-lvl-line a').first().contains('Schedule Now').should('exist');
    });
});

// Helper function to verify cookie
function verifyCookie(expectedValue: string) {
    cy.wait(500);

    cy.getCookie('cookie_true_zipcode').then((cookie) => {
        expect(cookie).to.exist;
        expect(cookie?.value).to.eq(expectedValue);
    });
}
