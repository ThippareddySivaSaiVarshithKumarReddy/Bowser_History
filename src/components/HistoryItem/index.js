import './index.css'

const HistoryItem = props => {
  const {eachItem, onDeleteItem} = props
  const {title, domainUrl, logoUrl, id, timeAccessed} = eachItem
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="each-history-container">
      <div className="time-accessed-text-container">
        <p className="time-accessed-text">{timeAccessed}</p>
      </div>
      <div className="logo-container">
        <img src={logoUrl} alt="domain logo" className="logo-image" />
        <div className="text-delete-container">
          <div className="text-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
          <button
            type="button"
            className="delete-button"
            data-testid="delete"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-logo"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
