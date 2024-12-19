import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useGlobalContext } from "../../context";
import "./Blog.scss";

const Blog = ({ id, thumbnail, title, text, author, date, imgLink }) => {
  const { domain } = useGlobalContext();
  const eventDate = new Date(date);
  return (
    <div className="blog-card">
      <Link to={`/blog/${id}`}>
        <img
          src={`${domain}${thumbnail.data?.attributes.url}`}
          // src={`${thumbnail.data?.attributes.url}`}
          alt="blog thumbnail"
        />
      </Link>
      <Link to={`/blog/${id}`}>
        <h3>{title}</h3>
      </Link>
      <ReactMarkdown>{text?.slice(0, 80) + "..."}</ReactMarkdown>
      <Link className="read-more" to={`/blog/${id}`}>
        Read more
      </Link>
      <div className="detail-container">
        <img src={author?.data?.attributes.imgLink} alt="author" />
        <aside>
          <p>{date && eventDate.toDateString()}</p>
          <h4>{author?.data?.attributes.name}</h4>
        </aside>
      </div>
    </div>
  );
};
export default Blog;
