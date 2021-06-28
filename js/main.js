const buttons = document.querySelectorAll("[data-button-target]")

buttons.forEach(button => button.addEventListener('click', _ => {
  const target = button.dataset.buttonTarget
  const menu = document.querySelector(target)
  menu.classList.toggle("active")
  button.classList.toggle("active")
})
)
