const { Builder, Browser} = require('selenium-webdriver')


let build = new Builder().forBrowser(Browser.CHROME).build()

module.exports = build