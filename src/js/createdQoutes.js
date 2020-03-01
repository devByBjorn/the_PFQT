'use strict'
import { saveQoutes, createdQoutes } from './actions/storageActions.js'
import removeQoutes from './actions/removeQoutes'
import renderQoutes from './actions/renderQoutes'

// DOM structure of qoute container
export const createdQouteDOM = (qoute) => {
  // Container div
  const qouteEl = document.createElement('div')
  qouteEl.setAttribute('class', 'qoute-container')
  qouteEl.setAttribute('id', qoute.id)

  // Qoute Text
  const qouteText = document.createElement('h3')
  qouteText.setAttribute('class', 'created-qoute')
  qouteText.setAttribute('contenteditable', 'true')
  qouteEl.appendChild(qouteText)

  // Signature text
  const nameSignature = document.createElement('p')
  nameSignature.setAttribute('class', 'signature')
  nameSignature.setAttribute('contenteditable', 'true')
  qouteEl.appendChild(nameSignature)

  // Remove button
  const removeButton = document.createElement('button')
  removeButton.innerHTML = '<span>&times;</span>'
  removeButton.setAttribute('class', 'delete')
  qouteEl.appendChild(removeButton)

  removeButton.addEventListener('click', () => {
    removeQoutes(createdQoutes, qoute.id)
    saveQoutes(createdQoutes, 'createdQoutes')
    renderQoutes(createdQoutes, createdQouteDOM, 'created-qoutes')
  })

  // Save button
  const saveEditButton = document.createElement('button')
  saveEditButton.setAttribute('class', 'save-edit')
  saveEditButton.textContent = 'save edit'
  qouteEl.appendChild(saveEditButton)

  // save and render contenteditable on save button click
  saveEditButton.addEventListener('click', (e) => {
    saveEdited(qouteEl, qoute)
    saveQoutes(createdQoutes, 'createdQoutes')
    renderQoutes(createdQoutes, createdQouteDOM, 'created-qoutes')
  })

  // Default text for qoute if no value
  qoute.qouteText === "\"\"" ? qouteText.textContent = '"Click to edit"' : qouteText.textContent = `${qoute.qouteText}`

  // Default text for signature if no value
  qoute.signature === '-' ? nameSignature.textContent = '- Signature' : nameSignature.textContent = qoute.signature

  return qouteEl
}

// Saving edited qoutes
const saveEdited = (element, qoute) => {
  const editEl = document.getElementById(`${element.id}`)
  const textEdit = editEl.childNodes[0].textContent
  const signEdit = editEl.childNodes[1].textContent

  qoute.qouteText = `${textEdit}`
  qoute.signature = signEdit
}

//Make sure changes happen simultaneous on multiple windows
window.addEventListener('storage', (e) => {
  if (e.key === 'createdQoutes') {
    createdQoutes = JSON.parse(e.newValue)
    renderQoutes(createdQoutes, createdQouteDOM, 'created-qoutes')
  }
})

window.addEventListener('load', () => {
  renderQoutes(createdQoutes, createdQouteDOM, 'created-qoutes')
})

export default createdQouteDOM