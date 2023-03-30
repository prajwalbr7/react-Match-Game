import './TabItem.css'

const TabItems = props => {
  const {TabDetails, onClickTabs, isActive} = props
  const {displayText, tabId} = TabDetails
  const Data = () => {
    onClickTabs(tabId)
  }
  const colorChange = isActive ? 'yellowShades' : ''

  return (
    <li className="list-container">
      <button
        className={`button-style ${colorChange}`}
        type="button"
        onClick={Data}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
