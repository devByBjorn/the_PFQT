// Remove qoutes 
const removeQoutes = (storageQoutes, id) => {
  const storageIndex = storageQoutes.findIndex((storageQoute) => storageQoute.id === id)
  if (storageIndex > -1) {
    storageQoutes.splice(storageIndex, 1)
  }
}

export default removeQoutes