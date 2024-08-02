const { By, until, Key } = require("selenium-webdriver");
const build = require("./driver.build");

async function Connect(connectButton) {   
  try {
    if (connectButton.length > 0) {
        const button = connectButton[0];
        const buttonText = await button.getText();
        if (!buttonText.includes("Pending") || !buttonText.includes("Following")) {
          console.log("Clicking Connect button");
          await button.click();
        } else {
          console.log("Already connected or request pending");
        }
      }else{
            console.log('Connect button not found')
      }
console.log('sahi chal raha ha')
  } catch (error) {
    console.error(error);
  }
}

module.exports = Connect;
