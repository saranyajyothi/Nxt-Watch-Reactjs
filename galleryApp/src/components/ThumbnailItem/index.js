// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const thumbnailClassname = isActive ? `thumbnail active` : `thumbnail`

  const onclickBtn = () => {
    setActiveThumbId(id)
  }

  return (
    <li className="list-container">
      <button type="button" className="button" onClick={onclickBtn}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassname}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
