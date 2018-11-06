import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'person1', name: 'Max', age: 28 },
      { id: 'person2', name: 'Roger', age: 38 },
      { id: 'person3', name: 'Xavier', age: 47 },
      { id: 'person4', name: 'Jordi', age: 43 },
      { id: 'person5', name: 'Bru', age: 2 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
   
  nameChangeHandler =  (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = { 
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person
 
    this.setState({persons: persons}) 
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
      backgroundColor: 'green',
      color: 'white',
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
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div> 
      )

      style.backgroundColor = 'red'
        }

    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <=1) {
      classes.push('bold')
    }
  
    return (
      <div className="App">
        <h1>Hi! I am a react app!! yessss</h1>
        <p className={classes.join(' ')}>This is Really working</p>
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
