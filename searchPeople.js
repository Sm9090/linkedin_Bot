const { By , until , Key } = require("selenium-webdriver")
const build = require("./driver.build")



async function searchPeople() {
    let driver = await build
    try {
        await driver.findElement(By.xpath('//*[@id="global-nav-typeahead"]/input')).sendKeys('Shahraim khan', Key.RETURN)
        driver.sleep(10000)
        await driver.wait(until.titleContains('Shahraim khan'), 10000)

        await driver.wait(until.elementLocated(By.text('People')), 2000)
        await driver.findElement(By.xpath('People')).click()
        // await driver.wait(until.titleContains('linkedin'), 10000)
    } catch (err) {
        console.error(err)
    } 
}

module.exports = searchPeople