import { ILinkMenuItem } from '@/types/header';

class HeaderSection {
    get headerElement() {
        return cy.get('header');
    }

    get mainMenuElement() {
        return cy.get('header .menu-main');
    }

    get mainMenuItemsElement() {
        return cy.get('header .menu-main').first().find('>.menu-item>a');
    }
    get menuItemsElement() {
        return cy.get('header .sub-menu').first().find('>.menu-item>a');
    }

    verifyLink(link: ILinkMenuItem) {
        return this.mainMenuElement.first().should('be.visible').contains('a', link.text).should('have.attr', 'href').and('include', link.url);
    }
}

export default new HeaderSection();
