// Generate new qoute on click
const generateQoute = () => {
  const qoute = document.querySelector('#the-qoute')
  qoute.innerHTML = qoutesObj.getRandomQoute().slice(-1)[0]
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
  console.log(qoutes)

  if (qoutes.length !== 0) {
    qoutes.filter((qoute) => {
      if (qoute.qouteText.includes(favorite)) {
        favoriteQoutes.pop({
          qouteText: favorite,
          id: favoriteId
        })
      }
    })
  } else {
    favoriteQoutes.push({
      qouteText: favorite,
      id: favoriteId
    })
  }



  saveQoutes(favoriteQoutes, 'favoriteQoutes')
})

