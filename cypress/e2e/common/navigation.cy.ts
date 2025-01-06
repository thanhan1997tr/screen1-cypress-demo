import 'cypress-real-events';

import navigationData from '@/fixtures/navigation.json';
import headerSection from '@/support/sections/header';

describe('Header Menu Desktop Tests', () => {
    beforeEach(() => {
        cy.visit('https://highwaywestdev.wpenginepowered.com/');
    });

    describe('UI Display Tests', () => {
        it('Should display the header menu', () => {
            headerSection.headerElement.should('be.visible');
            headerSection.mainMenuElement.should('exist');
        });

        it('Should contain all required menu items', () => {
            const { mainMenu } = navigationData;
            mainMenu.forEach((menuItem) => {
                headerSection.mainMenuElement.contains(new RegExp(menuItem, 'i')).should('be.visible');
            });
        });
    });

    describe('Menu Links Tests', () => {
        const { menuItems } = navigationData;

        menuItems.forEach((menuItem) => {
            it(`Should verify the link "${menuItem.text}" points to "${menuItem.url}"`, () => {
                headerSection.verifyLink(menuItem);
            });
        });
    });

    describe('User Interaction Tests', () => {
        it('Should display dropdown menu on hover', () => {
            cy.get('header #menu-my-custom-menu.menu-main .menu-item-has-children').realHover();
            cy.get('.sub-menu').should('be.visible');
        });
    });

    describe('Typography Tests', () => {
        const { desktopMainMenuTypography, desktopSubMenuTypography } = navigationData;

        it('Should have correct typography for each main menu item', () => {
            headerSection.mainMenuItemsElement.each(($el) => {
                Object.keys(desktopMainMenuTypography).forEach((key) => {
                    cy.wrap($el).should('have.css', key, desktopMainMenuTypography[key as keyof typeof desktopMainMenuTypography]);
                });
            });
        });

        it('Should have correct typography for dropdown menu items', () => {
            headerSection.menuItemsElement.each(($el) => {
                Object.keys(desktopSubMenuTypography).forEach((key) => {
                    cy.wrap($el).should('have.css', key, desktopSubMenuTypography[key as keyof typeof desktopSubMenuTypography]);
                });
            });
        });
    });
});
