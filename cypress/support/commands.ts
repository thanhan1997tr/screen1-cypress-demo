/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// Verify that the page contains exactly one h1 heading
Cypress.Commands.add('checkSingleH1', () => {
    cy.get('h1').should('have.length', 1);
});

// Verify that all images have non-empty alt attributes for accessibility
Cypress.Commands.add('checkAllImgHasAlt', () => {
    cy.get('img').each(($el) => {
        cy.wrap($el).should('have.attr', 'alt').and('not.be.empty');
    });
});

// Verify that all images are under the size limit (1MB)
Cypress.Commands.add('checkSizeImg', () => {
    const SIZE_LIMIT_MB = 1;

    cy.get('img').each(($el) => {
        const imgSrc = $el.attr('src');
        cy.wrap($el).should('have.attr', 'src');

        if (imgSrc) {
            cy.request(imgSrc).then((response) => {
                const contentType = Array.isArray(response.headers['content-type'])
                    ? response.headers['content-type'][0]
                    : response.headers['content-type'];
                const isImageType = contentType.startsWith('image/');
                const fileSize = isImageType ? Number(response.headers['content-length']) : new Blob([response.body]).size;
                const fileSizeInMB = (fileSize / 1048576).toFixed(2);

                expect(Number(fileSizeInMB)).to.be.at.most(
                    SIZE_LIMIT_MB,
                    `Image ${imgSrc} size (${fileSizeInMB}MB) exceeds limit of ${SIZE_LIMIT_MB}MB\n` + `Type: ${contentType}`,
                );
            });
        }
    });
});

Cypress.Commands.add('checkSEO', () => {
    // Check meta title
    cy.get('head title').should('exist');

    // Check meta description
    cy.get('head meta[name="description"]').should('exist');

    // Check canonical URL
    cy.get('head link[rel="canonical"]').should('exist');

    // Check meta viewport
    cy.get('head meta[name="viewport"]').should('exist');

    // Check heading hierarchy
    cy.get('h1').then(($h1s) => {
        expect($h1s.length).to.be.at.most(1);
    });

    // Check all links have href
    cy.get('a').each(($link) => {
        cy.wrap($link).should('have.attr', 'href');
    });
});
