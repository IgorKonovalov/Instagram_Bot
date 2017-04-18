import webdriver, {By, until} from 'selenium-webdriver'

const driver = new webdriver.Builder().forBrowser('chrome').build()

driver.get('http://www.instagram.com')
driver.findElement(By.className('_fcn8k')).click()
// driver.findElement(By.name('btnG')).click()
// driver.wait(until.titleIs('webdriver - Google Search'), 10000)
// driver.quit()
