
class AmazonPage {
    visit() {
        // enter the amazon url.
        cy.visit("https://www.amazon.com/");
    }


    clickHamburgerMenu() {
        // method to click on the hamburger
        cy.get(".hm-icon.nav-sprite").click();
    }

    clickComputers(menuItem: string) {
        // method to click on Computers
        cy.get(".hmenu.hmenu-visible").contains(menuItem).click();
    }

    clickScanners(menuItem: string) {
        // method to click Tablet accessories
        cy.get(".hmenu.hmenu-visible.hmenu-translateX")
        cy.contains(menuItem).click();
    }

    filterResultsByFujitsu(element: string) {
        cy.get(".a-unordered-list.a-nostyle.a-vertical.a-spacing-medium.a-spacing-top-micro[data-csa-c-content-id='2528832011']").click()
        cy.contains(element).click();
    }

    sortResultsBy(sortOption: string) {
        cy.get("#a-autoid-2-announce").click();
        cy.get("div[id='a-popover-3'] div[class='a-popover-inner']").contains(sortOption).click();
    }

    clickLowestPricedItem(sortOption: string) {

        cy.get("#a-autoid-2-announce").click();
        cy.get("div[id='a-popover-3'] div[class='a-popover-inner']").contains(sortOption).click();
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
