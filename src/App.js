import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import ContactItem from './components/ContactItem'

import './App.css'

class App extends Component {
  state = {
    contactsList: [],
    name: '',
    location: '',
  }

  onDelete = id => {
    this.setState(prevState => ({
      contactsList: prevState.contactsList.filter(
        eachContact => eachContact.id !== id,
      ),
    }))
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, location} = this.state
    const newContact = {
      id: uuidv4(),
      name,
      location,
    }

    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newContact],
      name: '',
      location: '',
    }))
  }

  onChangeLocation = event => {
    this.setState({location: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, location, contactsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <input
              className="input"
              value={location}
              onChange={this.onChangeLocation}
              placeholder="Location"
            />
            <button type="submit" className="button">
              Add Contact
            </button>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell location-column">Location</p>
              <hr className="separator" />
              <p className="table-header-cell">Action</p>
            </li>
            {contactsList.map(eachContact => (
              <ContactItem
                key={eachContact.id}
                contactDetails={eachContact}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
