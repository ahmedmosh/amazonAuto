Cypress.Commands.add("tabletAccessories", (tabletAccessoriesMenuItem) => {
    // Click on the menu item containing the specified text
    cy.contains(tabletAccessoriesMenuItem).click();
});
