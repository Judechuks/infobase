// import { aboutData } from "../../constant";
import { useGlobalContext } from "../../context";
import "./About.scss";

const About = () => {
  const { aboutData, domain } = useGlobalContext();
  return (
    <section id="about">
      <h1 className="section-title">
        {/* {aboutData?.data?.attributes.aboutTitle} */}
        About Us
      </h1>
      <div className="about-container">
        <article>
          <img
            src={`${domain}${aboutData?.data?.attributes.aboutImg.data?.attributes?.formats?.large?.url}`}
            alt="hero image"
          />
        </article>
        <article>
          <p>{aboutData?.data?.attributes.aboutDesc}</p>
          <a href="/about" className="btn see-more">
            Read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
