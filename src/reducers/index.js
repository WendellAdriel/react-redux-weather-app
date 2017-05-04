import { combineReducers } from 'redux'

import weather from './weather-reducer'

const rootReducer = combineReducers({
  weather
})

export default rootReducer
