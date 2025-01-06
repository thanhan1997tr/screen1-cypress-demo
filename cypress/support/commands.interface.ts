declare namespace Cypress {
    interface Chainable {
        checkSingleH1(): Chainable<void>;
        checkAllImgHasAlt(): Chainable<void>;
        checkSizeImg(): Chainable<void>;
        checkSEO(): Chainable<void>;
    }
}
