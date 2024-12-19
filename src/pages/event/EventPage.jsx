import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  FaCalendarDays,
  FaClock,
  FaLocationDot,
  FaFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { CountDownTimer } from "../../components";
// import { eventData } from "../../constant";
import { useGlobalContext } from "../../context";
import "./EventPage.scss";

const EventPage = () => {
  const [eventSpeakers, setEventSpeakers] = useState([]);
  const { id } = useParams();
  // fetching eventData
  const { eventData, domain, getTime } = useGlobalContext();

  // fetch event speakers
  useEffect(() => {
    fetch(`${domain}/api/speakers?populate=*`)
      .then((res) => res.json())
      .then((data) => setEventSpeakers(data?.data))
      .catch((err) => console.log(err));
  }, [domain]);

  const currentEvent = eventData?.data?.find((event) => event.id == id);

  // if no event is found
  if (!currentEvent) {
    return (
      <section className="loaded-container">
        <h1 className="loaded-info">{`Event with ID ${id} does not exist.`}</h1>
      </section>
    );
  }

  const dateAndTime = `${currentEvent?.attributes?.date} ${currentEvent?.attributes?.time}`;
  const eventDate = new Date(dateAndTime);
  const difference = eventDate - Date.now();

  return (
    <section id="event-page">
      {/* ========== Event ========== */}
      <article className="event-banner">
        <div className="banner-content">
          {currentEvent?.attributes.title && (
            <h5 className="event-title">{currentEvent?.attributes.title}</h5>
          )}
          {currentEvent?.attributes.theme && (
            <h4 className="event-theme">
              Theme: {currentEvent?.attributes.theme}
            </h4>
          )}
          {currentEvent?.attributes.slogan && (
            <h5 className="event-slogan">
              Slogan: {currentEvent?.attributes.slogan}
            </h5>
          )}
          {currentEvent?.attributes.text && (
            <ReactMarkdown className="event-desc">
              {currentEvent?.attributes.text}
            </ReactMarkdown>
          )}
          <div className="event-details">
            <nav>
              <h4>
                <FaLocationDot /> Location
              </h4>
              <h5>{currentEvent?.attributes.venue}</h5>
            </nav>
            <nav>
              <h4>
                <FaCalendarDays /> Date
              </h4>
              <h5>{eventDate.toDateString()}</h5>
            </nav>
            <nav>
              <h4>
                <FaClock /> Time
              </h4>
              {/* <h5>{currentEvent?.attributes.time}</h5> */}
              <h5>{getTime(eventDate)}</h5>
            </nav>
          </div>
          <p>Event Countdown</p>
          <div className="countdown-container">
            <CountDownTimer
              date={currentEvent?.attributes.date}
              time={currentEvent?.attributes.time}
            />
          </div>
          {difference > 0 && (
            <a
              href={currentEvent?.attributes.registerLink}
              target="_blank"
              className="btn">
              Register for event
            </a>
          )}
        </div>
        <div className="banner-image">
          {currentEvent?.attributes.thumbnail.data && (
            <img
              src={`${domain}${currentEvent?.attributes.thumbnail.data?.attributes.url}`}
              // src={`${currentEvent?.attributes.thumbnail.data?.attributes.url}`}
              alt="event banner"
            />
          )}
        </div>
      </article>
      {/* ========== Speakers ========== */}
      {currentEvent?.attributes?.speakers?.data.length > 0 && (
        <article>
          <h2 className="section-title">Our Speakers</h2>
          <div className="card-container">
            {currentEvent?.attributes?.speakers?.data.map((speaker, index) => {
              const currentSpeaker = eventSpeakers?.find(
                (person) => person.id == speaker.id
              );
              return (
                <div key={index} className="card">
                  <figure>
                    <img
                      src={currentSpeaker?.attributes.imgLink}
                      alt="speaker"
                    />
                    <figcaption>
                      <h4>{currentSpeaker?.attributes.name}</h4>
                      <div className="speaker-info">
                        <p>{currentSpeaker?.attributes.role}</p>
                        <aside className="social-handles">
                          {currentSpeaker?.attributes.handle?.map(
                            (item, index) => {
                              if (item.platform == "facebook") {
                                return (
                                  <a
                                    key={index}
                                    href={item.link}
                                    target="_blank">
                                    <FaFacebook />
                                  </a>
                                );
                              }
                              if (item.platform == "twitter") {
                                return (
                                  <a
                                    key={index}
                                    href={item.link}
                                    target="_blank">
                                    <FaSquareXTwitter />
                                  </a>
                                );
                              }
                              if (item.platform == "instagram") {
                                return (
                                  <a
                                    key={index}
                                    href={item.link}
                                    target="_blank">
                                    <FaSquareInstagram />
                                  </a>
                                );
                              }
                            }
                          )}
                        </aside>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
        </article>
      )}
      {/* ========== Sponsors ========== */}
      {currentEvent?.attributes?.sponsors?.data?.length > 0 && (
        <article>
          <h2 className="section-title">Our Sponsors</h2>
          <div className="sponsor-container">
            {currentEvent?.attributes?.sponsors.data.map((sponsor, index) => (
              <div key={index} className="figcard">
                <figure>
                  <img
                    src={sponsor?.attributes.logoLink}
                    alt="sponsor's logo"
                  />
                </figure>
                <figcaption>{sponsor?.attributes.name}</figcaption>
              </div>
            ))}
          </div>
        </article>
      )}
    </section>
  );
};
export default EventPage;
