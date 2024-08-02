const { By, until, Key } = require("selenium-webdriver");
const build = require("./driver.build");

async function searchPeople() {
  let driver = await build;
  let isOnFeedPage = false;

  while (!isOnFeedPage) {
    try {
      await driver
        .findElement(By.xpath('//*[@id="global-nav-typeahead"]/input'))
        .sendKeys("react", Key.RETURN);

      isOnFeedPage = true;
    } catch (err) {
      console.error(err);
      await driver.sleep(10000);
    }
  }

  try {
    // await driver.wait(until.titleContains("react"), 10000);
    await driver.sleep(5000);

    const people = await driver.wait(
      until.elementLocated(By.xpath("//button[text()='People']")),
      5000
    );
    if (people) {
      await people.click();
    }
    await driver.sleep(5000);
    // await driver.wait(until.titleContains("linkedin"), 10000);
  } catch (err) {
    console.error(err);
  }
}

module.exports = searchPeople;
