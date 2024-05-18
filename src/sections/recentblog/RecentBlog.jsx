import { Blog } from "../../components";
import { Link } from "react-router-dom";
// import { blogData } from "../../constant";
import { useGlobalContext } from "../../context";
import "./RecentBlog.scss";

const RecentBlog = () => {
  const { blogData } = useGlobalContext();
  return (
    <section id="recent">
      <h1 className="section-title">Recent Blogs</h1>
      <article>
        {
          blogData?.data
            ?.map((blog, index) => (
              <Blog key={index} id={blog.id} {...blog?.attributes} />
            ))
            .slice(-3) // last 3 blogs
        }
      </article>
      <Link to="blog" className="btn see-more">
        More blogs
      </Link>
    </section>
  );
};
export default RecentBlog;
