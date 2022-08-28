import AOS from 'aos'

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    AOS.init()
  }
}
