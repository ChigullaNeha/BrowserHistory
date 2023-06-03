import './index.css'

const BrowserHistory = props => {
  const {historyDetails, onDeleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const deletehistory = () => {
    onDeleteUser(id)
  }
  return (
    <li className="li-container">
      <div className="first-li-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button
          data-testid="delete"
          type="button"
          className="btn"
          onClick={deletehistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserHistory
