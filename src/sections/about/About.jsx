// import { aboutData } from "../../constant";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./About.scss";

const About = () => {
  // const { aboutData, domain } = useGlobalContext();
  const { aboutData } = useGlobalContext();
  console.log(aboutData?.data?.attributes.aboutImg.data?.attributes?.url);

  return (
    <section id="about">
      <h1 className="section-title">
        {/* {aboutData?.data?.attributes.aboutTitle} */}
        About Us
      </h1>
      <div className="about-container">
        <article>
          <img
            // src={`${domain}${aboutData?.data?.attributes.aboutImg.data?.attributes?.url}`}
            src={`${aboutData?.data?.attributes.aboutImg.data?.attributes?.url}`}
            alt="hero image"
          />
        </article>
        <article>
          <p>{aboutData?.data?.attributes.aboutDesc}</p>
          <Link to="/about" className="btn see-more">
            Read more
          </Link>
        </article>
      </div>
    </section>
  );
};
export default About;
