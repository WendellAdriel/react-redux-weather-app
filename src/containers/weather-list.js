import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chart from '../components/chart'

class WeatherList extends Component {
  renderWeather (cityData) {
    const name = cityData.city.name
    const temp = cityData.list.map(weather => weather.main.temp)
    const pres = cityData.list.map(weather => weather.main.pressure)
    const humi = cityData.list.map(weather => weather.main.humidity)

    return (
      <tr key={ name }>
        <td>{ name }</td>
        <td><Chart data={ temp } color="red" width={ 180 } height={ 120 } units ="°C" /></td>
        <td><Chart data={ pres } color="green" width={ 180 } height={ 120 } units="hPa" /></td>
        <td><Chart data={ humi } color="blue" width={ 180 } height={ 120 } units="%" /></td>
      </tr>
    )
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
