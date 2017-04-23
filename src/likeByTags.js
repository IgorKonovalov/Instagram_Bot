import {TAGS} from './config'
import {By, until, promise, sleep} from 'selenium-webdriver'

export default function(driver) {
  let likes = 0
	TAGS.forEach(tag => {
		driver.sleep(2000)
		driver.get(`https://www.instagram.com/explore/tags/${tag}`)

		const pendingElements = driver.findElements(By.className('_ovg3g'))

		pendingElements.then(elements => {
			promise
				.all(elements)
				.then(elem => {
					elem.forEach(elem => {
						elem.click()
						driver.sleep(3000)
						driver
							.findElement(
								By.xpath(
									'/html/body/div[2]/div/div[2]/div/article/div[2]/section[1]/a[1]'
								)
							)
							.click()
						driver.findElement(By.className('_3eajp')).click()
            likes ++
					})
				})
				.catch(err => console.log(err))
		})
	})
  console.log(likes)
}

// TAGS.forEach(tag => {
//   driver.get(`https://www.instagram.com/explore/tags/${tag}`)

// })
