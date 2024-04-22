class AmazonPage {
    visit() {
        // Replace 'https://www.amazon.com/' with the actual URL of the Amazon website
        cy.visit("https://www.amazon.com/");
    }

    clickHamburgerMenu() {
        // Replace '#nav-hamburger-menu' with the actual CSS selector of the hamburger menu
        cy.get("#nav-hamburger-menu").click();
    }

    clickMenuItem(menuItem: string) {
        // Replace 'menuItem' with the actual text of the menu item you want to click
        cy.contains(menuItem).click();
    }

    filterResultsByBrand(brand: string) {
        // Replace '#brandsRefinements' with the actual CSS selector of the brand filter section
        // Replace 'brand' with the actual text of the brand you want to filter by
        cy.get("#brandsRefinements").contains(brand).click();
    }

    sortResultsBy(sortOption: string) {
        // Replace '#s-result-sort-select' with the actual CSS selector of the sort dropdown
        // Replace 'sortOption' with the actual text of the sort option you want to select
        cy.get("#s-result-sort-select").select(sortOption);
    }

    clickLowestPricedItem() {
        // Replace '.a-price-whole' with the actual CSS selector of the prices displayed on the page
        cy.get(".a-price-whole").first().click();
    }

    switchWindow() {
        cy.window().its("length").should("be.gt", 1);
        cy.window().then((win) => {
            win.location.href = "about:blank";
        });
    }

    assertSectionIsPresent(section: string) {
        // Replace 'section' with the actual text or identifier of the section you want to assert
        cy.contains(section).should("exist");
    }

    logSectionText(section: string) {
        // Replace 'section' with the actual text or identifier of the section you want to log
        cy.contains(section).invoke("text").then((text) => {
            cy.log(text);
        });
    }
}

export default AmazonPage;
