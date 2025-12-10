import { scheduleFetchByDay } from "../../services/schedules-fetch-by-day.js"
import { scheduleShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export async function scheduleDay() {
  const date = selectedDate.value

   const dailySchedules = await scheduleFetchByDay({ date })

   scheduleShow({ dailySchedules })

  hoursLoad({date, dailySchedules })
}