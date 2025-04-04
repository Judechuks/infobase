// import { heroData } from "../../constant";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContext";
import "./Hero.scss";

const Hero = () => {
  // const { heroData, domain } = useGlobalContext();
  const { heroData } = useGlobalContext();
  return (
    <section id="hero">
      <img
        // src={`${domain}${heroData?.data?.attributes?.heroImg?.data?.attributes?.url}`}
        src={`${heroData?.data?.attributes?.heroImg?.data?.attributes?.url}`}
        alt="hero image"
      />
      <article>
        <h1>{heroData?.data?.attributes?.heroTitle}</h1>
        <p>{heroData?.data?.attributes?.heroDesc}</p>
        <Link to="/blog" className="btn">
          Get Started
        </Link>
      </article>
    </section>
  );
};
export default Hero;
