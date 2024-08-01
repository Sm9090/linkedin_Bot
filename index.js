const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const build = require('./driver.build')
const login = require('./login');
const searchPeople = require('./searchPeople');
const fetchData = require('./fetchData');

;(async function example() {
    let driver = await build
  
  try {
    await driver.get('https://www.google.com/ncr')
    await driver.findElement(By.name('q')).sendKeys('linkdin', Key.RETURN)
    await driver.wait(until.titleIs('linkdin - Google Search'), 1000)
    await driver.findElement(By.partialLinkText('LinkedIn')).click()
    await driver.wait(until.titleContains('LinkedIn'), 1000)
    await driver.findElement(By.xpath('//*[@id="main-content"]/section[1]/div/div/a')).click()
    await driver.wait(until.elementLocated(By.id('username')), 1000)

    await login()
    await searchPeople()
    await fetchData()

  } catch (err) {
    console.error(err)
  } finally {
    // await driver.quit()
  }
})()