'use strict'
import animation from './actions/animation'
import { saveQoutes, favoriteQoutes } from './actions/storageActions'
import qouteObj from './actions/qouteObj'
import uuidv4 from '../uuidv4/uuidv4'

// Generate new qoute on click
const generateQoute = () => {
  const qoute = document.querySelector('#the-qoute')
  qoute.innerHTML = qouteObj.getRandomQoute().slice(-1)[0]
}

document.querySelector('#qoute-button').addEventListener('click', generateQoute)

// Generate new qoute on load
window.addEventListener('load', generateQoute)

// Save favorite to local storage
document.querySelector('#like-button').addEventListener('click', () => {
  const favorite = document.querySelector('#the-qoute').innerHTML
  const favoriteId = uuidv4()

  const json = localStorage.getItem('favoriteQoutes')
  const qoutes = JSON.parse(json)

  if (qoutes) {
    const duplicate = qoutes.find((qoute) => qoute.qouteText === favorite)

    if (duplicate) {
      animation('#qoute-button', 'shake', '1s')
      return
    }
  }

  favoriteQoutes.unshift({
    qouteText: favorite,
    id: favoriteId
  })
  animation('#the-qoute', 'bump', '1s')
  animation('.blink', 'blink', '2s')
  saveQoutes(favoriteQoutes, 'favoriteQoutes')
})
