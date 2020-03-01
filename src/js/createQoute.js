'use strict'
import animation from './actions/animation'
import { saveQoutes, createdQoutes } from './actions/storageActions'
import uuidv4 from '../uuidv4/uuidv4'

//Pushing data to createdQoutes and displaying created qoute to screen
document.querySelector('#add-created').addEventListener('click', (e) => {
  e.preventDefault()

  const text = document.querySelector('#qoute-text')
  const sign = document.querySelector('#signature')

  if (text.value === "") {
    animation('#qoute-text', 'shake', '1.5s')
    return
  } else if (sign.value === "") {
    animation('#signature', 'shake', '1.5s')
    return
  } else {
    const qouteId = uuidv4()
    createdQoutes.unshift({
      qouteText: `"${text.value}"`,
      signature: `-${sign.value}`,
      id: qouteId
    })
    text.value = ""
    sign.value = ""
    saveQoutes(createdQoutes, 'createdQoutes')
    animation('#qoute-text', 'bump', '1s')
    animation('.blink', 'blink', '2s')
  }
})
