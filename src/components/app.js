import React from 'react';
import { Component } from 'react';

import SearchBarContainer from '../containers/search_bar_container'
import WeatherListContainer from '../containers/weather_list_container'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBarContainer />
        <WeatherListContainer />
      </div>
    );
  }
}
