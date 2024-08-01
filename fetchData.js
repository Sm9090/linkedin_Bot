const { By, until, Key } = require("selenium-webdriver");
const build = require("./driver.build");

async function fetchData() {
  let driver = await build;
  try {
    await driver.wait(
      until.elementLocated(
        By.xpath(
          "/html/body/div[5]/div[3]/div[2]/div/div[1]/main/div/div/div[2]/div/ul/li[1]/div/div/div/div[1]/div/a/div/div/div/img"
        )
      ),
      20000
    );

    const maindiv = driver.findElement(
      By.xpath(
        "/html/body/div[5]/div[3]/div[2]/div/div[1]/main/div/div/div[2]/div/ul/li[1]/div/div/div/div[1]/div/a/div/div/div/img"
      )
    );

    maindiv.click();

    await driver.wait(until.titleContains("LinkedIn"), 1000);

    await driver.wait(until.elementLocated(By.xpath('/html/body/div[5]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[2]/div[1]/div[1]/span[1]/a/h1') , 20000))

    const name = await driver.findElement(By.xpath('/html/body/div[5]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[2]/div[1]/div[1]/span[1]/a/h1')).getText()

    await driver.wait(
      until.elementLocated(
        By.xpath(
          "/html/body/div[5]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[3]/div/button"
        ),
        2000
      )
    );

    await driver
      .findElement(
        By.xpath(
          "/html/body/div[5]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[3]/div/button"
        )
      )
      .click();

    const addnote = await driver.wait(
      until.elementLocated(
        By.xpath("/html/body/div[3]/div/div/div[3]/button[1]"),
        2000
      )
    );

    if (addnote) {
      await driver
        .findElement(By.xpath("/html/body/div[3]/div/div/div[3]/button[1]"))
        .click();

        await driver.wait(until.elementLocated(By.name("message")), 20000);

      await driver.findElement(By.name("message")).sendKeys(
        name, 

        " \n \n It's great connecting with you. How have you been?"
      );

      await driver.wait(until.elementLocated(By.xpath('/html/body/div[3]/div/div/div[4]/button[2]')), 20000);
      await driver.findElement(By.xpath('/html/body/div[3]/div/div/div[4]/button[2]')).click()

      await driver.wait(until.elementLocated(By.xpath('/html/body/div[3]/div/div/button')), 20000);
      await driver.findElement(By.xpath('/html/body/div[3]/div/div/button')).click()
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = fetchData;
