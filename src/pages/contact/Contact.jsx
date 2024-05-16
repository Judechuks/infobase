import { useGlobalContext } from "../../context";
import "./Contact.scss";

const Contact = () => {
  const { footerData } = useGlobalContext();

  // determine which contact is being passed so as to determine the icon to use
  const getContactType = (type) => {
    if (type.toLowerCase() == "call") {
      return "mobile";
    } else if (type.toLowerCase() == "email") {
      return "envelope";
    } else if (type.toLowerCase() == "location") {
      return "location-dot";
    }
  };

  return (
    <section id="contact">
      <h1 className="section-title">CONTACT US</h1>
      <p>
        Please send us your enquires or feedback. We will always reply your
        messages swiftly.
      </p>
      <article>
        {/* contact info */}
        <div className="col-1">
          {footerData?.data?.attributes?.contact_links.data.map(
            (item, index) => (
              <div key={index} className="card">
                <span>
                  <i
                    className={`fa fa-${getContactType(
                      item?.attributes?.type
                    )}`}></i>
                </span>
                <aside>
                  <h3>{item?.attributes?.type}:</h3>
                  <a href={item?.attributes?.link}>
                    {item?.attributes?.contact}
                  </a>
                </aside>
              </div>
            )
          )}
        </div>
        {/* contact form */}
        <div className="col-2">
          <form>
            <div className="input-container">
              <input type="text" name="" placeholder="Your Name" />
              <input type="email" name="" placeholder="Your Email" />
            </div>
            <input type="text" name="" placeholder="Subject" />
            <textarea name="text" rows="10" placeholder="Message"></textarea>
            <button className="btn see-more">Send Message</button>
          </form>
        </div>
      </article>
    </section>
  );
};
export default Contact;
