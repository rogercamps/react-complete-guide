import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Roger', age: 38 },
      { name: 'Xavier', age: 47 },
      { name: 'Jordi', age: 43 },
      { name: 'Bru', age: 2 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  
  nameChangeHandler =  (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Roger', age: 38 },
        { name: 'Xavier', age: 47 },
        { name: 'Jordi', age: 43 },
        { name: 'Brunet', age: 2 }
      ]
    }) 
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi! I am a react app!! yessss</h1>
        <p>This is Really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1',{className: 'App'},'Hi! I am a react app!! yessss'))
  }
}

export default App;
