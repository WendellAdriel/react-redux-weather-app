import axios from 'axios'

import { API_URL } from '../config/config'

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (city) {
  const url = `${API_URL}&q=${city},us`
  const request = axios.get(url)
  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
