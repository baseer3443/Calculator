let strings = ""
let buttons = document.querySelectorAll('.button')

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.innerHTML == "=") {
      strings = eval(strings)
      document.querySelector('input').value = strings
    }
    else if (e.target.innerHTML == "C") {
      strings = ""
      document.querySelector('input').value = strings
    }
    else {
      strings = strings + e.target.innerHTML
      document.querySelector('input').value = strings
    }
  })
})