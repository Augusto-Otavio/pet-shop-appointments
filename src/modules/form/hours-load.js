import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { scheduleDay } from "../schedules/load.js"

export function hoursLoad({ date, dailySchedules }) {
  const unavailableHours = dailySchedules.map(schedule =>
    dayjs(schedule.selectedHour, "HH:mm").format("HH:mm")
  )

  const availableHours = openingHours.map(hour => {
    const isHourPast = dayjs(`${date}T${hour}`).isBefore(dayjs())
    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available
    }
  })

  return availableHours
}
