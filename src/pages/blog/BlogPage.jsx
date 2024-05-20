import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
// import { blogData } from "../../constant";
import { useGlobalContext } from "../../context";
import { ModalOverlay } from "../../components";
import "./BlogPage.scss";

const BlogPage = () => {
  const { id } = useParams();
  // const { domain, blogData } = useGlobalContext();
  const { blogData } = useGlobalContext();

  // fetch the item that was clicked
  const fetchedBlog = blogData?.data?.find((blog) => blog.id == id);

  const {
    title,
    author,
    date,
    text,
    thumbnail,
    category,
    photogallery,
    video,
  } = fetchedBlog.attributes;

  const [showModal, setShowModal] = useState(false);
  const [itemOnModal, setItemOnModal] = useState();
  const [index, setIndex] = useState();

  const displayPhotoModal = (index) => {
    setItemOnModal(photogallery.data);
    setIndex(index);
    setShowModal(true);
  };

  // related posts
  const relatedPosts = blogData?.data?.filter(
    (blog) => blog.attributes.category === category && blog.id != id
  );
  // finds all the posts that are in the same category but does not include itself

  return (
    <section id="blog-page">
      {showModal && (
        <ModalOverlay
          index={index}
          setIndex={setIndex}
          itemOnModal={itemOnModal}
          setShowModal={setShowModal}
        />
      )}
      <h1 className="section-title">Blog Page</h1>
      {thumbnail.data && (
        <img
          // src={`${domain}${thumbnail.data?.attributes.url}`}
          src={`${thumbnail.data?.attributes.url}`}
          alt="blog banner"
          className="blog-banner"
        />
      )}
      <main>
        {/* col-1 */}
        <article className="col-1">
          <div className="author-section">
            <img src={author.data?.attributes.imgLink} alt="author" />
            <aside>
              <h3>{author.data?.attributes.name}</h3>
              <p>{date}</p>
            </aside>
          </div>
          <h2 className="sub-title">{title}</h2>
          <div className="text-content">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </article>

        {/* col-2 */}
        <article className="col-2">
          {category && (
            <div className="category-container">
              <h3 className="category-h3">Category:</h3>
              <p>{category}</p>
            </div>
          )}
          {photogallery.data && (
            <div className="photo-gallery-container">
              <h3>Photo Gallery</h3>
              <div className="photo-gallery">
                {photogallery.data.map((photo, index) => (
                  <img
                    key={index}
                    // src={`${domain}${photo.attributes.url}`}
                    src={`${photo.attributes.url}`}
                    alt="photo"
                    onClick={() => displayPhotoModal(index)}
                  />
                ))}
              </div>
            </div>
          )}
          {video.data && (
            <div className="moments">
              <h3>Moments</h3>
              <video
                // src={`${domain}${video.data.attributes.url}`}
                src={`${video.data.attributes.url}`}
                controls></video>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div className="related-posts-section">
              <h3>Related Posts</h3>
              <div className="related-posts-container">
                {
                  relatedPosts
                    .map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="related-posts">
                        <div className="thumbnail">
                          <img
                            // src={`${domain}${post?.attributes.thumbnail.data?.attributes.url}`}
                            src={`${post?.attributes.thumbnail.data?.attributes.url}`}
                            alt="related post"
                          />
                        </div>
                        <aside>
                          <h4>{post.attributes.title}</h4>
                          <p>{post.attributes.author.data?.attributes.name}</p>
                          <p>{post.attributes.date}</p>
                        </aside>
                      </Link>
                    ))
                    .slice(0, 4) // picking the first four related posts
                }
              </div>
            </div>
          )}
        </article>
      </main>
    </section>
  );
};
export default BlogPage;
