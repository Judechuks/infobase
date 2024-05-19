import { FaStar } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import "./TestimonialCard.scss";

const TestimonialCard = (props) => {
  const { generateRating, domain } = useGlobalContext();

  return (
    <article className="testimonial-card">
      <header>
        <img
          src={`${domain}${props?.attributes?.image.data.attributes.url}`}
          alt={props?.attributes?.name}
        />
        <div>
          <h2>{props?.attributes?.name}</h2>
          <p>{props?.attributes?.position}</p>
        </div>
      </header>
      <section>
        <p>{props?.attributes?.feedback}</p>
      </section>
      <footer>
        {generateRating(props?.attributes?.rating).map((item, index) => (
          <FaStar key={index} className="star" />
        ))}
      </footer>
    </article>
  );
};
export default TestimonialCard;
