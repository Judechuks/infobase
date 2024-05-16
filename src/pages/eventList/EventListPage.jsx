import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Event } from "../../components";
import { useGlobalContext } from "../../context";
// import { eventData } from "../../constant";
import "./EventListPage.scss";

const EventListPage = () => {
  // fetch items
  const { eventData, upcomingEvents, pastEvents } = useGlobalContext();
  const [items, setItems] = useState([]);

  // get all the events
  useEffect(() => {
    setItems(eventData?.data);
  }, [eventData?.data]);

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

  // upcoming and past events
  const [active, setActive] = useState("all");
  const categoryBtns = ["all", "upcoming", "past"];

  const filterBlogs = (text) => {
    if (text === "all") {
      setItems(eventData?.data);
    } else if (text === "upcoming") {
      setItems(upcomingEvents);
    } else if (text === "past") {
      setItems(pastEvents);
    } else {
      return;
    }
  };

  return (
    <section id="events-container">
      <h1 className="section-title">Events</h1>
      <div className="event-category">
        {categoryBtns.map((btn, index) => (
          <button
            key={index}
            className={`btn ${btn == active && "active"}`}
            onClick={() => {
              filterBlogs(btn);
              setActive(btn);
            }}>
            {btn}
          </button>
        ))}
      </div>
      <article>
        {currentItems?.length > 0 &&
          currentItems?.map((event, index) => (
            <Event key={index} {...event?.attributes} id={event.id} />
          ))}
      </article>
      {currentItems?.length == 0 && active !== "all" && (
        <section className="loaded-container">
          <h1 className="loaded-info">There is currently no {active} event.</h1>
        </section>
      )}
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
};
export default EventListPage;
