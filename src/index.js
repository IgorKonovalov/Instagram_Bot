import webdriver, {By, until} from 'selenium-webdriver'
import {USERNAME, PASSWORD} from './.env'

const driver = new webdriver.Builder().forBrowser('chrome').build()
const loginPath =
	'//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/div[1]/input'
const passwordPath =
	'//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/div[2]/input'
const loginButtonPath =
	'//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/span[1]/button'

driver.get('http://www.instagram.com')
driver.findElement(By.className('_fcn8k')).click()

const login = driver.findElement(By.xpath(loginPath))
const password = driver.findElement(By.xpath(passwordPath))
const loginButton = driver.findElement(By.xpath(loginButtonPath))
driver.wait(until.elementIsVisible(login), 100)
login.sendKeys(USERNAME)
password.sendKeys(PASSWORD)
loginButton.click()
