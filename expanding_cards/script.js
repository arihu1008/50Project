const panels = document.querySelectorAll('.panel')
console.log(panels)
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    const activePanel = document.getElementsByClassName('panel active')

    activePanel[0].classList.remove('active')
    panel.classList.add('active')
  })
})
