import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await response.json();

    const normalizedDate = dayjs(date).format("YYYY-MM-DD");

    const dailySchedules = data.filter(schedule =>
      dayjs(schedule.selectedDate).format("YYYY-MM-DD") === normalizedDate
    );

    return dailySchedules;
    
  } catch (error) {
    console.log(error);
    alert("Não foi possivel buscar os agendamentos do dia selecionado.");
  }
}
