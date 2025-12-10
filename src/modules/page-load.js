import { scheduleDay } from "./schedules/load.js"
import dayjs from "dayjs"

document.addEventListener("DOMContentLoaded", function() {
  const selectedDate = document.getElementById("date")
  selectedDate.value = dayjs().format("YYYY-MM-DD")

  scheduleDay()
})
