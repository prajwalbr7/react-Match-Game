import './ThumbnailList.css'

const ThumbItems = props => {
  const {ThumbDetails, MatchGameClick} = props
  const {thumbnailUrl} = ThumbDetails
  const buttonChange = () => {
    MatchGameClick(thumbnailUrl)
  }
  return (
    <li className="list-thumbnail-container">
      <button className="button-thumbnail" type="button" onClick={buttonChange}>
        <img src={thumbnailUrl} alt="thumbnail" className="img-thumbnail" />
      </button>
    </li>
  )
}
export default ThumbItems
