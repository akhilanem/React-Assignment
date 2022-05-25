import './index.css'

const ContactItem = props => {
  const {contactDetails, onDelete} = props
  const {id, name, location} = contactDetails

  const onDeleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p className="name-value">{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell location-column">
        <p className="location-value">{location}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell delete-column">
        <button
          className="delete-button"
          onClick={onDeleteButton}
          type="button"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default ContactItem
