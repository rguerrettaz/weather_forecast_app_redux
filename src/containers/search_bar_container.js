import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBarContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' };

    // Bindings should be extracted to a BaseComponent
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(e) {
    this.setState({term: e.target.value})
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term)
    // Reset state to cause component to re-render
    this.setState({term: ''})

    // Go fetch weather data
  }

  render() {
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forecast for your favorite city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}

// Gives us access to this.props.fetchWeather
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Pass null because the first argument is always state, props is next
export default connect(null, mapDispatchToProps)(SearchBarContainer);