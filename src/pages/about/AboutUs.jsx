import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContext";
import { Testimonials } from "../../sections";
import "./AboutUs.scss";

const AboutUs = () => {
  // getting about information
  // const { aboutData, domain } = useGlobalContext();
  const { aboutData } = useGlobalContext();

  // getting the relevant icon based on the type of statement
  const getIcon = (type) => {
    if (type == "mission") {
      return "lightbulb";
    }
    if (type == "vision") {
      return "rocket";
    }
    if (type == "core values") {
      return "shield-halved";
    }
  };
  return (
    <main id="about-us">
      {/* Intro */}
      <section className="intro">
        <div className="content">
          <h1>{aboutData?.data?.attributes.introTitle}</h1>
          <p>{aboutData?.data?.attributes.introMsg}</p>
          <div className="btn-container">
            <Link
              to={aboutData?.data?.attributes.partnershipLink}
              target="_blank"
              className="btn"
            >
              Partner With Us
            </Link>
            <Link to="/contact" className="btn cta">
              Reach out to Us
            </Link>
          </div>
        </div>
      </section>
      {/* About us */}
      <section className="about">
        <article>
          <img
            // src={`${domain}${aboutData?.data?.attributes.aboutImg.data?.attributes?.url}`}
            src={`${aboutData?.data?.attributes.aboutImg.data?.attributes?.url}`}
            alt="about"
          />
        </article>
        <article>
          {/* <h1>{aboutData?.data?.attributes.aboutTitle}</h1> */}
          <h1>About Us</h1>
          <p>{aboutData?.data?.attributes.aboutDesc}</p>
        </article>
      </section>
      {/* mission and vision */}
      <section>
        <h1 className="section-title">Our Reason of Being</h1>
        <div className="mission-vision">
          {aboutData?.data?.attributes.mission?.map((item, index) => {
            return (
              <article key={index}>
                <i className={`fa fa-${getIcon(item.type)}`}></i>
                <h3>our {item.type}</h3>
                <p>{item.statement}</p>
              </article>
            );
          })}
        </div>
      </section>
      {/* Testimonial */}
      <section>
        <Testimonials />
      </section>
    </main>
  );
};
export default AboutUs;
