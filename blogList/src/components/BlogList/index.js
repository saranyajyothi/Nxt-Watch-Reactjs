// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {list} = props
  return (
    <ul>
      {list.map(each => (
        <BlogItem details={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
