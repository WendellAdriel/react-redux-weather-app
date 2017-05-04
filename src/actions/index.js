import axios from 'axios'

import { API_URL } from '../config'

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (city) {
  const url = `${API_URL}&q=${city}&units=metric`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
