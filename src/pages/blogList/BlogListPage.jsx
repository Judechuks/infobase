import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Blog } from "../../components";
import { useGlobalContext } from "../../context";
// import { blogData } from "../../constant";
import "./BlogListPage.scss";

const BlogListPage = () => {
  // fetch items - get all the blogs
  const { blogData } = useGlobalContext();
  const [items, setItems] = useState([]);

  // get all the events
  useEffect(() => {
    setItems(blogData?.data);
  }, [blogData?.data]);

  // pagination logic starts here
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    setItemOffset(newOffset);
  };
  // pagination logic ends here

  // categories for the blogs
  const categories = new Set(
    blogData.data?.map((item) => item?.attributes.category)
  );

  const [active, setActive] = useState("all");
  const categoryBtns = ["all", ...categories];

  const filterBlogs = (text) => {
    const matchedItems = blogData?.data?.filter(
      (item) => item.attributes.category === text
    );
    if (matchedItems.length) {
      setItems(matchedItems);
      return;
    }
    setItems(blogData?.data);
  };

  return (
    <section id="blog-container">
      <h1 className="section-title">Blogs</h1>
      <div className="blog-category">
        {categoryBtns.map((btn, index) => (
          <button
            key={index}
            className={`btn ${btn === active && "active"}`}
            onClick={() => {
              filterBlogs(btn);
              setActive(btn);
            }}>
            {btn}
          </button>
        ))}
      </div>
      <article>
        {currentItems?.map((blog, index) => (
          <Blog key={index} id={blog.id} {...blog?.attributes} />
        ))}
      </article>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        // number of page count/numbers before or after the breakLabel "..."
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        // to add className for styling
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </section>
  );
  // return <h1>hi</h1>;
};
export default BlogListPage;
