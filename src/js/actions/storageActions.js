'use strict'
// get qoutes from localStorage if any
export const getQoutes = (item) => {
  const qoutesJSON = localStorage.getItem(item)
  try {
    return qoutesJSON ? JSON.parse(qoutesJSON) : []
  } catch (e) {
    return []
  }
}

export let favoriteQoutes = getQoutes('favoriteQoutes')
export let createdQoutes = getQoutes('createdQoutes')

// Save qoute 
export const saveQoutes = (storageQoutes, item) => localStorage.setItem(item, JSON.stringify(storageQoutes))