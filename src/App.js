import React, { Component } from 'react';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

class App extends Component {
  state = {
    isLoading: false,
    results: []
  };

  getData(searchTerm) {
    this.goFetch(searchTerm);
  }

  goFetch(searchTerm) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({ results: responseJson.items });
      });
  }

  render() {
    return (
      <div className="container">
        <nav>
          <h1>Google Book Search</h1>
        </nav>
        <main>
          <Form getData={searchTerm => this.getData(searchTerm)} />
          <Results results={this.state.results} />
        </main>
      </div>
    );
  }
}

export default App;
