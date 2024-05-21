import Blogs from "./Blogs/Blogs"
import Blog_Img from "./Blog_Img/Blog_Img"
import Categories from "./Categories/Categories"
import './Blog.css'




const Blog = () => {
  return (
    <div className="Container">
      <div className="title">
        <Blogs />
      </div>
      <div className="Blog_Filter">
        <Blog_Img />
        <Categories />
      </div>
    </div>
  )
}
export default Blog