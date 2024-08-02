
const { until ,Key ,By } = require('selenium-webdriver')
const build = require('./driver.build')
const env = require('dotenv').config()

async function login() {
    let driver = await build
    try {

        let usernameInput;
        try {
          usernameInput = await driver.findElement(By.id("username"));
        } catch (err) {
          usernameInput = await driver.findElement(By.id("session_key"));
        }
        await usernameInput.sendKeys(process.env.LINKDIN_USERNAME);
    
        let passwordInput;
        try {
          passwordInput = await driver.findElement(By.id("password"));
        } catch (err) {
          passwordInput = await driver.findElement(By.id("session_password"));
        }
        await passwordInput.sendKeys(process.env.LINKDIN_PASSWORD);
    
    driver.sleep(10000)
    await driver.findElement(By.xpath('//*[@id="organic-div"]/form/div[3]/button')).click()
    await driver.wait(until.titleContains('LinkedIn'), 10000)

        
    } catch (err) {
        console.error(err)
    } 

    
}

module.exports = login