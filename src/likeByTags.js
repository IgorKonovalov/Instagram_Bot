import {TAGS} from './config'
console.log(TAGS)

export default function(driver) {
  TAGS.forEach(tag => {
    driver.get(`https://www.instagram.com/explore/tags/${tag}`)
  })
}
