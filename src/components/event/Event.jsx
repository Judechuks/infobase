import { FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useGlobalContext } from "../../context";
import "./Event.scss";

const Event = ({ id, thumbnail, title, text, date, time, venue }) => {
  // const { domain, getTime } = useGlobalContext();
  const { getTime } = useGlobalContext();
  const dateAndTime = `${date} ${time}`;
  const eventDate = new Date(dateAndTime);

  return (
    <div className="event-card">
      <Link to={`/events/${id}`}>
        <img
          // src={`${domain}${thumbnail.data?.attributes.url}`}
          src={`${thumbnail.data?.attributes.url}`}
          alt="event thumbnail"
        />
      </Link>
      <div className="content">
        <Link to={`/events/${id}`}>
          <h3>{title}</h3>
        </Link>
        <ReactMarkdown>{text?.slice(0, 60) + "..."}</ReactMarkdown>
        <Link className="read-more" to={`/events/${id}`}>
          Read more
        </Link>
        <div className="event-detail">
          <div className="date-time">
            <div className="icon-span">
              <FaCalendar className="icon" />
              <p>{eventDate.toDateString()}</p>
            </div>
            <div className="icon-span">
              <FaClock className="icon" />
              <p>{getTime(eventDate)}</p>
            </div>
          </div>
          <div className="icon-span">
            <FaLocationDot className="icon" />
            <h4>{venue}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
