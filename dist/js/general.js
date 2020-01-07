const getQoutes = (item) => {
  const qoutesJSON = localStorage.getItem(item)
  try {
    return qoutesJSON ? JSON.parse(qoutesJSON) : []
  } catch (e) {
    return []
  }
}

let favoriteQoutes = getQoutes('favoriteQoutes')
let createdQoutes = getQoutes('createdQoutes')

const renderQoutes = (storageQoutes, id) => {
  document.querySelector(id).innerHTML = ''
  const page = window.location.hash.substring(1)
  storageQoutes.forEach((qoute) => {

    if (page === 'favorites') {
      const favoriteQoute = favoriteQouteDOM(qoute)
      document.querySelector(id).appendChild(favoriteQoute)
    } else if (page === 'create') {
      const createQoute = createdQouteDOM(qoute)
      document.querySelector(id).appendChild(createQoute)
    }
  })
}

const removeQoute = (storageQoutes, id) => {
  const storageIndex = storageQoutes.findIndex((storageQoute) => storageQoute.id === id)
  if (storageIndex > -1) {
    storageQoutes.splice(storageIndex, 1)
  }
}

// Save qoute 
const saveQoutes = (storageQoutes, item) => localStorage.setItem(item, JSON.stringify(storageQoutes))