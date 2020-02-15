const animation = (el, animation, duration) => {
  const element = document.querySelector(el)
  if (!element.style.animation) {
    element.style.animation = `${animation} ${duration}`
  } else {
    element.removeAttribute('style')
    setTimeout(() => {
      element.style.animation = `${animation} ${duration}`
    }, 30)
  }
}


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
