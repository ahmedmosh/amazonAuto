
class AmazonPage {
    visit() {
        // enter the amazon url.
        cy.visit("https://www.amazon.com/");
    }

    clickHamburgerMenu() {

        cy.get(".hm-icon.nav-sprite").click();
    }

    clickComputers(Computers: string) {
        // parse computers on the list
        cy.contains(Computers).click();
    }

    // tabletAccessories(Tablet: string) {
    //     // parse computers on the list
    //     cy.contains(Tablet).click();
    // }

    filterResultsByJETEch(JETech: string) {
        cy.get("#brandsRefinements").contains(JETech).click();
    }

    sortResultsBy(sortOption: string) {

        cy.get("#s-result-sort-select").select(sortOption);
    }

    clickLowestPricedItem() {

        cy.get(".a-price-whole").first().click();
    }

    switchWindow() {
        cy.window().its("length").should("be.gt", 1);
        cy.window().then((win) => {
            win.location.href = "about:blank";
        });
    }

    assertSectionIsPresent(section: string) {

        cy.contains(section).should("exist");
    }

    logSectionText(section: string) {

        cy.contains(section).invoke("text").then((text) => {
            cy.log(text);
        });
    }
}

export default AmazonPage;
