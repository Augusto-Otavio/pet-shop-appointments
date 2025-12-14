import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { scheduleDay } from "../schedules/load.js"
import { hideModalAndBlur } from "../form/display-modal.js"

const form = document.querySelector("form")
const tutorName = document.getElementById("name-of-tutor")
const petName = document.getElementById("name-of-pet")
const phone = document.getElementById("phone")
const serviceDescription = document.getElementById("service-description")
const modal = document.getElementById("modal-appointment")
const blur = document.querySelector(".blur-background")

const selectedDate = document.getElementById("modal-date")
const selectedHour = document.getElementById("hour")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
const nowHour = dayjs(new Date()).format("HH:mm")

selectedDate.min = inputToday

selectedDate.onchange = () => {
  if (selectedDate.value === inputToday) {
    selectedHour.min = nowHour
    selectedHour.value = nowHour
  } else {
    selectedHour.value = "09:00"
  }
}

selectedHour.onchange = () => {
  const fullDateTime = dayjs(`${selectedDate.value}T${selectedHour.value}`)
  if (fullDateTime.isBefore(dayjs())) {
    alert("Esse horário já passou, escolha outro.")
    selectedHour.value = ""
  }
}

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    const tutorNameValue = tutorName.value.trim()
    const petNameValue = petName.value.trim()
    const phoneValue = phone.value.trim()
    const serviceDescriptionValue = serviceDescription.value.trim()
    const selectedHourValue = selectedHour.value
    const selectedDateValue = selectedDate.value

    if(!tutorNameValue) {
      return alert("Informe o nome do tutor corretamente!")
    }

    if (!petNameValue) {
      return alert("Informe o nome do pet corretamente ")
    }

    if(!selectedHourValue) {
      return alert("Selecione a hora.")
    }

    if(!phoneValue) {
      return alert("Digite o telefone.")
    }

    if(!serviceDescriptionValue) {
      return alert("Escreva a descrição do agendamento.")
    }

    const fullDateTime = dayjs(`${selectedDateValue} ${selectedHourValue}`, "YYYY-MM-DD HH:mm")
    if (fullDateTime.isBefore(dayjs())) {
      return alert("Esse horário já passou, escolha outro.")
    }


    const appointment = {
      id: new Date().getTime().toString(),
      tutorName: tutorNameValue,
      petName: petNameValue,
      phone: phoneValue,
      serviceDescription: serviceDescriptionValue,
      selectedDate: selectedDateValue,
      selectedHour: selectedHourValue, 
    }

    await scheduleNew(appointment)

    await scheduleDay()

    hideModalAndBlur()

  } catch (error) {
    alert("Não foi possível realizar o agendamento")
    console.log(error)
  }
}