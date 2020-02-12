//Pushing data to createdQoutes and displaying created qoute to screen
document.querySelector('#add-created').addEventListener('click', () => {

  const text = document.querySelector('#qoute-text').value
  const sign = document.querySelector('#signature').value

  const qouteId = uuidv4()
  createdQoutes.unshift({
    qouteText: `"${text}"`,
    signature: `-${sign}`,
    id: qouteId
  })

  saveQoutes(createdQoutes, 'createdQoutes')
  renderQoutes(createdQoutes, '#created-qoutes')
})

// DOM structure of qoute container
const createdQouteDOM = (qoute) => {
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
  removeButton.textContent = 'delete'
  removeButton.setAttribute('class', 'delete')
  qouteEl.appendChild(removeButton)
  // buttonContainer.appendChild(removeButton)
  removeButton.addEventListener('click', () => {
    removeQoute(createdQoutes, qoute.id)
    saveQoutes(createdQoutes, 'createdQoutes')
    renderQoutes(createdQoutes, '#created-qoutes')
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
    renderQoutes(createdQoutes, '#created-qoutes')
  })

  // Default text for qoute if no value
  qoute.qouteText === "\"\"" ? qouteText.textContent = '"Click to edit"' : qouteText.textContent = `${qoute.qouteText}`

  // Default text for signature if no value
  qoute.signature === '-' ? nameSignature.textContent = '- Name goes here' : nameSignature.textContent = qoute.signature

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

//Make sure changes happen simultaneous ov multiple windows
window.addEventListener('storage', (e) => {
  if (e.key === 'createdQoutes') {
    createdQoutes = JSON.parse(e.newValue)
    renderQoutes(createdQoutes, '#created-qoutes')
  }
})

window.addEventListener('load', () => {
  renderQoutes(createdQoutes, '#created-qoutes')
})
