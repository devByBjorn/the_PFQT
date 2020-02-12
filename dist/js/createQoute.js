//Pushing data to createdQoutes and displaying created qoute to screen
document.querySelector('#add-created').addEventListener('click', (e) => {

  e.preventDefault()

  const text = document.querySelector('#qoute-text').value
  const sign = document.querySelector('#signature').value

  const qouteId = uuidv4()
  createdQoutes.unshift({
    qouteText: `"${text}"`,
    signature: `-${sign}`,
    id: qouteId
  })

  saveQoutes(createdQoutes, 'createdQoutes')
})

