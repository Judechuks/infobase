import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { useGlobalContext } from "../../context/globalContext";
import "./TestimonialCard.scss";

const TestimonialCard = (props) => {
  // const { generateRating, domain } = useGlobalContext();
  const { generateRating } = useGlobalContext();

  return (
    <article className="testimonial-card">
      <header>
        <img
          // src={`${domain}${props?.attributes?.image.data.attributes.url}`}
          src={`${props?.attributes?.image.data.attributes.url}`}
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

TestimonialCard.propTypes = {
  attributes: PropTypes.node.isRequired,
};
