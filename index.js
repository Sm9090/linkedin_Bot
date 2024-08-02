const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const build = require('./driver.build')
const login = require('./login');
const searchPeople = require('./searchPeople');
const userProfile = require('./userProfile');

;(async function example() {
    let driver = await build
  
  try {
    await driver.get('https://www.google.com/ncr')
    await driver.findElement(By.name('q')).sendKeys('linkdin', Key.RETURN)
    await driver.wait(until.titleIs('linkdin - Google Search'), 1000)
    await driver.findElement(By.partialLinkText('LinkedIn')).click()
    await driver.wait(until.titleContains('LinkedIn'), 1000)
    const signInbutton = await driver.findElement(By.xpath('//*[@id="main-content"]/section[1]/div/div/a'))
    if(signInbutton){
        await signInbutton.click()
        await driver.wait(until.elementLocated(By.id('username')), 1000)
    }
    await login()
    await searchPeople()
    for (let i = 1; i < 8; i++) {
      try {
        console.log(i)
        const button = await driver.wait(
          until.elementLocated(By.xpath(`//ul/li[${i}]//button[contains(., 'Connect') or contains(., 'Message')]`)),
          5000 // Wait up to 5 seconds
        );
       
        const buttonText = await button.getText();
        console.log(buttonText, 'buttonText');

        if (buttonText !== 'Message') {
          try {
            console.log('Attempting to connect...')
            await userProfile(i);
          } finally {
            await driver.navigate().back();
            // await driver.wait(until.elementLocated(By.xpath(`/html/body/div[5]/div[3]/div[2]/div/div[1]/main/div/div/div[3]/div/ul/li[${i}]/div/div/div/div[3]/div/div/button/span`)), 5000);
          }
        } else {
          console.log('Already connected');
        }
      } catch (err) {
        console.error(`Error processing list item ${i}:`, err);
      }
    }

  } catch (err) {
    console.error(err)
  } finally {
    // await driver.quit()
  }
})()