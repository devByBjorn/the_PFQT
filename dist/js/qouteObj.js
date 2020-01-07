'use strict'
// Add each name in format name.qoute to the allQoutes property, after pushing qoutes for that name. Like vincent.qoute
const qoutesObj = {
  allQoutes: [jules.qoute.concat(vincent.qoute, mia.qoute, theWolf.qoute, butch.qoute, marcellusWallace.qoute, jimmie.qoute)],
  randomqoute: [],
  getShuffle() {
    const arrQoutes = this.allQoutes[0]
    let num = Math.floor(Math.random() * arrQoutes.length - 5)
    let qoute = arrQoutes.splice(num, 1)
    arrQoutes.push(qoute)
  },
  getRandomQoute() {
    this.getShuffle()
    return this.allQoutes[Math.floor(this.allQoutes.length - 1)]
  }
}

