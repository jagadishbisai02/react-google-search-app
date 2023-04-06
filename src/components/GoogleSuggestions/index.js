import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onInputFind = event => {
    this.setState({searchInput: event.target.value})
  }

  updateInput = props => {
    this.setState({searchInput: props})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const findValue = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google"
            className="google-card"
          />
          <div className="search-card-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-card"
              />
              <input
                placeholder="Search Google"
                type="search"
                className="search-input"
                value={searchInput}
                onChange={this.onInputFind}
              />
            </div>
            <ul className="suggest-card">
              {findValue.map(eachItem => (
                <SuggestionItem
                  searchResult={eachItem}
                  key={eachItem.id}
                  updateInput={this.updateInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
