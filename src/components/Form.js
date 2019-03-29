import React, { Component } from 'react';

class Form extends Component {
  state = {
    title: ''
  };

  titleChanged = title => {
    this.setState({
      title
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchTerm = this.state.title;
    this.props.getData(searchTerm);
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          placeholder="enter a book..."
          value={this.state.title}
          onChange={e => this.titleChanged(e.target.value)}
        />
        <button type="submit">Search</button>
        <label>Print Type:</label>
        <select>
          <option value="all">All</option>
        </select>
        <label>Book Type:</label>
        <select>
          <option>No Filter</option>
        </select>
      </form>
    );
  }
}

export default Form;
