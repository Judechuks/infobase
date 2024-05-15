// import { heroData } from "../../constant";
import { useGlobalContext } from "../../context";
import "./Hero.scss";

const Hero = () => {
  const { heroData, domain } = useGlobalContext();
  return (
    <section id="hero">
      <img
        src={`${domain}${heroData?.data?.attributes?.heroImg?.data?.attributes?.url}`}
        alt="hero image"
      />
      <article>
        <h1>{heroData?.data?.attributes?.heroTitle}</h1>
        <p>{heroData?.data?.attributes?.heroDesc}</p>
        <a href="/blog" className="btn">
          Get Started
        </a>
      </article>
    </section>
  );
};
export default Hero;
