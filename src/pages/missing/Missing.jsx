import { Link } from "react-router-dom";
import "./Missing.scss";

const Missing = () => {
  return (
    <section className="missing-container">
      <h1>
        Page <span>not found</span>
      </h1>
      <article>
        <div className="first-col">404</div>
        <div className="second-col">
          <h1>sorry!</h1>
          <p>The page you&rsquo;re looking for was not found.</p>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </article>
    </section>
  );
};
export default Missing;
