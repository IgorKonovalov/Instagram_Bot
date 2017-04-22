import webdriver from 'selenium-webdriver'
import login from './login'
import likeByTags from './likeByTags'

const chromeCapabilities = webdriver.Capabilities.chrome()
const chromeOptions = {
	args: ['--dns-prefetch-disable', '--no-sandbox', '--lang=en-US']
}
chromeCapabilities.set('chromeOptions', chromeOptions)

const driver = new webdriver.Builder()
	.withCapabilities(chromeCapabilities)
	.build()

driver.get('http://www.instagram.com')
login(driver)
driver.manage().timeouts().setScriptTimeout(30);
likeByTags(driver)
