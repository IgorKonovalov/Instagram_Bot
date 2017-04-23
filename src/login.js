import {loginPath, passwordPath, loginButtonPath} from './config'
import {USERNAME, PASSWORD} from './.env'
import {By, until} from 'selenium-webdriver'

export default function(driver) {
  driver.findElement(By.className('_fcn8k')).click()

  const login = driver.findElement(By.xpath(loginPath))
  const password = driver.findElement(By.xpath(passwordPath))
  const loginButton = driver.findElement(By.xpath(loginButtonPath))

  driver.wait(until.elementIsVisible(login), 100)
  login.sendKeys(USERNAME)
  password.sendKeys(PASSWORD)
  loginButton.click()
}
