import { Event } from "../../components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContext";
import "./UpcomingEvents.scss";

const UpcomingEvents = () => {
  const { upcomingEvents } = useGlobalContext();

  return (
    upcomingEvents?.length > 0 && (
      <section id="upcoming">
        <h1 className="section-title">Upcoming Events</h1>
        <article>
          {
            upcomingEvents
              ?.map((item, index) => (
                <Event key={index} id={item.id} {...item?.attributes} />
              ))
              .slice(0, 3) // first 3 events
          }
        </article>

        <Link to="events" className="btn see-more">
          More events
        </Link>
      </section>
    )
  );
};
export default UpcomingEvents;
