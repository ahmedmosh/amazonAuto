import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import AmazonPage from "../page_objects/amazonPage";

const amazonPage = new AmazonPage();

Given("I open the Amazon website", () => {
    amazonPage.visit();
});

When("I click on the hamburger menu", () => {
    amazonPage.clickHamburgerMenu();
});

And("I click on Computers", () => {
    amazonPage.clickComputers("Computers");
});

And("I click on scanners", () => {
    amazonPage.clickScanners("Scanners")
});

And("I filter by featured brands fujitsu", () => {
    amazonPage.filterResultsByFujitsu("Fujitsu");
});

And("I sort the Fujitsu results by Newests arrival", (sortOption: string) => {
    amazonPage.sortResultsBy("Newest Arrivals");
});

When("I click on the lowest priced item", () => {
    amazonPage.clickLowestPricedItem("");
});

When("I switch the window", () => {
    amazonPage.switchWindow();
});

Then("I assert that the {string} section is present", (section: string) => {
    amazonPage.assertSectionIsPresent(section);
});

Then("I log the text of the {string} section to the console", (section: string) => {
    amazonPage.logSectionText(section);
});
