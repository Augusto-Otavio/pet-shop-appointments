import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon") 
const periodNight = document.getElementById("period-night")

export function scheduleShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    dailySchedules.forEach((schedule, index) => {
      const item = document.createElement("li")
      const appointmentInformation = document.createElement("div")
      const hour = document.createElement("strong")
      const petName = document.createElement("span")
      const separate = document.createElement("div")
      const ownerName = document.createElement("span")
      const serviceDescription = document.createElement("span")
      const remove = document.createElement("span")

      item.setAttribute("data-id", schedule.id)
      item.classList.add("owner-content")

      appointmentInformation.classList.add("appointment-information")
      hour.textContent = dayjs(`${schedule.selectedDate}T${schedule.selectedHour}`).format("HH:mm")
      hour.classList.add("appointment-date")

      petName.textContent = schedule.petName
      petName.classList.add("pet-name")

      separate.textContent = "/"
      separate.classList.add("separate")

      ownerName.textContent = schedule.tutorName
      ownerName.classList.add("owner-name")

      serviceDescription.textContent = schedule.serviceDescription
      serviceDescription.classList.add("service-name")

      remove.textContent = "Remover agendamento"
      remove.classList.add("remove-appointment")

      appointmentInformation.append(hour, petName, separate, ownerName)
      item.append(appointmentInformation, serviceDescription, remove)

      const hourNumber = dayjs(`${schedule.selectedDate}T${schedule.selectedHour}`).hour()

      let targetPeriod
      if (hourNumber <= 12) {
        targetPeriod = periodMorning
      } else if (hourNumber > 12 && hourNumber <= 18) {
        targetPeriod = periodAfternoon
      } else {
        targetPeriod = periodNight
      }

      targetPeriod.appendChild(item)

      if (index < dailySchedules.length - 1) {
        const diviser = document.createElement("div")
        diviser.classList.add("period-diviser")
        targetPeriod.appendChild(diviser)
      }
    })

  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}
