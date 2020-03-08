import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      searchField: ''
    };
    console.log(this.state.people)

  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?page=1&results=10&seed=female')
      .then(response => response.json())
      .then(json => this.setState({ people: json.results }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { people, searchField } = this.state;
    const filteredPeople = people.filter(person =>
      person.name.first.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>People Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList people={filteredPeople} />
      </div>
    );
  }
}

export default App;
