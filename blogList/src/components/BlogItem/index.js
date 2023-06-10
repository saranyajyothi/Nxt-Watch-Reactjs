// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, publishedDate, description} = details
  return (
    <li>
      <div className="title">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </li>
  )
}
export default BlogItem
