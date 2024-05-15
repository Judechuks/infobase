import "./NewsLetter.scss";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <h2 className="section-title">Newsletter</h2>
      <article>
        <p>
          Subscribe to our newsletter and get notified of our events and
          updates. Don&rsquo;t miss out.
        </p>
        <form action="">
          <input type="tel" placeholder="Enter Your Name" />
          <input type="tel" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </form>
      </article>
    </section>
  );
};
export default NewsLetter;
