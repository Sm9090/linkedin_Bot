const { By, until, Key } = require("selenium-webdriver");
const build = require("./driver.build");
const message = require("./addNote");
const Connect = require("./connect");

async function userProfile(i) {
  console.log(i);
  let driver = await build;
  try {
    await driver.wait(
      until.elementLocated(
        By.xpath(
          `/html/body/div[5]/div[3]/div[2]/div/div[1]/main/div/div/div[3]/div/ul/li[${i}]/div/div/div/div[1]/div/a/div/div/div/img`
        )
      ),
      20000
    );

    driver
      .findElement(
        By.xpath(
          `/html/body/div[5]/div[3]/div[2]/div/div[1]/main/div/div/div[3]/div/ul/li[${i}]/div/div/div/div[1]/div/a/div/div/div/img`
        )
      )
      .click();

    await driver.wait(until.titleContains("LinkedIn"), 1000);

    await driver.wait(
      until.elementLocated(
        By.xpath(
          "/html/body/div[5]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[2]/div[1]/div[1]/span[1]/a/h1"
        ),
        20000
      )
    );

    const name = await driver
      .findElement(
        By.xpath(
          "/html/body/div[5]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[2]/div[1]/div[1]/span[1]/a/h1"
        )
      )
      .getText();
    try {
      console.log("yahan tak chala");

      const connectButton = await driver.wait(
        until.elementLocated(
          By.xpath("//button[contains(text(), 'Connect')]"),
          2000
        )
      );

      console.log("connectbutton cross");

      if (connectButton) {
        console.log("1");
        await Connect(connectButton);
        await message(name);
      } else {
        console.log("Already connected");
      }
    } catch (error) {
      const followButton = await driver.wait(
        until.elementLocated(
          By.xpath("//button[contains(text(), 'Follow')]"),
          2000
        )
      );

      console.log("followbutton cross");

      if (followButton) {
        console.log("2");
        await Connect(followButton);
      } else {
        console.log("Already Following");
      }
    }

    console.log("3");
    // return;
  } catch (err) {
    console.error(err);
  }
}

module.exports = userProfile;
