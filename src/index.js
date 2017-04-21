import webdriver, {By, until} from 'selenium-webdriver'
import {USERNAME, PASSWORD} from './.env'
import {loginPath, passwordPath, loginButtonPath} from './paths'

const driver = new webdriver.Builder().forBrowser('chrome').build()

driver.get('http://www.instagram.com')
driver.findElement(By.className('_fcn8k')).click()

const login = driver.findElement(By.xpath(loginPath))
const password = driver.findElement(By.xpath(passwordPath))
const loginButton = driver.findElement(By.xpath(loginButtonPath))
driver.wait(until.elementIsVisible(login), 100)
login.sendKeys(USERNAME)
password.sendKeys(PASSWORD)
loginButton.click()
