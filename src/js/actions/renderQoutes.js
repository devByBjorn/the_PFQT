// render qoutes
export const renderQoutes = (storageQoutes, currentQouteDOM, id) => {
  document.getElementById(id).innerHTML = ''

  return storageQoutes.map((qoute) => {
    const qoutes = currentQouteDOM(qoute)
    document.getElementById(id).appendChild(qoutes)
  })
}


export default renderQoutes