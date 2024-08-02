const { By, until, Key } = require("selenium-webdriver");
const build = require("./driver.build");

async function message(name) {
  let driver = await build;
  try {
    console.log("message tk bhi ponch gaya");
    const addnote = await driver.wait(
      until.elementLocated(
        By.xpath("/html/body/div[3]/div/div/div[3]/button[1]"),
        2000
      )
    );
    console.log("addnote tk bhi ponch gaya");

    if (addnote) {
        console.log('condition tk bhi ponch gaya')
      await driver
        .findElement(By.xpath("/html/body/div[3]/div/div/div[3]/button[1]"))
        .click();

      await driver.wait(until.elementLocated(By.name("message")), 5000);

      await driver.findElement(By.name("message")).sendKeys(
        name,

        " \n \n It's great connecting with you. How have you been?"
      );

      const sendMessage = await driver.wait(
        until.elementLocated(
          By.xpath("/html/body/div[3]/div/div/div[4]/button[2]")
        ),
        5000
      );
      await sendMessage.click();

      const close = await driver.wait(
        until.elementLocated(
          By.xpath("/html/body/div[3]/div/div/button/svg/use")
        ),
        5000
      );
      if (close) {
        console.log("close tk bhi ponch gaya");
        await close.click();
      }
    }
    console.log('main condition khtm')
  } catch (error) {
    console.error(error);
  }
}

module.exports = message;
