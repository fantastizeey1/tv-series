import React, {Component} from 'react';
import Main from '../main';
import './App.css';
import 'whatwg-fetch';
class App extends Component {
  state = {
    series: []
  }

  componentDidMount() {
    fetch(`https://api.tvmaze.com/search/shows?q=friends`)
      .then((response) => response.json())
      .then((json) => this.setState({ series: json }))
      .catch((error) => console.error('Error fetching data:', error));
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='App-title'>Tv Series Finder</h1>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
