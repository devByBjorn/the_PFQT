'use strict'
import { saveQoutes, favoriteQoutes } from './actions/storageActions'
import removeQoutes from './actions/removeQoutes'
import renderQoutes from './actions/renderQoutes'

const favoriteQouteDOM = (qoute) => {
  // Container div
  const qouteEl = document.createElement('div')
  qouteEl.setAttribute('class', 'qoute-container')
  qouteEl.setAttribute('id', qoute.id)

  // Qoute Text
  const qouteText = document.createElement('h3')
  qouteText.innerHTML = qoute.qouteText
  qouteText.setAttribute('class', 'favorite-qoute')
  qouteEl.appendChild(qouteText)

  // Button container div
  const buttonContainer = document.createElement('div')
  buttonContainer.setAttribute('class', 'button-container')
  qouteEl.appendChild(buttonContainer)

  // Remove button
  const removeButton = document.createElement('button')
  removeButton.innerHTML = '<span>&times;</span>'
  removeButton.setAttribute('class', 'delete')
  qouteEl.appendChild(removeButton)
  removeButton.addEventListener('click', () => {
    removeQoutes(favoriteQoutes, qoute.id)
    saveQoutes(favoriteQoutes, 'favoriteQoutes')
    renderQoutes(favoriteQoutes, favoriteQouteDOM, 'favorite-qoutes')
  })

  return qouteEl
}

window.addEventListener('storage', (e) => {
  if (e.key === 'favoriteQoutes') {
    favoriteQoutes = JSON.parse(e.newValue)
    renderQoutes(favoriteQoutes, favoriteQouteDOM, 'favorite-qoutes')
  }
})

window.addEventListener('load', () => {
  renderQoutes(favoriteQoutes, favoriteQouteDOM, 'favorite-qoutes')
})

export default favoriteQouteDOM