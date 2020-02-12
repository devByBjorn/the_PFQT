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
  removeButton.textContent = 'delete'
  removeButton.setAttribute('class', 'delete')
  qouteEl.appendChild(removeButton)
  removeButton.addEventListener('click', () => {
    removeQoute(favoriteQoutes, qoute.id)
    saveQoutes(favoriteQoutes, 'favoriteQoutes')
    renderQoutes(favoriteQoutes, '#favorite-qoutes')
  })

  return qouteEl
}

window.addEventListener('storage', (e) => {
  if (e.key === 'favoriteQoutes') {
    favoriteQoutes = JSON.parse(e.newValue)
    renderQoutes(favoriteQoutes, '#favorite-qoutes')
  }
})

window.addEventListener('load', () => {
  renderQoutes(favoriteQoutes, '#favorite-qoutes')
})
