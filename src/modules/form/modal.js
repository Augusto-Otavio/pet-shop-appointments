const btn = document.getElementById("button-appoinment")
const modal = document.getElementById("modal-appointment")
const blur = document.querySelector(".blur-background")
const input = document.querySelector("input[type=text]")
const cancel = document.getElementById("cancel")

btn.onclick = (e) => {
  e.preventDefault()
  modal.classList.remove("none")
  blur.classList.remove("none")
  input.focus()
}

cancel.onclick = (e) => {
  e.preventDefault()
  modal.classList.add("none")
  blur.classList.add("none")
}
