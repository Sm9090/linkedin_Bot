
const { until ,Key ,By } = require('selenium-webdriver')
const build = require('./driver.build')
const env = require('dotenv').config()

async function login() {
    let driver = await build
    try {

    await driver.findElement(By.id('username')).sendKeys(process.env.LINKDIN_USERNAME)
    await driver.findElement(By.id('password')).sendKeys(process.env.LINKDIN_PASSWORD)
    driver.sleep(10000)
    await driver.findElement(By.xpath('//*[@id="organic-div"]/form/div[3]/button')).click()
    await driver.wait(until.titleContains('LinkedIn'), 1000)

        
    } catch (err) {
        console.error(err)
    } 

    
}

module.exports = login