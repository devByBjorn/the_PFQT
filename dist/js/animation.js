
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