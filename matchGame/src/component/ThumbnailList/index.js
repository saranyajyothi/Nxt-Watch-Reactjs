import './index.css'

const ThumbnailList = props => {
  const {item, matchPair} = props
  const {id, thumbnailUrl} = item
  const samePic = () => {
    matchPair(id)
  }
  return (
    <li className="item-cont">
      <button className="btn-thumb" type="button" onClick={samePic}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbnailList

// import './index.css'

// const ThumbnailList = props => {
//   const {item, matchPair} = props
//   const {id, thumbnailUrl} = item
//   const samePic = () => {
//     matchPair(id)
//   }

//   return (
//     <li className="item-container">
//       <button type="button" className="thumb-btn" onClick={samePic}>
//         <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
//       </button>
//     </li>
//   )
// }

// export default ThumbnailList
