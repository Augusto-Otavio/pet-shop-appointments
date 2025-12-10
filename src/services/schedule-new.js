import { apiConfig } from "./api-config.js";

export async function scheduleNew(appointment) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(appointment)
    })

  } catch(error) {
    console.log(error)
    alert("Não foi possível agendar. Tente novamente mais tarde.")
  }
}