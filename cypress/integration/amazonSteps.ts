import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import AmazonPage from "../page_objects/amazonPage";

const amazonPage = new AmazonPage();

Given("I open the Amazon website", () => {
    amazonPage.visit();
});

When("I click on the hamburger menu", () => {
    amazonPage.clickHamburgerMenu();
});

When("I click on Computers", (menuItem: string) => {
    amazonPage.clickComputers(menuItem);
});

When("I filter the results by JETech", (JETech: string) => {
    amazonPage.filterResultsByJETEch(JETech);
});

When("I sort the JETech results by {string}", (sortOption: string) => {
    amazonPage.sortResultsBy(sortOption);
});

When("I click on the lowest priced item", () => {
    amazonPage.clickLowestPricedItem();
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
