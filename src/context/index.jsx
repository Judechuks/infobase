import { useEffect, useState, createContext, useContext } from "react";
// import { eventData } from "../constant";

const AppContext = createContext();
// const domain = "http://localhost:1337";
const domain = "https://hospitable-approval-e28d91925e.strapiapp.com/";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [footerData, setFooterData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    setLoading(true);
    // Responses from All APIs
    const heroApi = fetch(`${domain}/api/hero-info?populate=*`).then(
      (response) => response.json()
    );
    const aboutApi = fetch(`${domain}/api/about-info?populate=*`).then(
      (response) => response.json()
    );
    const blogApi = fetch(`${domain}/api/blogs?populate=*`).then((response) =>
      response.json()
    );
    const eventApi = fetch(`${domain}/api/events?populate=*`).then((response) =>
      response.json()
    );
    const footerApi = fetch(`${domain}/api/footer-link?populate=*`).then(
      (response) => response.json()
    );
    const testimonialApi = fetch(`${domain}/api/testimonials?populate=*`).then(
      (response) => response.json()
    );

    // fetching all data (promise.all)
    Promise.all([
      heroApi,
      aboutApi,
      blogApi,
      eventApi,
      footerApi,
      testimonialApi,
    ])
      .then(
        ([heroRes, aboutRes, blogRes, eventRes, footerRes, testimonialRes]) => {
          setHeroData(heroRes);
          setAboutData(aboutRes);
          setBlogData(blogRes);
          setEventData(eventRes);
          setFooterData(footerRes);
          setTestimonialData(testimonialRes);
          setLoading(false);
        }
      )
      .catch((error) => console.error(error));
  }, []);

  const currentDate = new Date();

  const upcomingEvents = eventData?.data?.filter((event) => {
    const dateAndTime = `${event?.attributes.date} ${event?.attributes.time}`;
    return new Date(dateAndTime) >= currentDate;
  });

  const pastEvents = eventData?.data?.filter((event) => {
    const dateAndTime = `${event?.attributes.date} ${event?.attributes.time}`;
    return new Date(dateAndTime) < currentDate;
  });

  // time in 12 hours
  const getTime = (eventDate) => {
    let hrs = 0;
    let mins = 0;
    const AM_or_PM = eventDate.getHours() < 12 ? "AM" : "PM";
    // hours
    eventDate.getHours() <= 12
      ? (hrs = eventDate.getHours())
      : (hrs = eventDate.getHours() - 12);
    // minutes
    eventDate.getMinutes().toString().length > 1
      ? (mins = eventDate.getMinutes())
      : (mins = "0" + eventDate.getMinutes());
    return `${hrs} : ${mins} ${AM_or_PM}`;
  };

  // generating number of stars from rating
  const generateRating = (rating) => {
    let starArray = [];
    for (let i = 0; i < rating; i++) {
      starArray.push(i);
    }
    return starArray;
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        heroData,
        aboutData,
        blogData,
        eventData,
        footerData,
        testimonialData,
        upcomingEvents,
        pastEvents,
        domain,
        getTime,
        generateRating,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
