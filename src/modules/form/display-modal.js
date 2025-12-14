const btn = document.getElementById("button-appoinment")
const modal = document.getElementById("modal-appointment")
const blur = document.querySelector(".blur-background")
const input = document.querySelector("input[type=text]")
const cancel = document.getElementById("cancel")

export function hideModalAndBlur() {
  modal.classList.add("none")
  blur.classList.add("none")
}

export function showModalAndBlur() {
  modal.classList.remove("none")
  blur.classList.remove("none")
}

btn.onclick = (e) => {
  e.preventDefault()
  showModalAndBlur()
  input.focus()
}

blur.onclick = (e) => {
  e.preventDefault()
  hideModalAndBlur()
}
